# LearnFlow — Student Learning Dashboard

A modern student learning dashboard built for the Next-Gen Learning Dashboard Frontend Intern Challenge using Next.js, Supabase, Tailwind CSS, and Framer Motion.

🚀 **Live Demo:** https://learning-dashboard-two-gamma.vercel.app/

📂 **GitHub Repository:** https://github.com/Bhoomika7444/learning_dashboard

## Features

* Responsive Bento Grid dashboard layout
* Live course data from Supabase
* Smooth Framer Motion animations
* Dark mode UI
* Animated progress tracking
* Loading skeletons using React Suspense
* Next.js App Router with Server and Client Components

## Tech Stack

* Next.js 15
* React
* TypeScript
* Supabase
* Tailwind CSS
* Framer Motion

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Bhoomika7444/learning_dashboard.git
cd learning_dashboard
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Environment Variables

Create a `.env.local` file and add:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Project Structure

* **Server Components** fetch course data from Supabase.
* **Client Components** handle animations and interactive UI.
* **React Suspense** displays loading skeletons while data loads.
* **Tailwind CSS** is used for styling.
* **Framer Motion** powers animations and transitions.

## Animations

Implemented using Framer Motion:

* Staggered card animations
* Hover scaling effects
* Animated sidebar highlight
* Animated progress bars
* Smooth spring transitions

## Challenges Faced

### Async Cookies Handling

While integrating Supabase SSR with Next.js App Router, `cookies()` required asynchronous handling, which differed from many older examples.

### Hydration Mismatch

Random values used during rendering initially caused hydration issues. This was resolved by using fixed data for consistent server and client rendering.

### Tailwind Configuration

Tailwind styles were not loading correctly due to a missing PostCSS configuration during setup.

## Deployment

The application is deployed on Vercel.

Before deployment:

* Configure environment variables in Vercel
* Keep `.env.local` in `.gitignore`
* Add required Supabase credentials

## Author

**Bhoomika R**

Engineering Student | Web Development Enthusiast

Built as part of the Next-Gen Learning Dashboard Frontend Challenge.
