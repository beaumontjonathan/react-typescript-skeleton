module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  globals: {
    window: {},
    'ts-jest': {
      tsConfig: './tsconfig.json'
    }
  },
  setupFiles: [
    './jest/jest.stubs.js'
  ],
  setupTestFrameworkScriptFile: './jest/jest.tests.js'
};
