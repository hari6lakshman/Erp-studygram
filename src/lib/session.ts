import { cookies } from 'next/headers';

const SESSION_COOKIE_NAME = 'studygram_session';

export async function createSession(username: string) {
  cookies().set(SESSION_COOKIE_NAME, username, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 1 day
    path: '/',
  });
}

export async function getSession() {
  const session = cookies().get(SESSION_COOKIE_NAME);
  return session ? { username: session.value } : null;
}

export async function deleteSession() {
  cookies().delete(SESSION_COOKIE_NAME);
}
