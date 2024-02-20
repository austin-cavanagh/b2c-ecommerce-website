'use client';
import { useSession } from 'next-auth/react';

export function User() {
  const { data: session } = useSession();
  console.log(session);
  return <pre>{JSON.stringify(session)}</pre>;
}
