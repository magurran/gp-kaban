import './main.css';
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';

ReactDom.render(<App/>, document.getElementById('app'));

//document.body.appendChild(component());

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
