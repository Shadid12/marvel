import { Component } from 'react'
import { Nav } from './Nav'
import { Search } from './Search'



export class App extends Component {

	render(){
		return(
			<div>
				<Nav />
				<br />
				<Search />
			</div>
		)
	}
}