module.exports = {
	globals: {
		'ts-jest': {
			tsConfigFile: 'tsconfig.json'
		}
    },
    globalSetup: "./src/tests/tests.setup.ts",
	moduleFileExtensions: [
		'ts',
		'js'
	],
	transform: {
		'^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js'
	},
	testMatch: [
		'**/src/**/*.test.(ts)'
    ],
    /*testPathIgnorePatterns: [
        
    ],*/
	testEnvironment: 'node'
};