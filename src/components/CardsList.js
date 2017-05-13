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
		<div>
			<div className="col s12 m5">
				<div className="card">
					<div className="card-image">
						<img src={thumb}/>
						<span className="card-title">{props.name}</span>
					</div>
					<div className="card-action">
						<RaisedButton label="Details" 
									  secondary={true} 
									  href={props.urls[0].url} />
					</div>
				</div>
			</div>
			<br />
			<div className="col s7">
				{props.description}
			</div>
		</div>

	)
}
