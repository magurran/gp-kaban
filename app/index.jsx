import './main.css';
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';
import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';

persist(alt, storage, 'app');

ReactDom.render(<App/>, document.getElementById('app'));

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
