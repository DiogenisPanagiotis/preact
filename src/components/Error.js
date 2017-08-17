import { h } from 'preact';
import {route} from 'preact-router';
import ErrorCSS from './Error.css';

function handleClick(e){
	route('/')
}
export default function Redirect () {
	const buttonStyle = {
		color: 'fff',
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '160px',
		cursor: 'pointer'
	};	
	const textStyle = {
		textAlign: 'center'
	}
	const cardImageStyle = {
		padding: '30px 60px 30px 60px'
	}
    return (
    	<div class="row">
	    	<div class="col-sm-5">
	    		<div class="card" style="width: 20rem;">
					<img style={cardImageStyle} class="card-img-top" src="../issue-opened.svg" alt="Card image cap"/>
					<div class="card-body">
				    	<h4 class="card-title" style={textStyle}>404</h4>
							<button onClick={e => handleClick(e)} 
								style={buttonStyle} 
								type="button" 
								class="btn btn-danger">Home</button>	
					</div>
				</div>
		    </div>
		</div>
    )
};