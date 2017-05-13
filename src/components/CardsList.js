import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export const CardsList = (props) => {
	return (
		<MuiThemeProvider>
	      <div className="row">
	        	{props.cards.map( card => <Cards key={card.id} {...card}/>)}
	      </div>
		</MuiThemeProvider>	
	)
}

export const Cards = (props) => {

	let thumb = `${props.thumbnail.path}/landscape_incredible.${props.thumbnail.extension}`

	
	return(
	<div className="col s12 m7">
	  <div className="card">
	    <div className="card-image">
	      <img src={thumb}/>
	      <span className="card-title">{props.name}</span>
	    </div>
	    <div className="card-content">
	      <p>{props.description}</p>
	    </div>
	    <div className="card-action">
	      <RaisedButton label="Read More" secondary={true} />
	    </div>
	  </div>
	</div>
	)
}