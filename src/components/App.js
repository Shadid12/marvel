import { Component } from 'react'
import { Nav } from './Nav'
import { Search } from './Search'
import { CardsList } from './CardsList'


export class App extends Component {

	state={
		cards:[]
	}

	addCard = (cardInfo) => {
		this.setState((prevState, props) => {
		  return {cards: cardInfo };
		});
		console.log(this.state.cards);
	}

	render(){
		return(
			<div>
				<Nav />
				<br />
				<Search onSubmit={this.addCard}/>
				<br />
				<div className="container"> <CardsList cards={this.state.cards}/> </div>
			</div>
		)
	}
}