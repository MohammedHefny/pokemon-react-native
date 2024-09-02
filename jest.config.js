module.exports = {
  preset: 'react-native',
  setupFiles: ['./setupTests.js'],

  moduleNameMapper: {
    'my-module.js': '<rootDir>/anotherPath/my-module.js',
  },
};
