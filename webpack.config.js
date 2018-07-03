module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: __dirname+'/dist',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					js: 'babel-loader'
				}
			},
			{
				test: /\.s[a|c]ss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	watchOptions: {
		poll: true
	}
}
