import React, { createContext, useContext, useState } from 'react';
import { Property } from '../types/property';

interface PropertyContextType {
  properties: Property[];
  setProperties: React.Dispatch<React.SetStateAction<Property[]>>;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export const PropertyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [properties, setProperties] = useState<Property[]>([]);
  return <PropertyContext.Provider value={{ properties, setProperties }}>{children}</PropertyContext.Provider>;
};

export const usePropertyContext = () => {
  const ctx = useContext(PropertyContext);
  if (!ctx) throw new Error('usePropertyContext must be used within PropertyProvider');
  return ctx;
};
