// =============================================
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
