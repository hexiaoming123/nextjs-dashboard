import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'; //引入字体
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //使用字体
  return (
    <html lang="en">
      <head>
        <meta name="description" content="你的应用描述" />
        <title>我的 Next.js 应用</title>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
