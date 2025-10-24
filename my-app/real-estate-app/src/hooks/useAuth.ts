// Optional helper to expose auth methods — uses the context
import { useAuth as useAuthContext } from '../contexts/AuthContext';
export default function useAuth() {
  return useAuthContext();
}
