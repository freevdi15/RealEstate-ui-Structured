import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: 24, textAlign: 'center', color: '#aaa' }}>
      © {new Date().getFullYear()} BeRealEstateAi • Built with ❤️
    </footer>
  );
};

export default Footer;
