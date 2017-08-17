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
				<div class="card bg-light mb-3" style="max-width: 20rem;">
				  	<div class="card-header">
				  		<img src="../github.svg" height="25" width="25" alt=""/>
				  	</div>
				  	<div class="card-body">
				    	<h4 class="card-title">Enter a Github Username</h4>
					    	<div class="input-group">
					      		<span class="input-group-addon" id="basic-addon1">@</span>
				            	<input type="search"
				            		placeholder="Diogenis..."
				            		onSearch={e => search(e.target.value, e)}
				            		style={searchBox}
				            		/>
						    </div>
				  	</div>
				</div>
	    	</div>
	    </div>
    );
};