import { h } from 'preact';
import { route } from 'preact-router';

function search (query) {
	route(`/profile/${encodeURIComponent(query)}`);
}

export default function Home () {
    	const style = {
    		border: 'solid 1px #dbdbdb',
    		width: '233px',
    		padding: '8px'
    	};
    return (
        <section>
            <p>Enter a GitHub Username</p>
            <input type="search"
            	placeholder="e.g. Diogenis"
            	onSearch={e => search(e.target.value)}
            	style={style}
            	/>
        </section>
    );
};