// Small wrapper — change baseURL to your API when ready
export const API_BASE = process.env.REACT_APP_API_URL || '';

export async function getJSON<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}
