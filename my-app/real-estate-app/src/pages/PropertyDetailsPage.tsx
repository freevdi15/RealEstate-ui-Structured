import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Property } from '../types/property';
import { fetchPropertyById } from '../services/propertyService';

const PropertyDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetchPropertyById(id)
      .then((p) => setProperty(p))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <Header />
      <div className="container" style={{ padding: '28px 24px' }}>
        {loading ? (
          <div>Loading...</div>
        ) : !property ? (
          <div>Property not found</div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 24 }}>
            <div>
              <img src={property.image || property.thumbnail || '/assets/images/placeholder.png'} alt={property.title} style={{ width: '100%', borderRadius: 12 }} />
              <h2 style={{ marginTop: 12 }}>{property.title}</h2>
              <p>{property.location}</p>
              <p>{property.description}</p>
            </div>

            <aside style={{ background: '#222', padding: 18, borderRadius: 12 }}>
              <div style={{ fontWeight: 700, color: '#FFD700', fontSize: 20 }}>₹{property.price.toLocaleString()}</div>
              <div style={{ marginTop: 12 }}>
                <button className="btn btn-primary btn-block">Contact Agent</button>
              </div>
            </aside>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PropertyDetailsPage;
