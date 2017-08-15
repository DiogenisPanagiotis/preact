import { h } from 'preact';
import {route} from 'preact-router';

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
		        <div class="jumbotron">
		            <img style={style} height='200' width='200' src={props.image} alt=""/>
		            <div style={userInfoStyle}>
			            <h4 style={textStyle}>{props.name}</h4>
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