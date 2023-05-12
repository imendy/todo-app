import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps, session }: AppProps) {
   return (
    <SessionProvider session={session}>
    <ThemeProvider enableSystem={true}  attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
   </SessionProvider>
  )
}

export default MyApp