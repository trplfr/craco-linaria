const babelJest = require('babel-jest')

module.exports = babelJest.createTransformer({
	presets: [require.resolve('babel-preset-react-app'), '@linaria/babel-preset'],
	babelrc: false,
	configFile: false,
})
