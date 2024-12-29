export interface Post {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  img: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and start building amazing web applications.",
    author: "Jane Doe",
    date: "2023-07-01",
    img: "/images/post1.png",
    content: `
      Next.js is a powerful framework built on top of React that enables server-side rendering and static site generation. 
      In this article, we will cover the basics of setting up a Next.js project, including:
      - Installing Next.js using npm or yarn
      - Creating your first page
      - Understanding the file-based routing system
      Whether you're new to React or an experienced developer, Next.js provides tools to streamline your workflow and enhance your web applications.`
  },
  {
    id: 2,
    title: "The Power of Server Components",
    excerpt: "Explore how Server Components can improve your app's performance and user experience.",
    author: "John Smith",
    date: "2023-07-05",
    img: "/images/post2.jpg",
    content: `
      Server Components are a new paradigm in React development, designed to optimize performance and reduce the need for client-side JavaScript.
      In this post, we will discuss:
      - What Server Components are
      - Their benefits for performance and user experience
      - How to integrate them into your Next.js app
      By leveraging Server Components, you can create more efficient and scalable web applications.`
  },
  {
    id: 3,
    title: "Mastering CSS Grid",
    excerpt: "Dive deep into CSS Grid and create complex layouts with ease.",
    author: "Emily Johnson",
    date: "2023-07-10",
    img: "/images/post3.jpg",
    content: `
      CSS Grid is a game-changer for web design, providing a robust system for creating responsive and flexible layouts. 
      This guide will cover:
      - The basic concepts of CSS Grid
      - How to define grid areas and tracks
      - Practical examples of building modern layouts
      Mastering CSS Grid allows you to design with greater precision and creativity.`
  },
  {
    id: 4,
    title: "JavaScript ES6+ Features You Should Know",
    excerpt: "Discover the most useful ES6+ features that will level up your JavaScript skills.",
    author: "Michael Brown",
    date: "2023-07-15",
    img: "/images/post4.jpg",
    content: `
      JavaScript has evolved significantly with ES6 and beyond, introducing features that simplify development and improve code readability. 
      Key features we'll discuss include:
      - Arrow functions
      - Destructuring
      - Template literals
      - Modules and classes
      Understanding these features will not only make your code cleaner but also improve your efficiency as a developer.`
  },
  {
    id: 5,
    title: "Building Accessible Web Applications",
    excerpt: "Learn best practices for creating web apps that are accessible to all users.",
    author: "Sarah Lee",
    date: "2023-07-20",
    img: "/images/post5.jpg",
    content: `
      Accessibility is an essential aspect of web development, ensuring that your applications can be used by everyone, including those with disabilities. 
      This article will cover:
      - The importance of accessibility
      - Implementing ARIA roles and semantic HTML
      - Testing and improving accessibility with tools
      Building accessible web apps not only helps a wider audience but also improves SEO and overall user experience.`
  },
  {
    id: 6,
    title: "Introduction to TypeScript",
    excerpt: "Get started with TypeScript and improve your code quality and maintainability.",
    author: "David Wilson",
    date: "2023-07-25",
    img: "/images/post6.jpg",
    content: `
      TypeScript is a typed superset of JavaScript that helps catch errors at compile time and make your code more robust. 
      In this beginner-friendly guide, we will explore:
      - Setting up TypeScript in your project
      - Understanding basic types and interfaces
      - Writing and compiling TypeScript code
      By adopting TypeScript, you can enhance your development experience and build more reliable applications.`
  }
];
