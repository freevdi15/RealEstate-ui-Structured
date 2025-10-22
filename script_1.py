# Continue creating the other files needed for the maintainable structure

# 2. styles.css
styles_css = '''/*
================================================
  BeRealEstateAi Stylesheet
  Organized, Commented, and Easy to Maintain
================================================
*/
:root {
  --primary-bg: #181818;
  --secondary-bg: #222;
  --accent-color: #FFD700;
  --white: #fff;
  --gray: #aaa;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Arial, sans-serif;
  background: var(--primary-bg);
  color: var(--white);
  min-height: 100vh;
}

/* Logo Section */
.logo-section {
  display: flex;
  align-items: center;
}
.logo-image {
  height: 60px;
  margin-right: 16px;
}
.brand-name {
  font-size: 2.2rem;
  font-weight: bold;
  color: var(--accent-color);
  letter-spacing: 2px;
}

/* Header */
.landing-header {
  background: var(--secondary-bg);
  padding: 16px 0;
  border-bottom: 1px solid var(--gray);
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.auth-buttons {
  display: flex;
  gap: 16px;
}

/* Buttons */
.btn {
  font-size: 1rem;
  border: none;
  padding: 10px 24px;
  border-radius: 22px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.btn-primary {
  background: var(--accent-color);
  color: var(--primary-bg);
  font-weight: bold;
}
.btn-outline {
  background: transparent;
  color: var(--accent-color);
  border: 2px solid var(--accent-color);
}
.btn-outline-small {
  background: transparent;
  color: var(--white);
  border: 1px solid var(--gray);
  font-size: 0.9rem;
  padding: 7px 18px;
  margin-left: 16px;
}
.btn-large {
  font-size: 1.15rem;
  padding: 14px 36px;
}
.btn-block {
  width: 100%;
  margin: 8px 0;
}
.btn-google {
  background: #fff;
  color: #333;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}
.google-icon {
  background: linear-gradient(45deg,#4285F4,#0F9D58,#F4B400,#DB4437);
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
  margin-right: 10px;
  padding: 3px 9px;
  font-size: 1.25em;
}

/* Hero Section */
.hero {
  background: linear-gradient(87deg,#181818 90%,#FFD70010 100%);
  padding: 60px 0 30px 0;
}
.hero-content {
  max-width: 600px;
  margin-bottom: 36px;
}
.hero-title {
  font-size: 2.4rem;
  color: var(--accent-color);
  margin-bottom: 14px;
}
.hero-subtitle {
  font-size: 1.1rem;
  color: #eaeaea;
  margin-bottom: 30px;
}
.hero-features {
  display: flex;
  gap: 36px;
  margin-top: 28px;
}
.feature-card {
  background: var(--secondary-bg);
  padding: 18px 30px;
  border-radius: 14px;
  box-shadow: 0 2px 12px #0001;
  text-align: center;
  min-width: 155px;
}
.feature-icon {
  font-size: 2.3em;
  margin-bottom: 10px;
}

/* Modal Styles (Login & Signup) */
.modal {
  display: none;
  position: fixed;
  z-index: 9;
  left: 0;top: 0;width: 100vw;height: 100vh;
  background: rgba(0,0,0,0.75);
  justify-content: center;align-items: center;
}
.modal-content {
  background: var(--secondary-bg);
  padding: 42px 36px;
  border-radius: 16px;
  max-width: 390px;
  width: 95vw;
  position: relative;
  box-shadow: 0 6px 30px #0004;
  margin: auto;
}
.close {
  position: absolute;
  right: 22px;
  top: 22px;
  color: var(--gray);
  font-size: 2em;
  cursor: pointer;
}
.modal-logo {
  height: 45px;
  margin-bottom: 12px;
}
.modal-header h2 {
  margin-bottom: 8px;
  color: var(--accent-color);
}
.form-group {
  margin-bottom: 16px;
}
.form-input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #292929;
  color: var(--white);
  font-size: 1rem;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}
.checkbox-label {
  color: #aaa;
  font-size: 0.96em;
}
.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.link-gold {
  color: var(--accent-color);
  text-decoration: underline;
  cursor: pointer;
}
.demo-info {
  background: #23251e; color: #fab219;
  padding: 10px; border-radius: 10px; margin: 13px 0;
  font-size: 0.99rem; text-align:center;
}
.switch-auth {
  margin-top: 12px;
  text-align: center;
}
.divider {
  text-align: center;
  margin: 20px 0 14px 0;
  position: relative;
}
.divider span {
  background: var(--secondary-bg);
  padding: 0 17px;
  font-size: 1rem;
  color: var(--gray);
}

/* Navbar (Dashboard) */
.navbar {
  width: 100%; background: var(--secondary-bg); height: 65px;
  box-shadow: 0 3px 18px #0001;
}
.navbar-container {
  max-width: 1220px;
  margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: 100%; padding: 0 24px;
}
.navbar-brand {
  display: flex; align-items: center;
}
.navbar-logo {
  height: 40px; margin-right: 12px;
}
.navbar-title {
  font-weight: bold; color: var(--accent-color); font-size: 1.40em;
}
.user-greeting {
  margin-right: 15px; color: var(--gray); font-size: 1.08em;
}

/* Sidebar */
.sidebar {
  background: #222226; min-width: 110px; padding: 38px 0 0 0; min-height: 75vh;
  display: flex; flex-direction: column; align-items: stretch;
}
.nav-menu {
  list-style: none; padding: 0; margin: 0;
}
.nav-item {
  padding: 19px 4px 13px 0;display:flex;flex-direction:column; align-items:center;
  cursor: pointer; color: #9b9; border-left: 4px solid transparent; transition: all 0.15s;
}
.nav-item .nav-icon { font-size:2em; }
.nav-item .nav-text { margin-top: 3px; color: var(--gray); font-size: 1.00em; }
.nav-item.active,.nav-item:hover {
  color: var(--accent-color); border-left: 4px solid var(--accent-color);
}
.nav-item.active .nav-text {
  color: var(--accent-color);
}

/* Main Content Area */
.main-container {
  display: flex; min-height: 76vh; max-width: 1220px; margin: 0 auto;
}
.content {
  flex: 1; padding: 33px 50px 28px 45px; background: linear-gradient(90deg,#181818b3 84%,#FFD7001e 100%);
}

/* Search Section */
.search-section {
  margin-bottom: 34px;
}
.search-bar {
  display: flex; align-items: center;
}
.search-input {
  padding: 10px 14px;
  margin-right: 15px;
  border-radius: 10px; border: 2px solid #ddd;
  background: #222;
  color: var(--white);
  font-size: 1.04em;
}
.filters {
  margin-top: 17px;display:flex;gap:24px;
}
.filter-select {
  background: #232325; color: #ddd; border-radius: 8px;
  padding: 6px 21px;
  font-size: 1em; border: 2px solid #393939;
}

/* Properties Grid */
.properties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(234px, 1fr));
  gap: 28px 20px;
  margin-top: 15px;
}
.property-card {
  background: #242428;
  border-radius: 13px;
  overflow: hidden;
  box-shadow: 0 4px 18px #0003;
  display: flex;
  flex-direction: column;
  transition: transform 0.14s, box-shadow 0.14s;
}
.property-card:hover {
  transform: translateY(-8px) scale(1.04);
  box-shadow: 0 16px 34px #FFD70011;
  border: 1.6px solid var(--accent-color);
}
.property-img {
  max-width: 100%; height:170px; object-fit:cover;
}
.property-details {
  padding: 14px 17px;
  display: flex; flex-direction: column;
  gap: 7px;
}
.property-title {
  color: var(--accent-color); font-weight: bold;
  font-size: 1.18em; margin-bottom:4px;
}
.property-location {
  color: #fafad2b9; font-size:1.0em;
}
.property-meta {
  display: flex; gap: 16px; color: #ddd;
  font-size: 0.98em;
}
.property-price {
  color: var(--accent-color); font-weight: bold; font-size: 1.10em; margin-top: 7px;
}

/* Recommendations Title */
.section-title {
  font-size: 1.42em; margin: 32px 0 18px 0; font-weight: bold;
  color: var(--accent-color);
  display: flex; align-items: center;
}
.title-icon {
  font-size:1.22em; margin-right: 9px;
}

/* Insights Section */
.insights-section {
  margin-top:34px;
}
.insights-grid {
  display: flex;
  gap: 22px;
}
.insight-card {
  background: #232323;
  border-radius: 10px;
  padding: 23px 26px;
  min-width: 145px;
  color: var(--white);
  text-align: center;
  box-shadow: 0 2px 14px #FFD7001C;
}
.insight-value {
  font-size: 1.35em; color: var(--accent-color); font-weight: bold;
}
.insight-label {
  font-size: .96em; color: #ddd; margin-bottom: 6px; margin-top: 8px;
}
.insight-trend {
  font-size: .92em;
}
.insight-trend.positive { color: #7fff00; }
.insight-trend.negative { color: #f77; }

@media (max-width: 1000px) {
  .main-container { flex-direction: column; }
  .sidebar { flex-direction: row;min-width: 0;height:auto; padding:16px 0;background:#232326; }
  .nav-menu { display: flex; flex-direction: row; }
  .content { padding: 20px 13px; }
}
@media (max-width: 700px) {
  .container { flex-direction: column; }
  .logo-section { margin-bottom: 16px; }
  .hero-content { margin-bottom: 18px; }
  .hero-features { flex-direction: column; gap: 20px; }
  .modal-content { padding: 28px 8px; }
  .sidebar { padding: 5px 0; }
  .insights-grid { flex-direction: column; gap:18px; }
  .content { padding: 8px 4px; }
}
'''

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(styles_css)
print('✅ styles.css created')
print(f'Size: {len(styles_css)} characters')

# 3. script.js
script_js = '''// =============================================
// BeRealEstateAi Script: Dashboard + Auth Logic
// =============================================

// Dummy Credentials for demonstration
const DEMO_CREDENTIALS = { email: 'demo@berealestateai.com', password: 'demo123' };
let loggedInUser = null;

// Property Sample Data
const PROPERTY_DATA = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800',
    title: 'Modern 3BHK Villa',
    location: 'Trivandrum, Kerala',
    bedrooms: 3, price: '₹1.15Cr', type: 'villa',
    area: '1850 sq.ft.'
  },
  {
    image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=800',
    title: 'Downtown Apartment',
    location: 'Kochi, Kerala',
    bedrooms: 2, price: '₹87L', type: 'apartment',
    area: '1200 sq.ft.'
  },
  {
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800',
    title: 'Spacious Family Home',
    location: 'Calicut, Kerala',
    bedrooms: 4, price: '₹2Cr', type: 'house',
    area: '2500 sq.ft.'
  },
  {
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800',
    title: 'Luxury Condo',
    location: 'Bangalore',
    bedrooms: 3, price: '₹1.4Cr', type: 'condo',
    area: '1600 sq.ft.'
  },
  {
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800',
    title: 'City Center Flat',
    location: 'Chennai',
    bedrooms: 2, price: '₹92L', type: 'apartment',
    area: '1100 sq.ft.'
  },
  {
    image: 'https://images.unsplash.com/photo-1472224371017-08207f84aaae?w=800',
    title: 'Coastal Retreat',
    location: 'Goa',
    bedrooms: 2, price: '₹1.2Cr', type: 'villa',
    area: '1350 sq.ft.'
  },
];

//------------------------------------------------
// ========== AUTHENTICATION FLOW ===============
//------------------------------------------------

function showLogin() {
  document.getElementById('loginModal').style.display = 'flex';
}
function closeLogin() {
  document.getElementById('loginModal').style.display = 'none';
}
function showSignup() {
  document.getElementById('signupModal').style.display = 'flex';
}
function closeSignup() {
  document.getElementById('signupModal').style.display = 'none';
}
function switchToSignup(e) {
  e.preventDefault();
  closeLogin();
  showSignup();
}
function switchToLogin(e) {
  e.preventDefault();
  closeSignup();
  showLogin();
}
function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  // Backend integration point below!
  if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
    loginUser({ email: email, name: 'Demo User' });
    closeLogin();
  } else {
    alert('Invalid credentials. Use demo@berealestateai.com / demo123');
  }
}
function handleSignup(event) {
  event.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  const confirm = document.getElementById('signupConfirmPassword').value;
  const terms = document.getElementById('agreeTerms').checked;

  if (!terms) {
    alert('Please agree to the Terms & Conditions!');
    return;
  }
  if (password !== confirm) {
    alert('Passwords do not match!');
    return;
  }
  // Backend integration for registration here!
  loginUser({ email: email, name: name });
  closeSignup();
}
function handleGoogleLogin() {
  // Backend Google OAuth integration point here!
  alert('Google Login (demo) - Connect your backend OAuth here');
  loginUser({ email: 'google@berealestateai.com', name: 'Google User' });
  closeLogin();
  closeSignup();
}
function loginUser(user) {
  loggedInUser = user;
  document.getElementById('userName').textContent = user.name || 'User';
  document.getElementById('landingPage').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
  loadProperties();
}
function handleLogout() {
  loggedInUser = null;
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('landingPage').style.display = 'block';
}

//------------------------------------------------
//  ========= PROPERTY DASHBOARD ================
//------------------------------------------------
function showSection(section) {
  // Implement navigation logic (future feature stub)
  alert(`Navigate to ${section} (feature demo)`);
}
function loadProperties() {
  const grid = document.getElementById('propertiesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  PROPERTY_DATA.forEach(property => {
    grid.innerHTML += `
      <div class="property-card">
        <img src="${property.image}" alt="${property.title}" class="property-img">
        <div class="property-details">
          <div class="property-title">${property.title}</div>
          <div class="property-location">${property.location}</div>
          <div class="property-meta">
            <span>${property.bedrooms} BHK</span>
            <span>${property.area}</span>
          </div>
          <div class="property-price">${property.price}</div>
        </div>
      </div>
    `;
  });
}
function handleSearch() {
  // You can connect this to your backend later for real search
  const keyword = document.getElementById('searchInput').value.trim().toLowerCase();
  const type = document.getElementById('propertyType').value;
  const price = document.getElementById('priceRange').value;
  const beds = document.getElementById('bedrooms').value;
  let filtered = PROPERTY_DATA;
  if (keyword)
    filtered = filtered.filter(p =>
      p.location.toLowerCase().includes(keyword) || p.title.toLowerCase().includes(keyword)
    );
  if (type)
    filtered = filtered.filter(p => p.type === type);
  if (beds)
    filtered = filtered.filter(p => String(p.bedrooms) === beds || (beds === '4+' && p.bedrooms >= 4));
  if (price) {
    const [min,max] = price.split('-');
    filtered = filtered.filter(p => {
      let priceVal = parseInt(p.price.replace(/[^\d]/g,''));
      if (max) return priceVal >= parseInt(min) && priceVal <= parseInt(max);
      return priceVal > parseInt(min);
    });
  }
  const grid = document.getElementById('propertiesGrid');
  grid.innerHTML = '';
  filtered.forEach(load => {
    grid.innerHTML += `
      <div class="property-card">
        <img src="${load.image}" alt="${load.title}" class="property-img">
        <div class="property-details">
          <div class="property-title">${load.title}</div>
          <div class="property-location">${load.location}</div>
          <div class="property-meta">
            <span>${load.bedrooms} BHK</span>
            <span>${load.area}</span>
          </div>
          <div class="property-price">${load.price}</div>
        </div>
      </div>
    `;
  });
}

// ========== INIT ==========
window.onload = function() {
  // Clear modals onload if shown
  closeLogin();
  closeSignup();
};
'''

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(script_js)
print('✅ script.js created')
print(f'Size: {len(script_js)} characters')
