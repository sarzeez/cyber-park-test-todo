'use client';
import React from 'react';
import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

type Props = {
  children: React.ReactNode;
  session?: Session | null | undefined;
};

const SessionProvider = ({ children, session }: Props) => {
  return <NextAuthSessionProvider session={session}>{children}</NextAuthSessionProvider>;
};

export default SessionProvider;
