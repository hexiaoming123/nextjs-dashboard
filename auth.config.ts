import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    //如果访问 /dashboard 且未登录 → 返回 false，阻止访问。
    //如果访问 /dashboard 且已登录 → 允许访问。
    //如果访问非 /dashboard 页面且已登录 → 自动重定向到 /dashboard。
    //其他情况（如未登录访问非 /dashboard 页面）→ 允许访问。
    authorized({ auth, request: { nextUrl } }) {
      //为什么使用 !!auth?.user？
      //在 JavaScript 里，某些值（如 null、undefined、0、""、false）被认为是 "假值" (Falsy values)，而对象、数组、非空字符串等是 "真值" (Truthy values)。
      //如果直接写 auth?.user，它可能返回 undefined，但在某些情况下你可能需要明确得到 true 或 false，所以用 !! 强制转换成布尔值。
      //!!auth?.user 用于检查 auth.user 是否存在，并返回 true（已登录）或 false（未登录）。
      //这是 JavaScript 中的惯用写法，常用于权限检查、状态判断等场景。
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
