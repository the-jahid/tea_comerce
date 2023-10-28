import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes:[
    '/all_items(.*)',
    "/product_card_details(.*)",
    "/cart",
    "/"
  ]
});

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/',
    '/sign-in',
    '/sign-up',
    '/all_items(.*)',
    '/(api|trpc)(.*)',
  ],
};