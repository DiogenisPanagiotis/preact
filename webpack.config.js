const path = require('path');

module.exports = {

	//input
	entry: './src',

	//output
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},

	//transformations
	module: {
		rules: [
			{
				test: /\.jsx?/i,
				loader: 'babel-loader',
				options: {
					presets: ['env'],
					plugins: [
						['transform-react-jsx', { pragma: 'h'} ],
						["transform-object-rest-spread"]
					]
				}
			},
			{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
		]
	},

	//sourcemaps
	devtool: 'source-map',

	//server
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		compress: true,
		disableHostCheck: true,
		historyApiFallback: true
	}
	
}