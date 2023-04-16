const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';
const { EnvironmentPlugin } = require('webpack');
const isProd = process.env.NODE_ENV !== 'development';
const filename = ext => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const plugins = [
	new HtmlWebpackPlugin({
		template: './index.html',
		minify: {
			collapseWhitespace: isProd && true,
		},
	}),
	new CleanWebpackPlugin(),
	new MiniCssExtractPlugin({ filename: filename('css') }),
	new webpack.ProvidePlugin({
		React: 'react',
	}),
	new EnvironmentPlugin({
		REACT_BACKEND_URL: 'https://api.github.com/search/',
	}),
];

const cssLoaders = extra => {
	const loaders = [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {},
		},
		'css-loader',
	];
	if (extra) {
		loaders.push(extra);
	}

	return loaders;
};

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		main: './index.tsx',
	},
	output: {
		filename: filename('js'),
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
		alias: {
			'@features': path.resolve(__dirname, 'src/features'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@store': path.resolve(__dirname, 'src/store'),
			'@api': path.resolve(__dirname, 'src/api/rootApi'),
			'@helpers': path.resolve(__dirname, 'src/helpers'),
		},
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		watchFiles: ['src/**/*'],
		compress: true,
		port: 8080,
		open: true,
		historyApiFallback: true,
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
	},
	plugins,
	module: {
		rules: [
			{
				test: /\.(js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(ts)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/i,
				use: cssLoaders(),
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				type: 'asset/resource',
			},
		],
	},
};
