// Middleware for nextauth to block routes when the user is not authenticated

import { withAuth } from 'next-auth/middleware';

export default withAuth({
  secret: process.env.SECRET,
});

// Block account route if the user is not logged in
export const config = {
  matcher: ['/account'],
};
