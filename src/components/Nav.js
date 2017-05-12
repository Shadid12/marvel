import { Component } from 'react'

export class Nav extends Component {

	render(){
		return(
			<div className="container">
				<nav className="blue darken-2">
					<div className="nav-wrapper">
						<a href="/" className="brand-logo center">ComiCat</a>
					</div>
				</nav>
			</div>
		)
	}
}