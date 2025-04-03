# 🎨 Modern Portfolio Website

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2.16-black?style=for-the-badge&logo=next.js" alt="Next.js Version" />
  <img src="https://img.shields.io/badge/TypeScript-5.0.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript Version" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css" alt="TailwindCSS Version" />
</div>

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases professional skills, projects, certifications, and provides a contact form for potential collaborations. The website features smooth animations, a custom cursor, and a clean, professional design.

## ✨ Key Features

### 🎯 Core Features
- **Modern UI/UX**: Built with Next.js 14 and Tailwind CSS
- **Interactive Components**: 
  - Custom cursor with smooth animations
  - Animated hero section with typewriter effect
  - Dynamic project showcase with hover effects
  - Skills visualization with progress bars
  - Contact form with email integration
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Built with Next.js for optimal performance
- **TypeScript Support**: Type-safe development
- **Analytics Integration**: Vercel Analytics for tracking

### 🎨 Design Features
- **Custom Animations**: Using Framer Motion for smooth transitions
- **Dark Mode Support**: Automatic theme switching
- **Custom Cursor**: Interactive cursor with hover effects
- **Modern Typography**: Clean and readable fonts
- **Smooth Scrolling**: Enhanced user experience

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [EmailJS](https://www.emailjs.com/)

### Development Tools
- **Package Manager**: npm/yarn
- **Code Quality**: ESLint
- **Version Control**: Git
- **Deployment**: Vercel

## 📦 Project Structure

```
├── app/                    # Next.js app directory
│   ├── services/          # Service-related pages
│   ├── fonts/             # Custom fonts
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx          # About section
│   ├── Certifications.tsx # Certifications showcase
│   ├── Contact.tsx        # Contact form
│   ├── CustomCursor.tsx   # Custom cursor component
│   ├── Footer.tsx         # Footer component
│   ├── Header.tsx         # Header component
│   ├── Hero.tsx           # Hero section
│   ├── HireMe.tsx         # Hire me section
│   ├── Navigation.tsx     # Navigation menu
│   ├── Projects.tsx       # Projects showcase
│   ├── Services.tsx       # Services section
│   └── Skills.tsx         # Skills section
├── public/                # Static assets
└── lib/                   # Utility functions and configurations
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Customization

### Adding New Projects
1. Navigate to the `Projects.tsx` component
2. Add your project details in the projects array
3. Include project images in the `public/projects` directory

### Updating Skills
1. Open `Skills.tsx`
2. Modify the skills array with your skills and proficiency levels

### Customizing Colors
1. Check `tailwind.config.ts` for theme customization
2. Modify the color palette to match your brand

## 🌐 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Deployment Steps
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Here's how you can contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For any questions or suggestions, feel free to reach out through the contact form on the website or create an issue in the repository.

---

<div align="center">
  <sub>Built with ❤️ using Next.js, TypeScript, and Tailwind CSS</sub>
</div>
