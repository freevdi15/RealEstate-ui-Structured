import { useEffect, useState } from 'react';
import { Property } from '../types/property';
import { fetchProperties } from '../services/propertyService';

export default function useProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchProperties()
      .then((data) => setProperties(data))
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }, []);

  return { properties, setProperties, loading, error };
}
