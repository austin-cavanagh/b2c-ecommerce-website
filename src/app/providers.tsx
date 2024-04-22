'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

type Props = {
  children: ReactNode;
};

function Providers({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      // enableSystem={true}
      // enableColorScheme={true}
    >
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
}

export default Providers;
