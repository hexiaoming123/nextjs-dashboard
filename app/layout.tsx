import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'; //引入字体
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  //https://next-learn-dashboard.vercel.sh
  metadataBase: new URL('http://localhost:3000'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //使用字体
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
