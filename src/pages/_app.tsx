import { type AppType } from 'next/dist/shared/lib/utils';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';
import { Roboto } from '@next/font/google';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  // Update with Layout later
  const curPath = router.asPath;
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <main className={roboto.className}>
        {curPath !== '/' ? <Navbar /> : null}
        <Component {...pageProps} />
      </main>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default MyApp;
