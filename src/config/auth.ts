import { userService } from '@/services/user.service';
import { getServerSession, type NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token }) {
      return token;
    },
    async session({ session }) {
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        const user = await userService.authenticate(username, password);

        return user;
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
