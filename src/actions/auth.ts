'use server';

import { redirect } from 'next/navigation';
import { createSession, deleteSession } from '@/lib/session';

const USERS: Record<string, string> = {};

export type LoginFormState = {
  error: string | null;
};

export async function login(
  prevState: LoginFormState,
  formData: FormData
): Promise<LoginFormState> {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  if (!username || !password) {
    return { error: 'Please enter both username and password.' };
  }

  const expectedPassword = USERS[username.toLowerCase()];

  if (!expectedPassword || password !== expectedPassword) {
    return { error: 'Invalid username or password.' };
  }

  await createSession(username);
  redirect('/upload');
}

export async function logout() {
  await deleteSession();
  redirect('/');
}
