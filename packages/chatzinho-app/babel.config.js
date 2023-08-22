module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      'nativewind/babel',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@ui': './src/common/components/ui',
            '@components': './src/common/components',
            '@common': './src/common',
            '@app': './src/app',
            '@': './src',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
    ],
  }
}
