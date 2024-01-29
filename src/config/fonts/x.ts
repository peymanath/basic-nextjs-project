import localFont from 'next/font/local';

export const xFont = localFont({
  src: [
    {
      path: '../../public/fonts/x.woff2',
      style: 'normal',
      weight: 'normal',
    },
  ],
  variable: '--font-x',
});
