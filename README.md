# NextAuth session undefined in getServerSideProps - Next.js 15

This repository demonstrates a bug where `unstable_getServerSession` returns an undefined session in `getServerSideProps` despite the user being logged in. This happens inconsistently and seems to be related to how NextAuth handles sessions in conjunction with `getServerSideProps` in Next.js 15.

## Steps to Reproduce

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Log in using the NextAuth provider (e.g., Google, Github).
5. Navigate to `/about`.
6. Observe the console for the `session` object. It will sometimes be undefined.

## Expected Behavior

The `session` object should always contain user session data when the user is authenticated.

## Actual Behavior

The `session` object is occasionally `undefined`, causing errors if the component relies on session data.

## Workaround

The provided solution file provides a temporary solution using a simple redirect to ensure the session is populated. This however, has performance trade-offs. A better long-term solution is needed to address the root cause of the inconsistency.