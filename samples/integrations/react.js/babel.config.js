module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false
            },
        ],
        '@babel/preset-react',
    ],
    plugins: [
        'styled-components'
    ]
};
