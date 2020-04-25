module.exports = {
  stories: ['../src/**/stories.mdx', '../src/**/stories.tsx'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null
      }
    },
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register'
  ]
};
