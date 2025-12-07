import { z } from 'zod';

export const emailSchema = z
  .string()
  .email('Email inválido')
  .min(1, 'Email é obrigatório');

export const usernameSchema = z
  .string()
  .min(3, 'Usuário deve ter no mínimo 3 caracteres')
  .max(20, 'Usuário deve ter no máximo 20 caracteres')
  .regex(/^[a-zA-Z0-9_-]+$/, 'Usuário pode conter apenas letras, números, _ e -');

export const strongPasswordSchema = z
  .string()
  .min(8, 'Senha deve ter no mínimo 8 caracteres')
  .regex(/[a-z]/, 'Senha deve conter pelo menos uma letra minúscula')
  .regex(/[A-Z]/, 'Senha deve conter pelo menos uma letra maiúscula')
  .regex(/\d/, 'Senha deve conter pelo menos um número')
  .regex(/[\W_]/, 'Senha deve conter pelo menos um símbolo especial');

export const passwordSchema = z
  .string()
  .min(6, 'Senha deve ter no mínimo 6 caracteres');

export const fullNameSchema = z
  .string()
  .min(2, 'Nome deve ter no mínimo 2 caracteres')
  .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras e espaços');

export const cpfSchema = z
  .string()
  .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/, 'CPF inválido');

export const phoneSchema = z
  .string()
  .regex(/^\(?[0-9]{2}\)?[0-9]{4,5}-?[0-9]{4}$/, 'Telefone inválido');

export const urlSchema = z
  .string()
  .url('URL inválida');

export const yearSchema = z
  .number()
  .min(2015, 'Ano deve ser a partir de 2015')
  .max(new Date().getFullYear(), `Ano não pode ser superior a ${new Date().getFullYear()}`);

export const loginSchema = z.object({
  nickname: usernameSchema,
  senha: passwordSchema,
});

export type LoginInput = z.infer<typeof loginSchema>;

export const registerBasicSchema = z
  .object({
    email: emailSchema,
    username: usernameSchema,
    password: strongPasswordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas não coincidem',
    path: ['confirmPassword'],
  });

export type RegisterBasicInput = z.infer<typeof registerBasicSchema>;

export const registerFullSchema = z
  .object({
    nome: fullNameSchema,
    anoIngresso: yearSchema,
    nickname: usernameSchema,
    senha: passwordSchema,
  });

export type RegisterFullInput = z.infer<typeof registerFullSchema>;

export const validateLogin = (
  nickname: string,
  senha: string
): { success: boolean; data?: LoginInput; errors?: Record<string, string> } => {
  try {
    const data = loginSchema.parse({ nickname, senha });
    return { success: true, data };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.issues.forEach((issue: z.ZodIssue) => {
        if (issue.path[0]) {
          errors[String(issue.path[0])] = issue.message;
        }
      });
      return { success: false, errors };
    }
    return { success: false, errors: { form: 'Erro na validação' } };
  }
};

export const validateRegisterBasic = (
  email: string,
  username: string,
  password: string,
  confirmPassword: string
): { success: boolean; data?: RegisterBasicInput; errors?: Record<string, string> } => {
  try {
    const data = registerBasicSchema.parse({
      email,
      username,
      password,
      confirmPassword,
    });
    return { success: true, data };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.issues.forEach((issue: z.ZodIssue) => {
        if (issue.path[0]) {
          errors[String(issue.path[0])] = issue.message;
        }
      });
      return { success: false, errors };
    }
    return { success: false, errors: { form: 'Erro na validação' } };
  }
};

export const validateRegisterFull = (
  nome: string,
  anoIngresso: number | string,
  nickname: string,
  senha: string
): { success: boolean; data?: RegisterFullInput; errors?: Record<string, string> } => {
  try {
    const year = typeof anoIngresso === 'string' ? parseInt(anoIngresso, 10) : anoIngresso;
    const data = registerFullSchema.parse({
      nome,
      anoIngresso: year,
      nickname,
      senha,
    });
    return { success: true, data };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.issues.forEach((issue: z.ZodIssue) => {
        if (issue.path[0]) {
          errors[String(issue.path[0])] = issue.message;
        }
      });
      return { success: false, errors };
    }
    return { success: false, errors: { form: 'Erro na validação' } };
  }
};

export const isValidEmail = (email: string): boolean => {
  try {
    emailSchema.parse(email);
    return true;
  } catch {
    return false;
  }
};

export const isValidUsername = (username: string): boolean => {
  try {
    usernameSchema.parse(username);
    return true;
  } catch {
    return false;
  }
};

export const isStrongPassword = (password: string): boolean => {
  try {
    strongPasswordSchema.parse(password);
    return true;
  } catch {
    return false;
  }
};

export const isValidPassword = (password: string): boolean => {
  try {
    passwordSchema.parse(password);
    return true;
  } catch {
    return false;
  }
};

export const isValidFullName = (name: string): boolean => {
  try {
    fullNameSchema.parse(name);
    return true;
  } catch {
    return false;
  }
};

export const isValidCPF = (cpf: string): boolean => {
  try {
    cpfSchema.parse(cpf);
    return true;
  } catch {
    return false;
  }
};

export const isValidPhone = (phone: string): boolean => {
  try {
    phoneSchema.parse(phone);
    return true;
  } catch {
    return false;
  }
};

export const isValidUrl = (url: string): boolean => {
  try {
    urlSchema.parse(url);
    return true;
  } catch {
    return false;
  }
};

export { z };

export default {
  emailSchema,
  usernameSchema,
  strongPasswordSchema,
  passwordSchema,
  fullNameSchema,
  cpfSchema,
  phoneSchema,
  urlSchema,
  yearSchema,
  loginSchema,
  registerBasicSchema,
  registerFullSchema,
  validateLogin,
  validateRegisterBasic,
  validateRegisterFull,
  isValidEmail,
  isValidUsername,
  isStrongPassword,
  isValidPassword,
  isValidFullName,
  isValidCPF,
  isValidPhone,
  isValidUrl,
};
