module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'next/core-web-vitals',
    ],
    rules: {
        // Add your custom ESLint rules here
        "no-console": "warn",
    },
};
