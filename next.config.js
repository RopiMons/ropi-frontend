const withImages = require('next-images');

module.exports = {
    webpack: (config) => {
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            // Transform all direct `react-native` imports to `react-native-web`
            'react-native$': 'react-native-web',
        }
        config.resolve.extensions = [
            '.web.js',
            '.web.ts',
            '.web.tsx',
            ...config.resolve.extensions,
        ]
        return config
    },
}
module.exports = withImages({
    esModule: true,
    webpack(config, options) {
        return config
    }
})
