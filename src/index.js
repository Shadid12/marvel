import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'

window.React = React

render(
	<div> 
		<App />
	</div>,
	document.getElementById('app')
)