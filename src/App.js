import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';

function App() {

	function Home() {
		return <h2>Halaman Home</h2>
	}

	function ListView() {
		return (
			<div>
				<h2>Semua User</h2>
				<ul>
					<li><Link to='user/kurob' >kurob</Link></li>
					<li><Link to='user/robert' >robert</Link></li>
				</ul>
			</div>
		) 
	}

	function DetailView({ match }) {
		return <h2>Ini Halaman {match.params.name}</h2>
	}

	function NoMatch() {
		return <h2>404, Halaman Tidak ditemukan</h2>
	}

	return (
		<BrowserRouter>
			<div>
				
				<nav>
					<TopNavbar />	
				</nav>

				<main>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/users' exact component={ListView} />
						<Route path='/user/:name' exact component={DetailView} />
						<Route component={NoMatch} />
					</Switch>
				</main>
			</div>
		</BrowserRouter>

	);
}

export default App;
