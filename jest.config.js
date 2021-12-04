const {defaults: tsjPreset} = require('ts-jest/presets');

module.exports = {
    ...tsjPreset,
    "testEnvironment": "jsdom",
    "preset": "react-native",
    globals: {
        'ts-jest': {
            babelConfig: true,
            tsconfig: 'tsconfig.test.json'
        },
    },
    "transform": {
        '^.+\\.(js|jsx)$': "babel-jest",
        "\\.(ts|tsx)$": "ts-jest"
    },
    "setupFilesAfterEnv": [
        "./jest.setup.ts"
    ],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    "testPathIgnorePatterns": [
        "\\.snap$",
        "node_modules"
    ],
    "cacheDirectory": ".jest/cache",
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy"
    },
    "transformIgnorePatterns": [
        "node_modules/(?!((jest-)?react-native|react-navigation|react-native-nfc-manager|@react-native|react-native))"
    ],
    verbose: true
}
