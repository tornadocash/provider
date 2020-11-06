module.exports = {
  parser: 'babel-eslint',
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-useless-rename': [
      'warn',
      {
        ignoreDestructuring: true,
        ignoreImport: true,
        ignoreExport: true,
      },
    ],
  },
}