import React from 'react';
import { Property } from '../../types/property';
import { useNavigate } from 'react-router-dom';

interface Props {
  property: Property;
}

const PropertyCard: React.FC<Props> = ({ property }) => {
  const navigate = useNavigate();
  return (
    <article className="property-card" onClick={() => navigate(`/property/${property.id}`)}>
      <img className="property-img" src={property.thumbnail || property.image || '/assets/images/placeholder.png'} alt={property.title} />
      <div className="property-details">
        <div>
          <div className="property-title">{property.title}</div>
          <div className="property-location">{property.location}</div>
        </div>
        <div className="property-meta">
          <div>{property.beds ?? '—'} Beds</div>
          <div>{property.baths ?? '—'} Baths</div>
        </div>
        <div className="property-price">₹{property.price?.toLocaleString()}</div>
      </div>
    </article>
  );
};

export default PropertyCard;
