import React from 'react';
import './Nav.css';
import requests from './requests';

const Nav = ({ setSelectedOption }) => {
	return (
		<>
			<div className='nav'>
				<p onClick={() => setSelectedOption(requests.fetchTrending)}>
					Trending
				</p>
				<p onClick={() => setSelectedOption(requests.fetchTopRated)}>
					Top Rated
				</p>
				<p onClick={() => setSelectedOption(requests.fetchActionMovies)}>
					Action
				</p>
				<p onClick={() => setSelectedOption(requests.fetchComedyMovies)}>
					Comedy
				</p>
				<p onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>
					Horror
				</p>
				<p onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>
					Romance
				</p>
				<p onClick={() => setSelectedOption(requests.fetchAnimated)}>
					Animated
				</p>
				<p onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</p>
				<p onClick={() => setSelectedOption(requests.fetchSciFi)}> Sci-Fi </p>
				<p onClick={() => setSelectedOption(requests.fetchWestern)}>Western</p>
				<p onClick={() => setSelectedOption(requests.fetchTV)}> TVMovie </p>
			</div>
		</>
	);
};

export default Nav;
