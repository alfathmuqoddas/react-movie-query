import React, {useState, useEffect} from 'react'
import { useLocation } from'react-router-dom'

const MovieDetail = () => {
	let params = useLocation();
	const { imdbID } = params.state.movie;

	const [movieDetail, setMovieDetail] = useState([]);

	useEffect(() => {
		getMovieDetail();
		async function getMovieDetail() {
		    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=af1284eb&`
		    console.log(url);
		    const res = await fetch(url);
		    const resJson = await res.json();
		    setMovieDetail(resJson);
		}
	}, []);

	return(
		<div className="container my-4">
			<div className="container row mb-5">
	    		<div className="col-12 col-md-4 mb-4 text-center">
	    			<img src={movieDetail.Poster} alt="movie-poster" className="img-fluid" />
	    		</div>
	    		<div className="col-12 col-md-8">
	    			<h2 className="text-center">{movieDetail.Title} <small>({movieDetail.Year})</small></h2>
	    			<div className="d-flex gap-5 mb-3 justify-content-center">
	    				<div className="text-center">
	    					<p className="mb-1">IMDb Rating</p>
	    					<h1>{movieDetail.imdbRating}</h1>
	    				</div>
	    				<div className="text-center">
	    					<p className="mb-1">Metascore</p>
	    					<h1>{movieDetail.Metascore}</h1>
	    				</div>
	    			</div>
	    			<p>{movieDetail.Plot}</p>
	    			<ul className="list-group">
	    				<li className="list-group-item">{movieDetail.Genre}</li>
	    				<li className="list-group-item"><strong>Director:</strong> {movieDetail.Director}</li>
	    				<li className="list-group-item"><strong>Writer:</strong> {movieDetail.Writer}</li>
	    				<li className="list-group-item"><strong>Starring:</strong> {movieDetail.Actors}</li>
	    				<li className="list-group-item"><strong>Release:</strong> {movieDetail.Released}</li>
	    				<li className="list-group-item"><strong>Duraion:</strong> {movieDetail.Runtime}</li>
	    			</ul>
	    		</div>
	      	</div>
	    </div>
	)
};

export default MovieDetail;