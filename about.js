```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../pages/api/auth/[...nextauth]';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

//getServerSideProps is used here to test the issue
export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
  //This session is always undefined
  console.log(session);
  return {
    props: {
      //Will cause an error if session is undefined
      session:session
    }
  };
}
```