module.exports = {
  env: {
    browser: true,
    es2023: true
  },
  extends: ['@nuxtjs/eslint-config-typescript'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unused-vars': 'warn' //不預設反推
  }
}
