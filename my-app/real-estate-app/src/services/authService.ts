import { User } from '../types/user';

// Simple fake auth for demo. Replace with real API later.
export async function loginApi(email: string, password: string): Promise<User> {
  // pretend call
  await new Promise((r) => setTimeout(r, 600));
  if (!email || !password) throw new Error('Invalid credentials');
  return { id: '1', name: 'Demo User', email, token: 'demo-token' };
}

export async function registerApi(name: string, email: string, password: string): Promise<User> {
  await new Promise((r) => setTimeout(r, 700));
  return { id: '2', name, email, token: 'demo-token' };
}
