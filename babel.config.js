module.exports = {
    env: {
        test: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: 'commonjs',
                        debug: false
                    }
                ],
                '@babel/preset-flow',
                '@babel/preset-react'
            ],
            plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                "@babel/transform-runtime",
                "styled-components"
            ]
        },
        production: {
            presets: [
                ['@babel/preset-env', { modules: false }],
                '@babel/preset-flow',
                '@babel/preset-react'
            ],
            plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                "@babel/transform-runtime",
                "styled-components",
            ]
        },
        development: {
            presets: [
                ['@babel/preset-env', { modules: false }],
                '@babel/preset-flow',
                '@babel/preset-react'
            ],
            plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                "@babel/transform-runtime",
                "styled-components"
            ]
        }
    }
}