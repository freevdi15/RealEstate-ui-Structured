import React from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '../../types/property';

interface Props {
  properties: Property[];
}

const PropertyList: React.FC<Props> = ({ properties }) => {
  if (!properties.length) return <div>No properties found.</div>;
  return (
    <div className="properties-grid">
      {properties.map((p) => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>
  );
};

export default PropertyList;
