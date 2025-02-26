import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;
//排除以 api、_next/static、_next/image 开头的 URL 路径。
//排除以 .png 结尾的图片文件路径。
//其他路径都会匹配，并且会被中间件（可能是身份验证逻辑）处理
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)'],
};
