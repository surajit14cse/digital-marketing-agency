export const servicesData = [
  {
    id: "seo",
    title: "Search Engine Optimization",
    subtitle: "Dominate the Rankings",
    desc: "We don't just get you traffic; we get you the *right* traffic. Our data-driven SEO strategies are built to withstand algorithm updates and deliver long-term growth.",
    details: [
        "Comprehensive Site Audit & Technical Fixes",
        "Competitor Keyword Gap Analysis",
        "On-Page Optimization (Meta, Headers, UX)",
        "High-Authority Backlink Building",
        "Local SEO & Google My Business Optimization"
    ],
    icon: "bi-search",
    color: "primary", // Bootstrap color utility
    gradient: "linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%)" // Blue to Cyan
  },
  {
    id: "ppc",
    title: "Pay-Per-Click Advertising",
    subtitle: "Instant ROI Generation",
    desc: "Stop wasting money on clicks that don't convert. We build laser-targeted campaigns across Google, Bing, and Social Media to maximize your return on ad spend.",
    details: [
        "Google Ads (Search, Display, Shopping)",
        "Social Media Ads (Facebook, Instagram, LinkedIn)",
        "Retargeting & Remarketing Campaigns",
        "A/B Split Testing for Ad Copy & Creative",
        "Landing Page Conversion Optimization"
    ],
    icon: "bi-graph-up-arrow",
    color: "success",
    gradient: "linear-gradient(135deg, #198754 0%, #20c997 100%)" // Green to Teal
  },
  {
    id: "content",
    title: "Content Marketing",
    subtitle: "Storytelling That Sells",
    desc: "Content is the voice of your brand. We create compelling narratives that educate, entertain, and persuade your audience to take action.",
    details: [
        "SEO-Optimized Blog Writing",
        "Whitepapers & E-books for Lead Magnets",
        "Video Scripting & Storyboarding",
        "Email Newsletter Strategy",
        "Infographic Design & Visual Assets"
    ],
    icon: "bi-pen-fill",
    color: "danger",
    gradient: "linear-gradient(135deg, #dc3545 0%, #fd7e14 100%)" // Red to Orange
  },
  {
    id: "web",
    title: "Web Design & Development",
    subtitle: "Digital Experiences",
    desc: "Your website is your best salesperson. We build blazing-fast, mobile-responsive, and accessible websites designed to convert visitors into loyal customers.",
    details: [
        "Custom UX/UI Design & Prototyping",
        "Full-Stack Development (React, Next.js)",
        "E-commerce Solutions (Shopify, WooCommerce)",
        "Website Speed & Performance Optimization",
        "CMS Integration (Headless CMS, WordPress)"
    ],
    icon: "bi-laptop",
    color: "info",
    gradient: "linear-gradient(135deg, #0dcaf0 0%, #6f42c1 100%)" // Cyan to Purple
  }
];

export const pricingData = [
    {
        tier: "Starter",
        price: "$999",
        period: "/mo",
        desc: "Perfect for small businesses looking to establish a digital presence.",
        features: ["Basic SEO Setup", "Social Media Management (2 Platforms)", "Monthly Performance Report", "Email Support"],
        highlight: false
    },
    {
        tier: "Growth",
        price: "$2,499",
        period: "/mo",
        desc: "Designed for scaling businesses ready to dominate their niche.",
        features: ["Advanced SEO & Link Building", "PPC Campaign Management (up to $5k spend)", "Content Marketing (4 Blogs/mo)", "Bi-Weekly Strategy Calls"],
        highlight: true // Best Value
    },
    {
        tier: "Enterprise",
        price: "Custom",
        period: "",
        desc: "Full-service solution for large organizations with complex needs.",
        features: ["Dedicated Account Manager", "Omnichannel Strategy", "Custom Web Development", "24/7 Priority Support"],
        highlight: false
    }
];