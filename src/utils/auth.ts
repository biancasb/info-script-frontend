export const decodeJWT = (token: string): any => {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Token inválido');
    }

    const decoded = JSON.parse(atob(parts[1]));
    return decoded;
  } catch (error) {
    console.error('Erro ao decodificar JWT:', error);
    return null;
  }
};

export const getTokenPayload = (): any => {
  const token = localStorage.getItem('auth_token');
  if (!token) return null;
  return decodeJWT(token);
};

export const getCurrentUsername = (): string | null => {
  const payload = getTokenPayload();
  return payload?.nickname || null;
};

export const getCurrentUserName = (): string | null => {
  const payload = getTokenPayload();
  return payload?.nome || null;
};

export const getCurrentUserId = (): string | null => {
  const payload = getTokenPayload();
  return payload?.userId || null;
};

export const getCurrentUserRole = (): string | null => {
  const payload = getTokenPayload();
  return payload?.cargo || null;
};

export const getCurrentUserYear = (): number | null => {
  const payload = getTokenPayload();
  return payload?.anoIngresso || null;
};

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('auth_token');
  return !!token;
};

export const logout = (): void => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('userId');
};

export default {
  decodeJWT,
  getTokenPayload,
  getCurrentUsername,
  getCurrentUserName,
  getCurrentUserId,
  getCurrentUserRole,
  getCurrentUserYear,
  isAuthenticated,
  logout,
};
