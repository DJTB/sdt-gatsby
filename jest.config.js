module.exports = {
  verbose: true,
  transform: { '^.+\\.js$': '<rootDir>/jestPreprocess.js' },
  testRegex: '(\\.(test|spec))\\.(jsx|js)$',
  testPathIgnorePatterns: ['/node_modules/', '/.cache/'],
  moduleFileExtensions: ['jsx', 'js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['<rootDir>/internals/testing/setupTests.js'],
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'html']
};
