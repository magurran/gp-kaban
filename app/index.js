require('./main.css');

var component = require('./component');

document.body.appendChild(component());

module.exports ={
	plugins:[
		require('babel-plugin-syntax-class-properties'),
		require('babel-plugin-syntax-decorators'),
		require('babel-plugin-syntax-object-rest-spread'),
		
		[
			require('babel-plugin-transform-regenerator'),
			{
				async: false,
				asyncGenerators: false
				
			}
			]
		]
	
};
