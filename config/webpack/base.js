const { resolve } = require('path')
const tsconfig = require('../../tsconfig.json')
const paths = tsconfig.compilerOptions.paths || {}

function convertTsPathToAlias(paths) {
    const alias = {}
    for (const [key, value] of Object.entries(paths)) {
        if (key.endsWith('/*')) continue
        alias[key] = resolve(__dirname, '../../', value[0])
    }
    return alias
}

module.exports = {
    mode: 'development',
    stats: {
        env: true,
        colors: true,
    },
    output: {
        path: resolve(__dirname, '../../dist'),
        filename: '[name].js',
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    resolve: {
        alias: convertTsPathToAlias(paths),
        extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    optimization: {
        splitChunks: false,
        removeAvailableModules: true,
    },
    performance: {
        hints: false,
    },
}
