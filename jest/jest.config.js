module.exports = {
	globals: {
    },
    globalSetup: "./dist/tests/tests.setup.js",
	moduleFileExtensions: [
		'ts',
		'js'
	],
	testMatch: [
		'**/dist/**/*.test.(js)'
    ],
	testEnvironment: 'node'
};