import { h } from 'preact';
import { route } from 'preact-router';
import HomeCSS from './Home.css';

function search (query, e) {
	let temp = query;
	e.target.value = "";
	route(`/profile/${encodeURIComponent(temp)}`);	
}

export default function Home () {
	const searchBox = {
		border: 'solid 2px #dbdbdb',
		width: '100%',
		padding: '8px'
	};    	
	const inner = {
		paddingLeft: '20px',
		paddingRight: '20px'
	};
	const github = {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		borderRadius: '50%',
		border: 'solid 5px #fff'
	}	
	const githubText = {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '30px',
		textAlign: 'center'
	}
    return (
    	<div class="row">
    		<div class="col-sm-5">
    			<div class="jumbotron">
    				<div style={inner}>
    					<img style={github} height="200" width="200"src="./github.svg" alt=""/>
			            <h5 style={githubText}> Enter a GitHub Username</h5>
			            <input type="search"
			            	placeholder="e.g. Diogenis"
			            	onSearch={e => search(e.target.value, e)}
			            	style={searchBox}
			            	/>
	    			</div>
	    		</div>
	    	</div>
	    </div>
    );
};