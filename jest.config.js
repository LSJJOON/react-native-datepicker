const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
	preset: 'react-native',
	testPathIgnorePatterns: [
		"/demo/",
		"/build/"
	],
	moduleFileExtensions: [
		"ts",
		"tsx",
		"js",
		"jsx",
		"json",
		"node"
	],
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
			babelConfig: true,
			diagnostics: false
    }
  },
  // This is the only part which you can keep
  // from the above linked tutorial's config:
	cacheDirectory: '.jest/cache',
	timers: 'fake'
};
