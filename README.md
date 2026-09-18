# 🎬 MovieExplorer Application

A responsive, high-performance **Movie Explorer Web Application** built using **React**, **Tailwind CSS**, and the **TVMaze API**. Users can browse trending shows, search for titles, filter by genres, and view detailed show information in an interactive modal overlay.

---

## 🌐 Live Demo & Repository

- 🚀 **Live Netlify App**: [https://fizz-movie-explorer.netlify.app](https://fizz-movie-explorer.netlify.app)
- 📁 **GitHub Repository**: [https://github.com/mustafizrahman055-hub/movie-explorer](https://github.com/mustafizrahman055-hub/movie-explorer)

---

## ✨ Features & Requirements Checklist

### 1. 🏠 Home Page & Landing Section
- **Navbar**: Features brand logo (`MovieExplorer`), navigation links (`Home`, `Movies`), and a prominent `[ Movies ]` CTA button.
- **Hero Banner**: Visually attractive cinema background artwork with gradient overlay, title **`DISCOVER MOVIES`**, description, and **`[ Explore Now ]`** Call-To-Action button.
- **Featured Showcase**: Displays top-rated trending TV shows and movies on the landing view.
- **Footer**: Application name, copyright (`© 2026 MovieExplorer`), and social/API attribution links.

### 2. 🔍 Movie Listing & Live Search
- **Search Bar**: Prominent search bar with placeholder *"Search for a movie..."*, real-time search query execution, and clear button.
- **TVMaze API Integration**: 
  - All Shows: `GET https://api.tvmaze.com/shows`
  - Search Query: `GET https://api.tvmaze.com/search/shows?q=:query`
- **Genre Filters**: Quick filter tags (`All`, `Drama`, `Action`, `Comedy`, `Sci-Fi`, `Thriller`, `Romance`, `Crime`, `Anime`, `Adventure`).
- **Movie Cards Grid**: Displayed in a responsive CSS grid containing:
  - Poster Image (with automatic image fallback)
  - Movie Title
  - Release Year (📅)
  - Rating Score (⭐)
  - `[ See Details ]` CTA button

### 3. 🎬 Interactive Movie Details Modal
- Triggered by clicking `[ See Details ]` on any movie card.
- **Modal Contents**:
  - High-res Movie Backdrop header banner with gradient overlay
  - Movie Title heading
  - Metadata bar: **`Rating: X.X | Release: YYYY | Runtime`**
  - Overview / Summary (HTML tags safely stripped and formatted)
  - Language, Status, Network / Channel name, and Official Site link
  - Key Cast list with actor photos and character names
- **Interactive Close Triggers**:
  - Top-right `[ X ]` button
  - Bottom-right `[ X Close ]` button
  - Outside backdrop click
  - Keyboard `Escape` key close handler

---

## 🛠️ Technology Stack

- **Core**: JavaScript (ES6+), React 19, Vite
- **Styling**: Tailwind CSS v4, Glassmorphism UI, Custom Dark Theme
- **Icons**: Lucide React
- **API**: TVMaze Free Movie & TV API

---

## 🚀 Local Development Setup

Follow these steps to run the application locally on your machine:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mustafizrahman055-hub/movie-explorer.git
   cd movie-explorer/movie-explorer
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/` or `http://localhost:5175/`.

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📄 License & Attribution

- Built for **Assignment: Movie Explorer**.
- Powered by [TVMaze API](https://www.tvmaze.com/api).
- &copy; 2026 MovieExplorer. All rights reserved.
