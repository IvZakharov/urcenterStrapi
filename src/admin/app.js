export default {
  config: {
    // Replace the Strapi logo in auth (login) views

    // Override or extend the theme
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          primary: "#000",
          primary100: "#000",
          primary500: "#000",
          primary600: "#000",
          primary700: "#000",
          primary200: "#000",
          danger700: "#000",
          secondary100: "#000",
          secondary500: "#000",
          secondary600: "#000",
          secondary700: "#000",
          secondary200: "#000",
          indigo: "#000",
          indigo100: "#000",
          indigo500: "#000",
          indigo600: "#000",
          indigo700: "#000",
          indigo200: "#000",
        },
      },
    },
    // Extend the translations
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Urcentr",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard",
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: true },
  },

  bootstrap() {},
};
