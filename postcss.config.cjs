const path = require("path");

module.exports = {
  plugins: {
    tailwindcss: {
      config: path.join(__dirname, "tailwind.config.cjs"),
    },
    autoprefixer: {},
  },
};

/* module.exports = { */
/*   plugins: { */
/*     tailwindcss: {}, */
/*     autoprefixer: {}, */
/*   }, */
/* } */
