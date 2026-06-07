export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@commands/(.*)$': '<rootDir>/src/commands/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@store$': '<rootDir>/src/store.ts',
  },
};