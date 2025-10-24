import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PropertyList from '../components/property/PropertyList';
import { usePropertyContext } from '../contexts/PropertyContext';
import { fetchProperties } from '../services/propertyService';

const HomePage: React.FC = () => {
  const { properties, setProperties } = usePropertyContext();

  useEffect(() => {
    fetchProperties().then(setProperties).catch((e) => console.error(e));
  }, [setProperties]);

  return (
    <>
      <Header />
      <main className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Find your next property</h1>
            <p className="hero-subtitle">Browse curated listings and modern real-estate insights.</p>
          </div>
        </div>
      </main>

      <div className="main-container" style={{ paddingTop: 20 }}>
        <div style={{ flex: 1 }}>
          <div className="content container">
            <h2 className="section-title">Recommended properties</h2>
            <PropertyList properties={properties} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
