# Personal Portfolio Website — React.js Practical Examination

**Candidate Name:** Noeline T A  
**Register Number:** 199  
**Institution:** Christ College of Engineering, Irinjalakuda (Autonomous)  
**Examination:** Ziuke Infotech (OPC) Private Limited — React.js Practical Examination  
**Project Repository:** `portfolio_noeline_199`  

---

## 📌 Project Overview
This project is an end-to-end responsive Personal Portfolio Website designed and developed using **React.js**. It presents the professional profile, educational background, technical skills, featured projects, verified credentials, and interactive contact messaging interface of Noeline T A.

The application adheres to clean component-driven architecture principles, leveraging **React Router v7** for single-page multi-view navigation, controlled form state management with `useState`, dynamic real-time validation, and reusable UI components.

---

## 🚀 Key Features & Examination Compliance

### 1. Home Page Component (`src/pages/Home.js`)
- **Profile Photo:** Customized avatar with active availability indicator.
- **Identity & Profession:** Displays candidate name (*Noeline T A*), role (*Frontend & React.js Developer*), and academic affiliation.
- **Short Introduction:** Engaging overview of engineering strengths and passion for responsive web design.
- **Action Buttons:**
  - *"View My Work"* — Smooth navigation to the featured projects gallery.
  - *"Contact Me"* — Direct route to `/contact`.
  - *"About My Journey"* — Direct route to `/about`.
- **Technical Skills Showcase:** Reusable `SkillBadge` components categorized into Frontend, Languages, and Tools.
- **Featured Projects:**
  - *Personal Portfolio Website* (Examination Project)
  - *Anavandi Transit Solution* (ANAVANDI 24-Hour Hackathon in Motion)
  - *Royal AARAMBH Startup Platform* (The Code Rushers)
  - *Dynamic E-Commerce Web Store*
  - *Productivity & Task Tracker*

### 2. About Page Component (`src/pages/About.js`)
Fully implements all **7 required sections**:
1. **Personal Introduction:** Professional background, focus areas, and development philosophy.
2. **Educational Qualification:** B.Tech in Computer Science & Engineering at Christ College of Engineering, Irinjalakuda (Autonomous) & Higher Secondary Science Stream.
3. **Technical Skills:** Categorized breakdown across Frontend, Languages, and Tools & Workflows.
4. **Work Experience & Practical Training:** Ziuke Infotech practical training and hackathon sprints.
5. **Certifications (with Interactive Modal Viewer):**
   - **ADAPTATHON — Techkshetra '26** (Certificate of Appreciation — Rajagiri School of Engineering & Technology).
   - **ANAVANDI Hackathon 2026** (24-Hour Hackathon in Motion, JAIN School of Future — Public Transport track).
   - **Royal AARAMBH Startup Conclave 2026** (Participation Certificate — Team *The Code Rushers*, Royal College of Engg. & Druv360).
   - **Ziuke Infotech React.js Practical Assessment Certification**.
6. **Achievements:** Hackathon milestones, technical fest appreciation, and startup presentations.
7. **Career Interests & Goals:** Short-term frontend engineering objectives and long-term full-stack software architect aspirations.

### 3. Contact Page Component (`src/pages/Contact.js`)
- **Complete Form Fields:** Name, Email, Phone Number, Subject, Message, and Submit button.
- **Client-Side Form Validation:**
  - Required fields verification.
  - Email format validation using regex (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).
  - 10-digit mobile number format validation.
  - Minimum length and character validation for Name, Subject, and Message.
  - Per-field inline error messages and visual error highlights.
- **Interactive Feedback:**
  - Success banner upon valid submission with submission details and reset button.
  - Error alert banner when attempting to submit incomplete fields.
- **Direct Contact Sidebar:** Email (`noelineta.official@gmail.com`), phone (`+91 9048444211`), and academic institution details.

### 4. Header Component (`src/components/Header.js`)
- Reusable component rendered across all routes.
- Brand logo badge (`N`), candidate name, and register number badge.
- Navigation links (*Home*, *About*, *Contact*) utilizing React Router's `NavLink` with active states.
- Mobile-responsive hamburger navigation menu.

### 5. Footer Component (`src/components/Footer.js`)
- Reusable component rendered across all routes.
- Portfolio owner identity and brief bio.
- Quick navigation links.
- Contact information and social/professional profile links.
- Dynamic copyright year: `© {currentYear} Noeline T A. All rights reserved.`

---

## 💡 React Concepts Demonstrated
- **Modular Components:** Clean separation into `/components` and `/pages`.
- **Reusable Components:** `SkillBadge`, `ProjectCard`, `CertificateCard`, `CertificateModal`, `Header`, `Footer`.
- **Props:** Structured data passed to child components for rendering dynamic attributes and callbacks.
- **Hooks (`useState` & `useEffect`):**
  - Mobile menu toggle state.
  - Controlled contact form inputs, touched states, and validation errors.
  - Modal open/close state and keyboard ESC listeners.
- **Event Handling:** `onSubmit`, `onChange`, `onBlur`, `onClick`, `onError`.
- **Form Validation:** Comprehensive multi-field client-side validation logic.
- **React Router v7:** `BrowserRouter`, `Routes`, `Route`, `Link`, and `NavLink`.

---

## 🛠️ Technologies Used
- **React.js** (v19)
- **React Router** (v7)
- **JavaScript (ES6+)**
- **HTML5 & JSX**
- **CSS3** (Variables, Flexbox, Grid, Media Queries)
- **Node.js & npm**

---

## 🏃 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Automated Tests
```bash
npm test -- --watchAll=false
```

### 4. Production Build
```bash
npm run build
```

---

## 📄 Submission Checklist
- [x] Project folder saved with name and register number (`portfolio_noeline_199`).
- [x] Separate components for Home, About, Contact, Header, and Footer.
- [x] React Router implemented for multi-page navigation.
- [x] Form validation implemented with error and success states.
- [x] Reusable components utilized across pages.
- [x] Real certificates integrated with interactive viewing.
- [x] Production build tested and validated with 0 errors.
