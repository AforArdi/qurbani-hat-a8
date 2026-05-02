# Qurbani Hat

An online platform for booking qurbani animals with an intuitive interface for browsing, comparing, and booking animals for Eid celebrations.

**Live:** [https://qurbani-hat-a8.vercel.app/](https://qurbani-hat-a8.vercel.app/)

---

## Key Features

### 🏠 Home Page
- Hero section with animated banner and call-to-action
- Featured animals showcase (4 highlighted animals)
- Educational sections: Qurbani Tips and Top Breeds
- Eid Mubarak animated greeting with Lottie animations

### 🐑 Animals Browsing
- **All Animals Page** — Browse complete animal catalog
- **Dynamic Filtering** — Sort animals by price (ascending/descending)
- **Detailed View** — Full animal specifications and high-quality images
- **Quick Actions** — Browse and booking buttons on animal cards

### 📋 Booking System
- Secure booking form (name, email, phone, address)
- Authentication required for bookings
- Form validation and error handling
- Success toast notifications on submission
- Real-time form state management

### 👤 User Authentication
- **User Login**
  - Email and password authentication
  - Seamless redirect to home on successful login
  - Error notifications for failed attempts
  - Link to registration page
  - Google OAuth integration for one-click login

- **User Registration**
  - Account creation with name, email, profile photo, and password
  - Automatic redirect to login after signup
  - Google OAuth support
  - Form validation and error handling

### 👥 User Profile & Management
- View logged-in user profile (name, photo, email)
- **Update Profile Modal** — Edit name and profile photo
- Persistent user session management
- Logout functionality with confirmation

### 🎨 UI/UX
- Fully responsive design
- Smooth loading states and skeleton screens
- 404 Not Found page for invalid routes
- Contact animation on footer
- Sticky navigation with adaptive layout
- Avatar display for authenticated users

### 📍 Navigation
- **Navbar** — Logo, navigation links (Home, All Animals), user profile/auth buttons
- **Footer** — Contact information, social links, about section

---

## npm Packages Used

| Package | Purpose |
|---------|---------|
| **next** (16.2.4) | React framework for production |
| **react** (19.2.4) | UI library |
| **@heroui/react** (3.0.3) | Modern UI component library |
| **better-auth** (1.6.9) | Authentication and session management |
| **mongodb** (7.2.0) | Database |
| **react-hook-form** (7.74.0) | Form state management |
| **react-toastify** (11.1.0) | Toast notifications |
| **@lottiefiles/dotlottie-react** (0.19.0) | Animated Lottie files |
| **react-icons** (5.6.0) | Icon library |
| **tailwindcss** (4) | Utility-first CSS framework |
| **daisyui** (5.5.19) | Tailwind component library |
| **react-fast-marquee** (1.6.5) | Marquee/scrolling component |
| **react-spinners** (0.17.0) | Loading spinners |

---

## Technologies

- **Frontend:** Next.js 16, React 19, Tailwind CSS 4, DaisyUI
- **Backend:** Next.js API routes with Better Auth
- **Database:** MongoDB
- **Authentication:** Better Auth with Google OAuth
- **Styling:** Tailwind CSS + DaisyUI
- **Animations:** Lottie
- **Form Management:** React Hook Form

---

## Share Your Project & Let's Learn Together

Connect with me to discuss this project and share your own development journey!

- **LinkedIn:** [Mohammad Ardi](https://www.linkedin.com/in/mohammad-ardi/) 💼
- **Email:** [mdmiftahulislamardi@gmail.com](mailto:mdmiftahulislamardi@gmail.com) 📧