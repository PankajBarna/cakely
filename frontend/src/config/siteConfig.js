// Cakely - Site Configuration
// Edit this file to customize the entire website for any home baker client

export const siteConfig = {
  // Site mode: "onePage" or "fourPage"
  site: {
    mode: "onePage",
    name: "Cakely",
    tagline: "Handcrafted Cakes & Sweet Delights",
    description: "Premium home-baked cakes and desserts in Thane. Custom theme cakes, cheesecakes, cupcakes & pastries made with love.",
    logo: "/logo.svg",
    favicon: "/favicon.ico",
    ogImage: "/og-image.png",
  },

    // Business alias (for reusable template consistency)
  business: {
    name: "Cakely",
    tagline: "Handcrafted Cakes & Sweet Delights",
    whatsapp: "918879878493",
    phone: "+91 8879878493",
    city: "Thane",
    area: "Palava Phase 2",
    addressLine: "Thane, Maharashtra, India",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60287.35547431066!2d72.9585168!3d19.2183307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8fcfe76fd59%3A0x2014f7ceff3a1a!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin",
  },

  // Contact information
  contact: {
    phone: "+91 8879878493",
    whatsapp: "918879878493",
    email: "hello@cakely.in",
    instagram: "cakely.thane",
    address: {
      line1: "Thane, Maharashtra",
      line2: "India",
      full: "Thane, Maharashtra, India",
    },
    businessHours: [
      { day: "Monday - Friday", time: "9:00 AM - 8:00 PM" },
      { day: "Saturday", time: "10:00 AM - 9:00 PM" },
      { day: "Sunday", time: "10:00 AM - 6:00 PM" },
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60287.35547431066!2d72.9585168!3d19.2183307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8fcfe76fd59%3A0x2014f7ceff3a1a!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin",
  },

  // Hero Section
  hero: {
    badgeText: "Home-Baked with Love",
    headline: "Sweet Moments, Crafted with Love",
    subheadline: "Home-baked cakes & desserts that make every celebration special. Freshly made in Thane with premium ingredients.",
    primaryCTA: {
      text: "Order on WhatsApp",
      action: "whatsapp",
    },
    secondaryCTA: {
      text: "View Menu",
      action: "menu",
    },
    image: "https://images.pexels.com/photos/8015144/pexels-photo-8015144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    imageAlt:"Delicious homemade cake",
  },

  // Trust Bar Stats
  trustBar: {
    items: [
      { icon: "Star", label: "4.9 Rating", subtext: "500+ Reviews" },
      { icon: "Users", label: "2000+", subtext: "Happy Customers" },
      { icon: "Cake", label: "100%", subtext: "Fresh Ingredients" },
      { icon: "Clock", label: "Same Day", subtext: "Delivery Available" },
    ],
  },

  // How It Works
  howItWorks: {
    title: "How It Works",
    subtitle: "Order your perfect cake in 3 easy steps",
    steps: [
      {
        icon: "MessageCircle",
        title: "Tell Us Your Vision",
        description: "Share your cake requirements, theme, and date via WhatsApp or our order form.",
      },
      {
        icon: "PenTool",
        title: "We Create Magic",
        description: "Our baker crafts your cake with premium ingredients and artistic touches.",
      },
      {
        icon: "Truck",
        title: "Fresh Delivery",
        description: "Receive your freshly baked cake at your doorstep or pick it up.",
      },
    ],
  },

  // Menu Items
  menu: {
    title: "Our Signature Creations",
    subtitle: "Handcrafted with love, baked to perfection",
    categories: [
      { id: "all", name: "All" },
      { id: "theme", name: "Theme Cakes" },
      { id: "normal", name: "Normal Cakes" },
      { id: "cheesecake", name: "Cheesecakes" },
      { id: "pastries", name: "Pastries" },
      { id: "cupcakes", name: "Cupcakes" },
    ],
    items: [
      {
        id: 1,
        name: "Custom Theme Cake",
        category: "theme",
        description: "Fully customized theme cakes for birthdays, weddings & special occasions",
        priceFrom: 1200,
        priceRange: "₹1,200 - ₹5,000",
        tag: "Bestseller",
        image: "https://images.unsplash.com/photo-1745334976407-50dfd62eeec5?crop=entropy&cs=srgb&fm=jpg&q=85",
        isVeg: true,
        hasEggless: true,
      },
      {
        id: 2,
        name: "Classic Chocolate Truffle",
        category: "normal",
        description: "Rich chocolate layers with smooth truffle frosting",
        priceFrom: 650,
        priceRange: "₹650 - ₹1,800",
        tag: "Popular",
        image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        isVeg: true,
        hasEggless: true,
      },
      {
        id: 3,
        name: "New York Cheesecake",
        category: "cheesecake",
        description: "Creamy, dense, and perfectly tangy classic cheesecake",
        priceFrom: 800,
        priceRange: "₹800 - ₹1,500",
        tag: "",
        image: "https://images.pexels.com/photos/6168429/pexels-photo-6168429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        isVeg: false,
        hasEggless: false,
      },
      {
        id: 4,
        name: "Assorted Cupcakes",
        category: "cupcakes",
        description: "Box of 6 cupcakes in assorted flavors with buttercream frosting",
        priceFrom: 450,
        priceRange: "₹450 - ₹900",
        tag: "Great for Gifts",
        image: "https://images.pexels.com/photos/12419449/pexels-photo-12419449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        isVeg: true,
        hasEggless: true,
      },
      {
        id: 5,
        name: "Strawberry Shortcake",
        category: "normal",
        description: "Light sponge with fresh strawberries and whipped cream",
        priceFrom: 750,
        priceRange: "₹750 - ₹2,000",
        tag: "Seasonal",
        image: "https://images.unsplash.com/photo-1695886855924-43940b6379b4?crop=entropy&cs=srgb&fm=jpg&q=85",
        isVeg: true,
        hasEggless: true,
      },
      {
        id: 6,
        name: "Premium Pastry Box",
        category: "pastries",
        description: "Assortment of 4 premium pastries - eclairs, tarts & more",
        priceFrom: 380,
        priceRange: "₹380 - ₹600",
        tag: "",
        image: "https://images.pexels.com/photos/13984135/pexels-photo-13984135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        isVeg: true,
        hasEggless: true,
      },
      {
        id: 7,
        name: "Pink Flower Cake",
        category: "theme",
        description: "Beautiful flower themed cake with fresh strawberry cream",
        priceFrom: 780,
        priceRange: "₹780 - ₹1200",
        tag: "Seasonal",
        image: "https://images.pexels.com/photos/433527/pexels-photo-433527.jpeg",
        isVeg: true,
        hasEggless: true,
      },
      {
        id: 8,
        name: "Raspberry",
        category: "pastries",
        description: "Sliced with white and pink icing.",
        priceFrom: 680,
        priceRange: "₹680 - ₹980",
        tag: "Seasonal",
        image: "https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg",
        isVeg: true,
        hasEggless: true,
      },
    ],
  },

  // Gallery
  gallery: {
    title: "Our Creations",
    subtitle: "A glimpse of cakes we've crafted with love",
    images: [
      {
        src: "https://images.pexels.com/photos/8015144/pexels-photo-8015144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Elegant white frosted cake",
        category: "Theme Cake",
      },
      {
        src: "https://images.unsplash.com/photo-1745334976407-50dfd62eeec5?crop=entropy&cs=srgb&fm=jpg&q=85",
        alt: "Pink raspberry birthday cake",
        category: "Birthday Cake",
      },
      {
        src: "https://images.unsplash.com/photo-1736959574670-a8ace9856e1c?crop=entropy&cs=srgb&fm=jpg&q=85",
        alt: "Flamingo themed cake",
        category: "Theme Cake",
      },
      {
        src: "https://images.pexels.com/photos/29558580/pexels-photo-29558580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Happy Birthday cake",
        category: "Birthday Cake",
      },
      {
        src: "https://images.pexels.com/photos/6168429/pexels-photo-6168429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Basque burnt cheesecake",
        category: "Cheesecake",
      },
      {
        src: "https://images.pexels.com/photos/12419449/pexels-photo-12419449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Colorful cupcakes display",
        category: "Cupcakes",
      },
    ],
  },

  // Reviews
  reviews: {
    title: "What Our Customers Say",
    subtitle: "Real love from real cake lovers",
    items: [
      {
        id: 1,
        name: "Priya Sharma",
        avatar: "PS",
        rating: 5,
        text: "Ordered a unicorn theme cake for my daughter's birthday. It was absolutely stunning and tasted even better! Everyone at the party loved it.",
        date: "2 weeks ago",
      },
      {
        id: 2,
        name: "Rahul Mehta",
        avatar: "RM",
        rating: 5,
        text: "Best cheesecake in Thane, hands down! Creamy, rich, and perfectly balanced. Will definitely order again.",
        date: "1 month ago",
      },
      {
        id: 3,
        name: "Anita Desai",
        avatar: "AD",
        rating: 5,
        text: "Cakely made our wedding cake and it exceeded all expectations. Beautiful design, fresh ingredients, and amazing taste!",
        date: "3 weeks ago",
      },
    ],
  },

  // Delivery Info
  delivery: {
    title: "Delivery Information",
    subtitle: "We ensure your cake arrives fresh and perfect",
    details: {
      area: "Thane & surrounding areas",
      radius: "Within 15 km of Thane",
      minNotice: "Minimum 24 hours advance order",
      sameDay: "Same day delivery available for select items",
    },
    badges: [
      { icon: "Truck", label: "Home Delivery", description: "Delivered to your doorstep" },
      { icon: "Store", label: "Self Pickup", description: "Pick up from our kitchen" },
      { icon: "Clock", label: "24hr Notice", description: "Order at least 1 day ahead" },
      { icon: "Shield", label: "Safe Packaging", description: "Cake-safe delivery boxes" },
    ],
  },

  // FAQ
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Got questions? We've got answers!",
    items: [
      {
        question: "Do you offer eggless cakes?",
        answer: "Yes! Most of our cakes are available in eggless versions. Just mention your preference while ordering.",
      },
      {
        question: "How far in advance should I order?",
        answer: "We recommend ordering at least 24-48 hours in advance. For custom theme cakes, please order 3-5 days ahead.",
      },
      {
        question: "What areas do you deliver to?",
        answer: "We deliver to all areas within Thane and surrounding localities within 15km radius. Delivery charges may vary based on distance.",
      },
      {
        question: "Can I customize my cake design?",
        answer: "Absolutely! We specialize in custom theme cakes. Share your vision, reference images, or theme details via WhatsApp and we'll bring it to life.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept UPI, bank transfers, and cash on delivery. A 50% advance is required for custom orders.",
      },
      {
        question: "Do you use preservatives?",
        answer: "No! All our cakes are freshly baked with premium ingredients and no artificial preservatives. That's why we recommend consuming within 2-3 days.",
      },
    ],
  },

  // Order Form Config
  orderForm: {
    title: "Place Your Order",
    subtitle: "Fill in the details and we'll get back to you on WhatsApp",
    itemTypes: [
      "Theme Cake",
      "Normal Cake",
      "Cheesecake",
      "Cupcakes (Box of 6)",
      "Pastries",
      "Other",
    ],
    flavors: [
      "Chocolate Truffle",
      "Vanilla",
      "Butterscotch",
      "Red Velvet",
      "Strawberry",
      "Pineapple",
      "Black Forest",
      "Blueberry",
      "Other (mention in notes)",
    ],
    weightOptions: [
      "0.5 kg",
      "1 kg",
      "1.5 kg",
      "2 kg",
      "2.5 kg",
      "3 kg",
      "Custom",
    ],
    deliveryModes: ["Delivery", "Pickup"],
  },

  // Footer
  footer: {
    tagline: "Crafting sweet memories, one cake at a time.",
    quickLinks: [
      { label: "Menu", href: "#menu" },
      { label: "Gallery", href: "#gallery" },
      { label: "FAQs", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    socialLinks: [
      { platform: "Instagram", url: "https://instagram.com/cakely.thane" },
      { platform: "WhatsApp", url: "https://wa.me/918879878493" },
    ],
    copyright: "© 2024 Cakely. All rights reserved.",
  },

  // Navigation Links
  navigation: {
    links: [
      { label: "Home", href: "/", scrollTo: "hero" },
      { label: "Menu", href: "/menu", scrollTo: "menu" },
      { label: "Gallery", href: "/gallery", scrollTo: "gallery" },
      { label: "Contact", href: "/contact", scrollTo: "contact" },
    ],
  },
};

export default siteConfig;
