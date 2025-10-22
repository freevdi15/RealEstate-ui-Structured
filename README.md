# BeRealEstateAi

## Project Structure

Place your logo image as `logo.png` in the root directory with the files below.

```
BeRealEstateAi/
├── index.html
├── styles.css
├── script.js
├── logo.png  # <-- Your logo file
```

---

## File Guide

### index.html
Main page with landing, authentication modals, and dashboard. Uses semantic HTML and links to styles and scripts. Replace `logo.png` src as needed.

### styles.css
All styles for the landing page, modals, and dashboard. Uses CSS variables at the top for easy theming (colors, backgrounds, accents).

### script.js
Controls modal events, authentication stub logic, dashboard navigation, and property card loading. Place to connect to your backend in future.

---

## How to Use

1. Add your logo `logo.png` in the root folder.
2. Open `index.html` in a browser to use the UI. Demo credentials are:
   - Email: `demo@berealestateai.com`
   - Password: `demo123`
3. To connect your backend, look for comments like `// Backend integration point` in `script.js`.

---

## Customization
- To change property data, edit the `PROPERTY_DATA` array in `script.js`.
- To adjust theme/accent, change `:root` in `styles.css`.

## Extend Further
- Connect HTTP calls to login/register endpoints.
- Extend `PROPERTY_DATA` fetch from backend DB.
- Add more routes and dashboard features as JS modules.
- Replace demo modal logic with real OAuth for Google sign in.

---

For help, search for in-file comments beginning with `/* ... */` (CSS or HTML) or `// ...` (JS).