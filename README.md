# ✅ React Checkbox List with "Select All" Feature

A clean and simple React component that implements a checkbox list with a "Select All" option. Built using React functional components and Tailwind CSS for styling.

---

## Features

- ✔️ Toggle individual checkboxes
- 🟩 "Select All" or "Unselect All" with a single checkbox
- 🔁 Real-time state management using React hooks
- 🎨 Styled using Tailwind CSS for responsiveness and minimal UI

---

## 📸 Preview

![Checkbox List Preview](link-to-screenshot-if-available.png)

---

##  Getting Started

How It Works
Uses useState to manage the checkbox list.

every() checks if all checkboxes are selected.

some() checks if at least one is selected.

handleSelectAll() toggles the checked status for all items.

handleCheckboxChange() toggles individual item selection.

## Tech Stack
React (Functional Components + Hooks)

Tailwind CSS

JavaScript (ES6+)

## Folder Structure
graphql
Copy
Edit
src/
│
├── components/
│   └── CheckboxList.jsx   # Main logic for checkbox handling
├── App.jsx                # Renders the CheckboxList component
└── index.js               # React entry point

## Future Enhancements
Add "Delete Selected" functionality

Support dynamic item addition

Persist selection using localStorage
