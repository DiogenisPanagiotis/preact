import { h } from 'preact';
import { route } from 'preact-router';

function search (query, e) {
	let temp = query;
	e.target.value = "";
	route(`/profile/${encodeURIComponent(temp)}`);	
}

export default function Home () {
	const style = {
		border: 'solid 2px #dbdbdb',
		width: '100%',
		padding: '8px'
	};    	
	const inner = {
		paddingLeft: '20px',
		paddingRight: '20px'
	};
    return (
    	<div class="row">
    		<div class="col-sm-5">
    			<div class="jumbotron">
    				<div style={inner}>
			            <h4>Enter a GitHub Username</h4>
			            <input type="search"
			            	placeholder="e.g. Diogenis"
			            	onSearch={e => search(e.target.value, e)}
			            	style={style}
			            	/>
	    			</div>
	    		</div>
	    	</div>
	    </div>
    );
};