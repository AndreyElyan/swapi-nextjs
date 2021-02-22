// tailwind.config.css
module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
};

module.exports = {
  plugins: ['tailwindcss', 'postcss-preset-env']
};
