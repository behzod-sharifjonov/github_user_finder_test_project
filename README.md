# 🟣 GitHub User Finder — React + TypeScript + MUI + RTK

A modern GitHub User Finder web application built with **React (TypeScript)**, **Material UI (MUI)**, and **Redux Toolkit (RTK)**.  
Users can search for any GitHub username and view detailed profile information along with a list of public repositories.

---

## 🚀 Features

- 🔍 **Search GitHub Users** by username  
- 👤 **User Profile Card** — avatar, name, username, bio, followers/following count, and GitHub link  
- 📦 **Repositories List** — name, description, star count  
- ⚙️ **Loading and Error States** handled gracefully  
- 🎨 **Material UI** components for a modern and responsive interface  
- 🧩 **Redux Toolkit** for efficient state management  
- 🌐 **API integration** using GitHub REST API  
- 📱 **Responsive Design** using MUI Grid  
- 🌙 **Optional Dark/Light Mode** toggle  
- 💾 **LocalStorage Caching** (optional)  

---

## 🧠 Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React (TypeScript) |
| State Management | Redux Toolkit + RTK Query |
| UI Library | Material UI (MUI v6) |
| Routing | React Router DOM |
| HTTP Client | Axios |
| Styling | Emotion (default with MUI) |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/github-user-finder.git
cd github-user-finder
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the App
```bash
npm run dev
```

### Then open your browser and navigate to:
```arduino
http://localhost:5173/
```

### 🧩 Project Structure
```pgsql
github-user-finder/
│
├── src/
│   ├── app/
│   │   ├── store.ts
│   │
│   ├── features/
│   │   ├── github/
│   │   │   ├── githubSlice.ts
│   │   │   └── githubApi.ts
│   │
│   ├── components/
│   │   ├── SearchBar.tsx
│   │   ├── ProfileCard.tsx
│   │   └── RepoList.tsx
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── UserDetails.tsx
│   │
│   ├── routes/
│   │   └── AppRouter.tsx
│   │
│   ├── types/
│   │   ├── user.ts
│   │   └── repo.ts
│   │
│   ├── utils/
│   │   └── debounce.ts
│   │
│   ├── theme/
│   │   └── muiTheme.ts
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

### 🔗 API Endpoints
| Data         | Endpoint                                        |
| ------------ | ----------------------------------------------- |
| User Profile | `https://api.github.com/users/{username}`       |
| Repositories | `https://api.github.com/users/{username}/repos` |
# These endpoints are handled using RTK Query inside githubApi.ts.

