```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import { useRouter } from 'next/router';

export default function About({ session }) {
  const router = useRouter();
  
  // Redirect if session is still undefined
  if (!session) {
    router.push('/');
    return null;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>User Email: {session.user.email}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
  console.log(session);
  return {
    props: {
      session: session,
    },
  };
}
```