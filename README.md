# Tria Contact List

**Live Demo:** https://tria-assignment-three.vercel.app

A clean and elegant Contact List web application built with React and Vite. This project demonstrates modern component-based architecture, API-mimicked data loading, custom modal and search handling, and a subtle, user-friendly UI—all designed and developed by Khusi Soni, 4th year student, IIT Kharagpur.

## ✨ Features

- **Centralized, Responsive Layout:** All contact data is showcased in a visually-centered card stack, optimized for both desktop and small screens.
- **Search by Name:** Instantly filter contacts with a smooth, real-time search bar.
- **Add New Contact:** Modal-powered, accessible input dialog for creating new contacts.
- **Modern UI:** Gentle background gradient, elegant drop shadows and attractive heading with color-accented underline.
- **Full Data Readability:** All details (name, phone, email) centered in each card, displayed in full with clear separation.
- **Live-mimicked Data Fetching:** Professional `useEffect` API simulation for asynchronous, real-world feel.
- **Built from Scratch:** Every UI component, styling and state management—crafted without any UI libraries for total control and learning depth.

## 🛠️ Tech Stack

- **React 19.x** (Hooks API)
- **Vite 7.x** (instant reloads, modern build)
- **ESLint** (custom config for code quality)
- **CSS3** (custom, theme-consistent, responsive, fully handwritten)
- No component libraries, frameworks, or pre-styled kits—just React, CSS, and smart structuring.

## 📁 Project Structure
src/
  App.jsx               # central routing and state
  App.css               # all core styles and theming
  components/
    ContactList.jsx     # maps contacts to cards
    ContactItem.jsx     # single card, all centered info
    SearchBar.jsx       # search/filter logic
    AddContactModal.jsx # modal dialog for new entries
  data/
    contacts.js         # static data array for demo
  main.jsx              # Vite/ReactDOM entry

  
## 🚀 Running It Locally

1. Clone this repo and install dependencies:
    ```
    npm install
    ```

2. Start in dev mode:
    ```
    npm run dev
    ```

Open [http://localhost:5173](http://localhost:5173) and explore.


## 📝 Core Implementation Details

- **Stateful Contacts:** Uses `useState` and `useEffect` for async-mimic loading and CRUD logic.
- **Modular Components:** Each function (view, add, filter) isolated for clarity and testing.
- **Accessibility:** Modal and button elements fully accessible and keyboard-navigable.
- **Professional Styling:** Subtle card shadows, soft focus rings, gradient-embellished heading, smooth hover lifts and transitions—everything hand-tuned for balance.

## 👩‍🎓 About the Author

**Khusi Soni**  
[Fourth-year Undergraduate]
IIT Kharagpur  





