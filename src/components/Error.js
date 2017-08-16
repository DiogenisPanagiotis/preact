import { h } from 'preact';
import {route} from 'preact-router';

function handleClick(e){
	route('/')
}
export default function Redirect () {
	const style = {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		textAlign: 'center',
		marginBottom: '30px'
	};
	const buttonStyle = {
		color: 'fff',
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '160px',
		cursor: 'pointer'
	};	
    return (
    	<div class="row">
	    	<div class="col-sm-5">
		        <div class="jumbotron">
		            <h3 style={style}>Oops! 404</h3>
					<button onClick={e => handleClick(e)} 
						style={buttonStyle} 
						type="button" 
						class="btn btn-primary">Home</button>	
		        </div>
		    </div>
		</div>
    )
};