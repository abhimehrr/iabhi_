# Portfolio Website - Complete Technical Documentation

> This document provides a comprehensive overview of the portfolio website architecture, design patterns, component structure, styling approach, and implementation details. Use this as a reference guide to build a similar project with clean, modular code and consistent design patterns.

## Table of Contents

- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [Design System](#design-system)
- [Component Patterns](#component-patterns)
- [Styling Conventions](#styling-conventions)
- [Code Organization](#code-organization)
- [Implementation Guidelines](#implementation-guidelines)

---

## Technology Stack

### Core Technologies

- **Framework**: React 18.3+ with TypeScript
- **Build Tool**: Vite 5.4+
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS 3.4+ with CSS variables

### UI & Animation

- **Component Library**: shadcn/ui (Radix UI primitives)
- **Animation**: Framer Motion 12.24+
- **Icons**: Lucide React
- **Typography**: Inter (sans-serif), JetBrains Mono (monospace)

### State & Data Management

- **Form Handling**: React Hook Form + Zod validation
- **Data Fetching**: TanStack Query (React Query)
- **Toasts**: Sonner

### Development Tools

- **Linting**: ESLint with TypeScript support
- **Type Safety**: TypeScript 5.8+
- **Utilities**:
  - `clsx` + `tailwind-merge` → `cn()` utility
  - `class-variance-authority` for component variants

---

## Project Architecture

### Directory Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable shadcn/ui components (49 components)
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Tech stack showcase
│   ├── Projects.tsx    # Portfolio projects
│   ├── Experience.tsx  # Work history
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer section
│   └── Navbar.tsx      # Navigation header
├── pages/              # Page components
│   ├── Index.tsx       # Main portfolio page
│   └── NotFound.tsx    # 404 page
├── lib/               # Utilities
│   └── utils.ts       # cn() helper
├── hooks/             # Custom React hooks
├── App.tsx            # Root component with providers
├── main.tsx           # Application entry point
└── index.css          # Global styles & design tokens
```

### Application Flow

1. **Entry Point** (`main.tsx`): Renders root App component
2. **App Component** (`App.tsx`): Sets up providers and routing
   - QueryClientProvider (TanStack Query)
   - TooltipProvider (Radix UI)
   - Toaster components (notifications)
   - BrowserRouter with route configuration
3. **Main Page** (`Index.tsx`): Single-page layout with all sections
4. **Section Components**: Self-contained sections with animations

### Key Architectural Patterns

#### 1. **Single Page Application (SPA)**

- All content on one scrollable page
- Smooth scroll navigation via anchor links
- Sections identified by `id` attributes (`#about`, `#skills`, etc.)

#### 2. **Provider Pattern**

```tsx
<QueryClientProvider client={queryClient}>
  <TooltipProvider>{/* UI Components */}</TooltipProvider>
</QueryClientProvider>
```

#### 3. **Component Composition**

- UI components built with Radix UI primitives
- Composed using React.forwardRef for ref forwarding
- Props spread pattern for flexibility

---

## Design System

### Color Palette

**CSS Variables Architecture** (HSL format in `index.css`):

```css
:root {
  /* Background colors */
  --background: 220 20% 4%; /* Dark blue-gray */
  --foreground: 210 20% 90%; /* Light gray text */

  /* Surface colors */
  --card: 220 18% 8%; /* Slightly lighter than background */
  --popover: 220 18% 8%;

  /* Brand colors */
  --primary: 175 80% 50%; /* Cyan/turquoise */
  --accent: 175 80% 50%;

  /* Neutral colors */
  --secondary: 220 15% 15%; /* Dark gray */
  --muted: 220 15% 12%; /* Muted background */
  --muted-foreground: 215 15% 55%; /* Muted text */

  /* Borders & inputs */
  --border: 220 15% 18%;
  --input: 220 15% 18%;
  --ring: 175 80% 50%; /* Focus ring */

  /* Custom tokens */
  --glow-primary: 175 80% 50%;
  --text-gradient-start: 175 80% 60%;
  --text-gradient-end: 200 80% 60%;

  --radius: 0.75rem; /* Border radius */
}
```

**Color Usage in Tailwind**:

```tsx
className = "bg-background text-foreground";
className = "bg-card border-border";
className = "text-primary hover:text-primary/90";
```

> **Important**: Don't copy exact color values! Use your own primary/secondary palette. The structure (CSS variables + Tailwind integration) is what should be replicated.

### Typography

**Font Stack**:

- **Sans-serif**: Inter (headings, body text)
- **Monospace**: JetBrains Mono (code snippets, technical labels)

**Font Import** (in `index.css`):

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap");
```

**Tailwind Configuration**:

```ts
fontFamily: {
  sans: ["Inter", "system-ui", "sans-serif"],
  mono: ["JetBrains Mono", "monospace"],
}
```

**Typography Scale**:

- Section headings: `text-2xl font-bold`
- Subsection titles: `text-lg` or `text-xl font-semibold`
- Body text: `text-sm` or `text-base`
- Muted text: `text-muted-foreground`
- Mono text: `font-mono text-sm`

### Spacing & Layout

**Container Pattern**:

```tsx
<section className="py-24 px-6">
  <div className="max-w-4xl mx-auto">
    {" "}
    {/* Content wrapper */}
    {/* Section content */}
  </div>
</section>
```

**Section Padding**: `py-24` (top/bottom), `px-6` (horizontal)
**Max Widths**:

- Standard: `max-w-4xl`
- Wide: `max-w-5xl`
- Extra wide: `max-w-6xl`

**Alternating Backgrounds**:

- Plain: `bg-background`
- Subtle: `bg-card/30` (30% opacity overlay)

### Border Radius

```ts
borderRadius: {
  lg: "var(--radius)",           // 0.75rem
  md: "calc(var(--radius) - 2px)",
  sm: "calc(var(--radius) - 4px)",
}
```

---

## Component Patterns

### Section Component Pattern

**Structure**:

```tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SectionName = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="section-name" className="py-24 px-6 [bg-variant]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
            <span className="text-primary font-mono text-lg">0X.</span>
            Section Title
            <span className="h-px bg-border flex-1 ml-4" />
          </h2>

          {/* Section content */}
        </motion.div>
      </div>
    </section>
  );
};
```

**Key Features**:

1. **Scroll Animation**: Uses `useInView` hook for visibility detection
2. **Numbered Headers**: Sequential numbering (01, 02, 03...)
3. **Decorative Line**: Horizontal line after section title
4. **Staggered Animations**: Child elements animate with delays

### Animation Patterns

#### 1. **Fade-up on Scroll**

```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
```

#### 2. **Staggered List Items**

```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
```

#### 3. **Hover Interactions**

```tsx
<motion.div
  whileHover={{ y: -5, scale: 1.02 }}
  whileTap={{ scale: 0.95 }}
  className="group"
>
```

#### 4. **Loading Spinner**

```tsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
  className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full"
/>
```

#### 5. **Continuous Bounce**

```tsx
<motion.div
  animate={{ y: [0, 8, 0] }}
  transition={{
    repeat: Infinity,
    duration: 1.5,
    ease: "easeInOut"
  }}
>
```

### Card Component Pattern

```tsx
<motion.div
  whileHover={{ y: -5 }}
  className="group relative bg-card border border-border rounded-xl p-6 
             overflow-hidden transition-all duration-300 
             hover:border-primary/50"
>
  {/* Hover glow effect */}
  <div
    className="absolute inset-0 bg-gradient-to-br from-primary/10 
                  to-transparent opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300"
  />

  {/* Content */}
  <div className="relative z-10">{/* Card content */}</div>

  {/* Animated border */}
  <div
    className="absolute inset-0 rounded-xl border-2 
                  border-transparent group-hover:border-primary/30 
                  transition-colors duration-300 pointer-events-none"
  />
</motion.div>
```

**Card Patterns Used**:

- Skills cards (grid layout)
- Project cards (2-column grid)
- Stats card (About section)

### Navbar Pattern

**Features**:

1. **Sticky Header**: Fixed positioning with backdrop blur on scroll
2. **Scroll-aware Styling**: Changes background when scrolled
3. **Mobile Menu**: Toggle for small screens
4. **Numbered Navigation**: Consistent with section headers

```tsx
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

return (
  <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      isScrolled
        ? "bg-background/80 backdrop-blur-lg border-b border-border"
        : "bg-transparent"
    }`}
  >
```

### Form Pattern (Contact)

```tsx
const [isSubmitted, setIsSubmitted] = useState(false);
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  // Form submission logic
  setTimeout(() => {
    setIsLoading(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  }, 1500);
};
```

**Button States**:

- Default: "Send Message"
- Loading: Rotating spinner
- Success: "Message Sent!" with checkmark

---

## Styling Conventions

### Utility Classes

**Custom Utilities** (in `index.css`):

```css
@layer utilities {
  /* Gradient text */
  .text-gradient {
    @apply bg-clip-text text-transparent 
           bg-gradient-to-r from-primary to-cyan-400;
  }

  /* Glow effects */
  .glow {
    box-shadow: 0 0 20px hsl(var(--glow-primary) / 0.3), 0 0 40px hsl(var(
              --glow-primary
            ) / 0.1);
  }

  .glow-sm {
    box-shadow: 0 0 10px hsl(var(--glow-primary) / 0.2);
  }

  /* Card hover effect */
  .card-hover {
    @apply transition-all duration-300 
           hover:border-primary/50 hover:glow-sm;
  }

  /* Animated underline */
  .link-underline {
    @apply relative 
           after:absolute after:bottom-0 after:left-0 
           after:h-[1px] after:w-0 after:bg-primary 
           after:transition-all after:duration-300 
           hover:after:w-full;
  }
}
```

**Usage Examples**:

```tsx
<h1 className="text-gradient">Gradient Text</h1>
<div className="glow">Glowing element</div>
<a className="link-underline">Animated link</a>
<div className="card-hover">Interactive card</div>
```

### Tailwind Animations

**Custom Keyframes** (in `tailwind.config.ts`):

```ts
keyframes: {
  "fade-up": {
    "0%": { opacity: "0", transform: "translateY(20px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  "fade-in": {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
  pulse: {
    "0%, 100%": { opacity: "1" },
    "50%": { opacity: "0.5" },
  },
}

animation: {
  "fade-up": "fade-up 0.5s ease-out forwards",
  "fade-in": "fade-in 0.5s ease-out forwards",
  pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
}
```

### Background Effects

#### 1. **Gradient Blur Orbs**

```tsx
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="absolute top-1/4 left-1/2 -translate-x-1/2 
               w-[800px] h-[800px] 
               bg-primary/10 rounded-full blur-[120px]"
  />
</div>
```

#### 2. **Grid Pattern Overlay**

```tsx
<div
  className="absolute inset-0 
                bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),
                    linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] 
                bg-[size:50px_50px] 
                pointer-events-none"
/>
```

#### 3. **Gradient Overlay on Images**

```tsx
<div
  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50 to-transparent"
/>
```

### Responsive Design

**Breakpoint Strategy**:

- Mobile-first approach
- Key breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

**Common Patterns**:

```tsx
{/* Grid responsive */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Flex direction */}
<div className="flex flex-col md:flex-row gap-4">

{/* Text size */}
<h1 className="text-4xl md:text-6xl lg:text-8xl">

{/* Hide/show */}
<div className="hidden md:block">Desktop only</div>
<div className="md:hidden">Mobile only</div>
```

---

## Code Organization

### Component Structure

#### **Modular Components**

Each component should be:

1. **Self-contained**: All logic, styles, and dependencies in one file
2. **Single responsibility**: One clear purpose
3. **Reusable**: Can be used in different contexts
4. **Documented**: Clear prop types and descriptions

#### **Component Splitting Rules**

**When to split**:

- Component exceeds ~150 lines
- Repeated UI patterns (cards, list items, form fields)
- Independent business logic
- Testable units

**Example splits**:

```
Projects.tsx           →  Projects.tsx
                         ├── ProjectCard.tsx
                         └── ProjectFilters.tsx

Contact.tsx           →  Contact.tsx
                         ├── ContactForm.tsx
                         └── ContactInfo.tsx
```

### UI Component Library (shadcn/ui)

**Philosophy**:

- Components are copied into your project (not npm packages)
- Full control and customization
- Built on Radix UI primitives
- Uses `cn()` utility for className merging

**Common Components**:

- `Button`: 6 variants (default, destructive, outline, secondary, ghost, link)
- `Card`: Composable parts (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
- `Input`, `Textarea`, `Label`: Form elements
- `Dialog`, `Sheet`, `Popover`: Overlays
- `Toast`: Notifications

**Usage Pattern**:

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

<Button variant="outline" size="lg">Click me</Button>

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>Card content</CardContent>
</Card>
```

### Utility Functions

**cn() Helper** (`lib/utils.ts`):

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Purpose**: Merge Tailwind classes intelligently (prevents conflicts)

**Usage**:

```tsx
<div
  className={cn(
    "base-classes",
    condition && "conditional-classes",
    className // Props override
  )}
/>
```

### Import Aliases

**Configuration** (`tsconfig.json`, `vite.config.ts`):

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Usage**:

```tsx
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
```

---

## Implementation Guidelines

### Project Setup Checklist

1. **Initialize Vite + React + TypeScript**

   ```bash
   npm create vite@latest my-portfolio -- --template react-ts
   cd my-portfolio
   npm install
   ```

2. **Install Core Dependencies**

   ```bash
   npm install react-router-dom framer-motion lucide-react
   npm install @tanstack/react-query
   npm install clsx tailwind-merge class-variance-authority
   ```

3. **Setup Tailwind CSS**

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Setup shadcn/ui**

   ```bash
   npx shadcn-ui@latest init
   # Add components as needed
   npx shadcn-ui@latest add button card input textarea label
   ```

5. **Configure Fonts**
   - Add Google Fonts import to `index.css`
   - Update `tailwind.config.ts` with font families

### Design System Implementation

1. **Define CSS Variables** in `index.css`:

   ```css
   @layer base {
     :root {
       /* Your color palette */
       --background: ...;
       --primary: ...;
       /* etc. */
     }
   }
   ```

2. **Configure Tailwind** in `tailwind.config.ts`:

   ```ts
   theme: {
     extend: {
       colors: {
         background: "hsl(var(--background))",
         primary: "hsl(var(--primary))",
         // etc.
       },
       fontFamily: { ... },
       keyframes: { ... },
       animation: { ... },
     }
   }
   ```

3. **Add Custom Utilities** in `index.css`:
   ```css
   @layer utilities {
     .text-gradient {
       ...;
     }
     .glow {
       ...;
     }
   }
   ```

### Component Development Workflow

1. **Create Component File**

   ```tsx
   // src/components/SectionName.tsx
   import { motion, useInView } from "framer-motion";
   import { useRef } from "react";

   const SectionName = () => {
     // Component logic
   };

   export default SectionName;
   ```

2. **Add Scroll Animation**

   ```tsx
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
   ```

3. **Structure Section**

   ```tsx
   <section id="unique-id" className="py-24 px-6">
     <div className="max-w-4xl mx-auto">
       <motion.div ref={ref} {...animationProps}>
         {/* Content */}
       </motion.div>
     </div>
   </section>
   ```

4. **Add to Main Page**

   ```tsx
   // src/pages/Index.tsx
   import SectionName from "@/components/SectionName";

   <main>
     <Hero />
     <SectionName />
     {/* ... */}
   </main>;
   ```

5. **Update Navigation**
   ```tsx
   // src/components/Navbar.tsx
   const navItems = [
     { label: "Section", href: "#unique-id" },
     // ...
   ];
   ```

### Best Practices

#### **Clean & Modular Code**

✅ **DO**:

- Split large components (>150 lines) into smaller ones
- Extract repeated JSX into separate components
- Use semantic component names (`ProjectCard`, not `Card1`)
- Keep business logic separate from presentation
- Use TypeScript for type safety

❌ **DON'T**:

- Create monolithic components
- Inline complex logic in JSX
- Repeat code across components
- Use generic names (`Component1`, `Section`)

#### **Performance Optimization**

- Use `useInView` with `once: true` to prevent re-triggering animations
- Implement `React.memo()` for expensive pure components
- Lazy load route components with `React.lazy()`
- Optimize images (use WebP, responsive sizes)
- Use `will-change` CSS property for animations sparingly

#### **Accessibility**

- Use semantic HTML (`<nav>`, `<section>`, `<footer>`)
- Add `aria-label` to icon-only buttons
- Ensure keyboard navigation works
- Maintain color contrast ratios (WCAG AA)
- Add `alt` text to images

#### **Animation Guidelines**

- Keep animations subtle and purposeful
- Durations: 0.2s-0.6s for most interactions
- Use easing functions (`ease-out`, `ease-in-out`)
- Stagger delays: 0.05s-0.2s between items
- Respect `prefers-reduced-motion` (consider adding support)

### Testing Considerations

**Recommended Tests**:

1. **Component Tests**: Render without errors, prop handling
2. **Integration Tests**: Form submissions, navigation
3. **Visual Regression**: Screenshot comparisons
4. **Accessibility Tests**: axe-core, ARIA validation

### Deployment

**Build Command**:

```bash
npm run build
```

**Output**: `dist/` folder with optimized static files

**Hosting Options**:

- Vercel (recommended for Vite projects)
- Netlify
- GitHub Pages
- Cloudflare Pages

---

## Key Takeaways

### What to Replicate

✅ **Architecture**:

- Single-page layout with scroll navigation
- Section-based component structure
- Provider pattern for global state
- Modular, self-contained components

✅ **Design System**:

- CSS variables for theming
- HSL color format for easy manipulation
- Consistent spacing scale
- Custom utility classes

✅ **Animation Patterns**:

- Scroll-triggered animations with `useInView`
- Hover states with `whileHover`
- Staggered list animations
- Loading states

✅ **Component Patterns**:

- Numbered section headers with decorative lines
- Card hover effects with glows and borders
- Responsive grid layouts
- Form states (loading, success, error)

✅ **Code Quality**:

- TypeScript for type safety
- Component splitting for modularity
- Utility functions (`cn()`)
- Import aliases

### What to Customize

🎨 **Your Design**:

- Color palette (primary, secondary, accent)
- Typography choices
- Spacing scale
- Border radius values

📝 **Your Content**:

- Section names and order
- Personal information
- Project showcases
- Copy and messaging

### Final Recommendations

1. **Start with Design System**: Define colors, typography, spacing first
2. **Build UI Components**: Set up shadcn/ui and customize base components
3. **Create Sections Incrementally**: Start with Hero, then build section by section
4. **Add Animations Last**: Get structure right, then enhance with motion
5. **Test Responsiveness**: Mobile-first, then scale up
6. **Optimize Performance**: Lazy loading, image optimization, code splitting

---

## Additional Resources

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **shadcn/ui**: https://ui.shadcn.com/
- **Radix UI**: https://www.radix-ui.com/
- **React Router**: https://reactrouter.com/

---

_This documentation represents a complete analysis of the portfolio codebase. Use it as a blueprint to create similarly structured projects with clean, modular, and maintainable code._
