# Eco Eye — recreated frontend starter

This is a static frontend recreation inspired by the publicly visible Eco Eye pages. It is not the original source code and may not match every detail of the deployed app.

## Files
- `index.html` — home page and eco-action cards
- `report.html` — report form with browser location detection
- `article.html` — reusable eco tips page
- `styles.css` — responsive styling
- `script.js` — navigation, demo form behavior, location helper, article topics

## Run locally
Open `index.html` in your browser. No build step is required.

## Publish on GitHub Pages
1. Create a public GitHub repository.
2. Choose **Add file → Upload files**.
3. Upload these files and folders from this project (do not upload secrets or `.env` files).
4. Commit the changes.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, select **Deploy from a branch**.
7. Select branch `main` and folder `/ (root)`, then save.
8. Wait for the published Pages URL to appear.

## Important limitations
- The report form is a frontend demo only. It does not save or send reports to a database or API.
- Uploaded images are not transmitted anywhere.
- Browser geolocation asks for permission and works on supported browsers/secure contexts.
- Do not add private API keys, passwords, tokens, or `.env` files to a public repository.
