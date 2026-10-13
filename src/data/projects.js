export const projectsData = [
  {
    id: "jenisha-portal",
    number: "01",
    title: "Jenisha — Government Document Portal",
    subtitle: "Public Digital Service Platform",
    category: "Full Stack & Mobile / Web",
    description:
      "A comprehensive digital governance platform engineered for seamless citizen document submission and administrative verification workflows. Combines secure cloud authentication, file upload processing, and multi-tier approval states.",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase Authentication",
      "Firestore",
      "TypeScript",
      "PHP",
    ],
    features: [
      "Digital forms for structured citizen document submissions",
      "Secure image and PDF upload processing pipeline",
      "Administrative verification and approval status workflows",
      "Cross-platform responsive interface built with Flutter",
    ],
    caseStudy: {
      overview:
        "Jenisha is a digital governance platform built to modernize citizen document verification and submission. The application replaces slow manual paperwork with structured multi-step forms, authenticated document uploads, and an administrative pipeline for status review and approvals.",
      challenge:
        "Handling sensitive citizen documents requires strict identity verification, dependable file upload processing for varied formats (images and PDFs), and clear visibility into administrative review stages without friction.",
      solution:
        "Engineered with Flutter and Dart for cross-platform consistency, backed by Firebase Authentication and Firestore for real-time state tracking. TypeScript and PHP services handle server-side document verification pipelines and administrative approval workflows.",
      highlights: [
        {
          title: "Digital Forms & Validation",
          detail:
            "Multi-step interactive forms with client-side validation to ensure complete document packages before submission.",
        },
        {
          title: "Image & PDF Upload Pipeline",
          detail:
            "Secure processing for identification proofs, certificate scans, and high-resolution document imagery.",
        },
        {
          title: "Admin Approval Workflows",
          detail:
            "Dedicated administrative review interface to inspect incoming applications, update approval status, and maintain audit records.",
        },
        {
          title: "Cross-Platform Usability",
          detail:
            "Built with Flutter to provide a fluid, responsive interface across mobile screens and desktop web browsers.",
        },
      ],
    },
    previewType: "portal",
    accentColor: "#D76A42",
    links: {
      // Set to real URLs when available or leave as null
      live: null,
      github: "https://github.com/aarya29578",
    },
  },
  {
    id: "shama-interiors",
    number: "02",
    title: "Shama Interiors & Furnitures",
    subtitle: "Modern E-Commerce Storefront",
    category: "Web Application & E-Commerce",
    description:
      "A responsive interior décor and furniture storefront built to deliver an elegant catalog browsing experience. Focused on fluid product exploration, responsive design across all devices, and fast production deployment.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Vercel",
    ],
    features: [
      "Responsive e-commerce storefront across desktop and mobile",
      "Structured product categorisation and catalog browsing",
      "Clean editorial design tailored for interior and furniture collections",
      "Fast production deployment and continuous delivery on Vercel",
    ],
    caseStudy: {
      overview:
        "Shama Interiors & Furnitures is a modern e-commerce storefront designed for an interior decor and furniture studio. The application focuses on showcasing handcrafted collections through responsive catalog browsing and fluid user interactions.",
      challenge:
        "E-commerce storefronts must balance high-fidelity imagery and editorial typography with snappy performance and mobile responsiveness across diverse devices.",
      solution:
        "Developed a responsive, component-driven web application using React and Tailwind CSS. The storefront features structured product categorisation (Living, Bespoke, Dining, Studio), clean product detail presentations, and optimized deployment via Vercel Edge.",
      highlights: [
        {
          title: "Responsive Storefront",
          detail:
            "Dual-optimized interface providing desktop viewing and an app-like touch browsing experience on mobile.",
        },
        {
          title: "Product Categorisation",
          detail:
            "Structured catalog filtering allowing customers to quickly navigate living room pieces, dining furniture, and bespoke studio items.",
        },
        {
          title: "Tailwind CSS Styling",
          detail:
            "Utility-first styling system maintaining warm editorial aesthetics, balanced whitespace, and readable typography.",
        },
        {
          title: "Vercel Edge Deployment",
          detail:
            "Continuous deployment pipeline on Vercel ensuring rapid page loads and high availability.",
        },
      ],
    },
    previewType: "storefront",
    accentColor: "#8F5E38",
    links: {
      // Set to real URLs when available or leave as null
      live: null,
      github: "https://github.com/aarya29578",
    },
  },
  {
    id: "additional-mobile-app",
    number: "03",
    title: "Mobile Application",
    subtitle: "Configurable Flutter Application",
    category: "Mobile Application",
    isConfigurable: true,
    description:
      "Configurable project entry reserved for a real Flutter mobile application to be added later. Ready to configure with your project title, architecture details, and repository or demo links.",
    technologies: [
      "Flutter",
      "Dart",
    ],
    features: [
      "Configurable mobile application slot for your next Flutter project",
      "Ready for custom architectural notes, state management & API details",
      "Configurable repository and production deployment links",
    ],
    caseStudy: {
      overview:
        "This project entry is a configurable placeholder reserved for your upcoming Flutter application. You can easily populate it with your app's actual name, features, screenshots, and live links in src/data/projects.js.",
      challenge:
        "Ready to be updated with the specific challenge addressed by your mobile application.",
      solution:
        "Engineered with Flutter and Dart for cross-platform performance, ready to document state management, API services, and deployment pipelines.",
      highlights: [
        {
          title: "Flutter & Dart Foundation",
          detail:
            "Built with modern Flutter architecture and clean widget separation.",
        },
        {
          title: "Configurable Feature Set",
          detail:
            "Add your actual application features, workflows, and technical details here.",
        },
        {
          title: "Repository & Release Links",
          detail:
            "Connect your live Google Play, Apple App Store, or GitHub repository URL.",
        },
      ],
    },
    previewType: "configurable-mobile",
    accentColor: "#3F5E78",
    links: {
      // Populate when real URLs are available
      live: null,
      github: null,
    },
  },
];
