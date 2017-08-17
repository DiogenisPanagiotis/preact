import { h } from 'preact';
import {route} from 'preact-router';
import UserCSS from './User.css'

function handleClick(e){
	route('/')
}
export function User (props) {
	const style = {
		borderRadius: '50%',
		border: 'solid 5px #fff',
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto'
	};
	const textStyle = {
		textAlign: 'center'
	};		
	const buttonStyle = {
		color: 'fff',
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '200px',
		cursor: 'pointer'
	};	
	const userInfoStyle = {
		marginTop: '40px'
	};

    return(
        <div class="row">
	        <div class="col-sm-4">

				        <div class="card" style="width: 20rem;">
								  <img class="card-img-top" src={props.image} alt="Card image cap"/>
								  <div class="card-body">
								    <h4 class="card-title">{props.name}</h4>
										<button onClick={e => handleClick(e)} 
														style={buttonStyle} 
														type="button" 
														class="btn btn-primary">Home</button>	
								  </div>
								</div>

	        </div>
        </div>

    );
}

export default User;