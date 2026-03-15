# Dennis Shaba - Premium Portfolio Website

A stunning, interactive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion featuring advanced animations and interactions.

## Features

### Visual Effects
- **Particle Background** - Interactive particle network that responds to mouse movements
- **Custom Cursor** - Dual-ring cursor that follows mouse movement and scales on hover
- **Loading Screen** - Elegant animated loading screen with bouncing dots
- **Scroll Progress Bar** - Gradient progress indicator at the top
- **Smooth Animations** - Page sections animate in as you scroll

### Interactive Elements
- **Keyboard Navigation** - Press `⌘/Ctrl + 1-6` to navigate to different sections
- **Keyboard Shortcuts Hint** - Press `?` to toggle keyboard shortcuts overlay
- **Active Section Tracking** - Navigation highlights current section based on scroll position
- **Hover Effects** - Cards lift and transform on mouse hover with 3D effects
- **Click Interactions** - Buttons and links have satisfying scale animations

### Animations
- **Typing Animation** - Auto-typing effect cycling through different roles
- **Fade In/Slide In** - Content reveals smoothly as you scroll
- **Stagger Children** - Items animate in sequence for better visual flow
- **Pulsing Elements** - "Current" badge and profile picture glow
- **Rotating Icons** - Skill category icons rotate on hover
- **Sliding Gradients** - Project cards have sweeping gradient effects

### Design Elements
- **Gradient Text** - Vibrant blue-to-purple gradients on headings
- **Glassmorphism** - Frosted glass effect on cards and navigation
- **3D Transforms** - Skill cards have subtle 3D rotation on hover
- **Responsive Layout** - Fully responsive on all device sizes
- **Dark Theme** - Modern dark theme with blue and purple accents

## Sections

1. **Hero** - Animated introduction with typing effect and profile image
2. **Experience** - Work history with alternating slide-in animations
3. **Skills** - Three categories (Frontend, Backend, DevOps) with rotating icons
4. **Projects** - Featured projects with hover effects and tech badges
5. **Education & Certifications** - Academic background and professional certifications
6. **Contact** - Call-to-action with animated buttons

## Keyboard Shortcuts

- `⌘/Ctrl + 1` - Navigate to About section
- `⌘/Ctrl + 2` - Navigate to Experience section
- `⌘/Ctrl + 3` - Navigate to Skills section
- `⌘/Ctrl + 4` - Navigate to Projects section
- `⌘/Ctrl + 5` - Navigate to Education section
- `⌘/Ctrl + 6` - Navigate to Contact section
- `?` - Toggle keyboard shortcuts help

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository or navigate to the portfolio directory:

```bash
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## Building for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Main portfolio page with animations
├── components/
│   ├── ParticlesBackground.tsx  # Interactive particle effect
│   ├── CustomCursor.tsx         # Custom animated cursor
│   └── LoadingScreen.tsx        # Loading animation
├── data/
│   └── portfolio.ts      # Portfolio data
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Technologies & Libraries

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **tsParticles** - Interactive particle background
- **React Type Animation** - Typing animation effect
- **React Icons** - Icon library

## Customization

### Update Portfolio Data

Edit `data/portfolio.ts` to update your information.

### Modify Animations

Animation variants are defined in `app/page.tsx`. Adjust timing, easing, and effects as needed.

### Change Colors

Update color gradients in Tailwind classes throughout the components.

## Deployment

This portfolio can be easily deployed to:

- **Vercel** (Recommended): Connect your GitHub repository to Vercel for automatic deployments
- **Netlify**: Deploy with drag-and-drop or connect your repository
- **GitHub Pages**: Build and deploy the static export

## License

This project is open source and available under the MIT License.

## Contact

Dennis Shaba - sd4live@gmail.com

Portfolio: https://dinixweb.github.io
GitHub: https://github.com/Dinixweb
LinkedIn: https://www.linkedin.com/in/dennis-shaba-a0770973/
