import { Component } from 'react'
import '../css/search.css'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import md5 from 'md5';

export class Search extends Component {

	constructor(props) {
		super(props);
		this.state = {character: ''};

		this.handleClick = this.handleClick.bind(this);
    	this.handleCharacter = this.handleCharacter.bind(this);
	}


	handleCharacter(e){
		this.setState({character: e.target.value});
	}

	handleClick() {
		let ts = Math.floor(Date.now() / 1000);
		let publicKey = 'd05ba47527bd3dddd70d53f3bfeab513'
		let privateKey = '7f56c80503a4734c06b97c4b3558eec7ff08da62'
		let hasH = md5(`${ts}${privateKey}${publicKey}`);
		let url = `https://gateway.marvel.com:443/v1/public/characters?name=${this.state.character}&apikey=${publicKey}&hash=${hasH}&ts=${ts}`

		axios.get(url).then(function(res){
			console.log(res);
		});
		this.setState({ character: '' });
	}

	render(){
		return(
			<div className="container">
				<div className="center">
	  				<input type="text" name="search" 
	  									placeholder="Search.." 
	  									value={this.state.character}
	  									onChange={this.handleCharacter} />
	  				<br />
	  				<MuiThemeProvider>
	  					<RaisedButton label="GO" primary={true} onClick={this.handleClick} />
	  				</MuiThemeProvider>
				</div>
			</div>
		)
	}
}