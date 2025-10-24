import { Property } from '../types/property';
import { getJSON } from './api';

// If you don't have an actual backend yet, we fallback to mock data (see mock below)
export async function fetchProperties(): Promise<Property[]> {
  try {
    return await getJSON<Property[]>('/properties');
  } catch (err) {
    // fallback: load local mock file (keep a mock json at src/assets/mock/properties.json)
    const resp = await fetch('/mock/properties.json'); // served from public/mock
    if (!resp.ok) throw err;
    return resp.json();
  }
}

export async function fetchPropertyById(id: string): Promise<Property> {
  try {
    return await getJSON<Property>(`/properties/${id}`);
  } catch {
    // fallback to local mock
    const resp = await fetch('/mock/properties.json');
    if (!resp.ok) throw new Error('Not found');
    const items: Property[] = await resp.json();
    const p = items.find((x) => x.id === id);
    if (!p) throw new Error('Not found');
    return p;
  }
}
