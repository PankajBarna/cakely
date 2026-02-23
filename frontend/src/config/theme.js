// Theme configuration for CSS variables
// Edit these values to change the entire color scheme

export const themeConfig = {
  colors: {
    primary: "#E5989B",           // Rose pink - main CTA color
    primaryForeground: "#FFFFFF",  // White text on primary
    secondary: "#FDFBF7",          // Cream - section backgrounds
    secondaryForeground: "#4A403A", // Dark brown text
    background: "#FFFFFF",          // Pure white
    foreground: "#4A403A",          // Main text color (dark brown)
    muted: "#F5F5F5",               // Light gray
    mutedForeground: "#8D8D8D",     // Gray text
    accent: "#B5838D",              // Darker rose for hover
    accentForeground: "#FFFFFF",    // White text on accent
    border: "#E5E5E5",              // Light border
    input: "#E5E5E5",               // Input border
    ring: "#E5989B",                // Focus ring color
  },
  
  fonts: {
    heading: "'Outfit', sans-serif",
    body: "'Inter', sans-serif",
  },
  
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  
  spacing: {
    container: {
      padding: {
        mobile: "1.5rem",
        tablet: "3rem",
        desktop: "6rem",
      },
    },
    section: {
      padding: {
        mobile: "5rem",
        desktop: "8rem",
      },
    },
  },
  
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },
};

export default themeConfig;
