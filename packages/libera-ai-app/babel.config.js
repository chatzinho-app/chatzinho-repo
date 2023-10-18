module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@ui': './src/common/components/ui',
            '@components': './src/common/components',
            '@assets': './src/common/assets',
            '@common': './src/common',
            '@generated': './src/generated',
            '@app': './src/app',
            '@': './src',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
      'nativewind/babel',
    ],
  }
}
