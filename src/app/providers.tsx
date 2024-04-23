'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';

type Props = {
  children: ReactNode;
};

function Providers({ children }: Props) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false} // Uncomment if you want to support system theme preference
        // enableColorScheme
        // disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}

export default Providers;
