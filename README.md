# redux-test
simulator redux workflow


## init workspace 

1. init package.json
   
   $ npm init 

2. install react 

   $ npm install --save react react-dom react-router 

3. install use dependence 

   $ $ npm install --save-dev babel-core babel-eslint babel-loader babel-preset-es2015 babel-preset-react eslint eslint-config-airbnb eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react webpack webpack-dev-server html-webpack-plugin

4. set babel config 

   .babelrc

   {
	"presets": [
  	"es2015",
  	"react",
 	],
	"plugins": []
}

5. set eslint config  // need spend more times to study it, why it always hit error.

  .eslintrc 

   {
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
  "env" :{
    "browser": true,
  }
}

6. update webpack.config.js

7. install react-router and react-router-dom

https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

router must have one root element. 

```
  <HashRouter>
	      <Switch>
			<Route exact path='/' component={App}></Route>
			<Route path='/home' component={Home}></Route>
		  </Switch>
		</HashRouter>
		
```



