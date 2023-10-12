module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'standard',
        'plugin:react/recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        'max-len': ['error', { code: 120 }],
        'react/prop-types': 1,
        indent: ['error', 4],
        semi: ['error', 'always']
    }
};
