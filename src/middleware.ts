import { withAuth } from 'next-auth/middleware';

export default withAuth({
  secret: process.env.SECRET,
});

// block account route if the user is not logged in
export const config = {
  matcher: ['/account'],
};
