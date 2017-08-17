import { h } from 'preact';
import {route} from 'preact-router';
import ErrorStyle from './Error.css'

function handleClick(e){
	route('/')
}
export default function Redirect () {
	const style = {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		textAlign: 'center',
		marginBottom: '10px'
	};
	const svgStyle = {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: '30px',
		height: '180px',
		width: '180px'
	}
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
		        <div id="err" class="jumbotron">
		        	<img style={svgStyle} src="../alert.svg" alt=""/>
		            <h3 style={style}>Oops! 404</h3>
					<button onClick={e => handleClick(e)} 
						style={buttonStyle} 
						type="button" 
						class="btn btn-danger">Home</button>	
		        </div>
		    </div>
		</div>
    )
};