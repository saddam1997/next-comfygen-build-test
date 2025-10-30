module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: { preset: 'default' },
  },
};

// postcss.config.js
// const purgecss = require('@fullhuman/postcss-purgecss')({
//   content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
//   defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
// });

// module.exports = {
//   plugins: [
//     'tailwindcss',
//     'autoprefixer',
//     ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
//   ],
// };
