'use client';

import { SessionProvider, SessionProviderProps } from 'next-auth/react';


export const authProvider = ({ children }: SessionProviderProps) => {
  return (
    <SessionProvider >
      {children}
    </SessionProvider>
  );
};
export default authProvider;