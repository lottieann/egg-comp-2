module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform:
    { '\\.(ts|tsx)$': 'babel-jest' }
  ,
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/cypress/'],
  // setupFilesAfterEnv: ['<rootDir>/../../setup.js'],
  collectCoverage: true,
  coverageReporters: ['json-summary', 'text'],
  collectCoverageFrom: ['pages/**/*.tsx', 'src/**/*.tsx', '!src/**/index.tsx']
}
