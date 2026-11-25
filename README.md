# Abanyamuryango – Cooperative Members Directory

A responsive React application for browsing and managing a directory of cooperative members. The application retrieves member data from the DummyJSON API and provides server-side pagination, sorting, searching, and filtering.

## Project Overview

**Abanyamuryango** means members. This project demonstrates how to build a data-driven React table with efficient API requests, reusable components, and URL-synchronized table controls.

## Technologies Used

- React 19
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- Axios
- TanStack React Query
- DummyJSON Users API

## Features

- **Server-side pagination:** Navigate through members using Previous and Next controls.
- **Page-size selection:** Display 10, 20, or 50 members per page.
- **Server-side sorting:** Sort members by first name, last name, email, and age.
- **Debounced search:** Search members without sending a request for every keystroke.
- **Gender filtering:** Filter the directory by female or male members.
- **URL synchronization:** Table settings are reflected in the URL and can be shared.
- **Loading and refreshing states:** Inform users when data is being retrieved.
- **Empty state:** Display a helpful message when no matching members are found.
- **Error handling:** Show an error message and retry option when a request fails.
- **Next-page prefetching:** Load the next page in advance for smoother navigation.
- **Responsive layout:** Support desktop, tablet, and mobile screen sizes.

## API

The application uses the DummyJSON Users API:

https://dummyjson.com/users

API operations include:

- Pagination using `limit` and `skip`.
- Sorting using `sortBy` and `order`.
- Searching using `/users/search`.
- Filtering using `/users/filter`.

## Project Structure

```text
members-table/
├── public/
├── src/
│   ├── api/
│   │   ├── client.js
│   │   └── users.js
│   ├── components/
│   │   ├── EmptyState.jsx
│   │   └── ErrorState.jsx
│   ├── features/
│   │   └── users/
│   │       ├── queries.js
│   │       ├── SortableHeader.jsx
│   │       ├── TablePagination.jsx
│   │       ├── TableToolbar.jsx
│   │       └── UsersTable.jsx
│   ├── hooks/
│   │   ├── useDebounce.js
│   │   └── useTableParams.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── screenshots/
├── index.html
├── package.json
└── README.md
```

## Installation and Setup

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd members-table
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal.

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## Responsive Design Decisions

The application uses a responsive layout built with Tailwind CSS.

- **Desktop:** The directory uses the available screen width to display the table and toolbar comfortably.
- **Tablet:** The toolbar adjusts its columns to fit the available space.
- **Mobile:** The toolbar stacks vertically, while the table uses horizontal scrolling to keep its columns readable without compressing the content.

## Screenshots

Application screenshots will be added to the `screenshots/` directory.

| View | Screenshot |
|---|---|
| Desktop directory | `screenshots/desktop.png` |
| Mobile layout | `screenshots/mobile.png` |
| Empty search results | `screenshots/empty-state.png` |
| API error state | `screenshots/error-state.png` |

## Author

**Umwali Keza Kenia**

Advanced Frontend Web Development – Week 9 Workshop 1

## License

This project was developed for educational purposes.
