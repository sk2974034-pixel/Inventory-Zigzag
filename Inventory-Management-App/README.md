# Dell E-Commerce Inventory Management System

A professional and responsive web-based inventory management system designed for Dell products. This project is built using HTML, CSS, and Vanilla JavaScript with no external framework or database dependencies, storing all product data dynamically in JavaScript arrays.

## 🚀 Live Demo & Getting Started

To run this project locally:
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/dell-inventory-system.git
   ```
2. Open `index.html` in any web browser.
3. Alternatively, run a local development server using VS Code Live Server extension or Python:
   ```bash
   python -m http.server 8000
   ```

---

## 🛠️ Features

### 1. Dynamic Catalog Display
- Displays all available Dell products from a JavaScript array in a modern, card-style catalog grid.
- Displays a real-time counter showing the total number of products in stock.

### 2. Add Products (Create)
- Add new products dynamically with validation rules:
  - Prevents empty product names.
  - Prevents duplicate product entries to ensure data integrity.

### 3. Remove Products (Delete)
- Remove existing products dynamically.
- Automatically validates that the product exists before attempting removal.

### 4. Check Stock Availability (Read/Search)
- Search for a specific product name.
- Returns "Product Available In Stock" or "Out of Stock" alerts.

---

## 📁 File Structure

```text
Dell_Inventory_Project/
│
├── index.html     # Semantic layout and HTML5 structure
├── style.css      # Custom CSS3 styling with glassmorphism theme
├── script.js     # JavaScript logic and array management
└── README.md      # Project documentation
```

---

## 💻 Tech Stack

- **HTML5**: Semantic markup.
- **CSS3**: Variables, Flexbox, CSS Grid, custom scrollbars, and keyframe animations.
- **JavaScript (ES6)**: Array manipulation (`push`, `splice`, `includes`, `indexOf`) and DOM manipulation (`createElement`, `appendChild`).
- **Google Fonts**: "Outfit" font family for premium typography.

---

## 🧪 Verified Test Cases

- [x] Initial inventory list renders correctly on load.
- [x] Adding a unique product updates the list and increments the product count.
- [x] Duplicate additions are correctly blocked and show a warning notification.
- [x] Deleting a valid product updates the list and decrements the product count.
- [x] Checking availability of a present item returns a success status.
- [x] Checking availability of an absent item returns a warning/error status.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
