module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        '@nuxtjs',
        'prettier',
        'prettier/vue',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended'
    ],
    "parserOptions": {
        "parser": 'babel-eslint'
    },
    "plugins": [
        "prettier"
    ],
    rules: {
        "prettier/prettier": [
            "error", { 
                "semi": false,
                "singleQuote": true,
            }
        ]
    }
};