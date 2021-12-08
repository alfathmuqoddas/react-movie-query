import React, { useState }from 'react';
import {Link} from 'react-router-dom';
import Layout from '../../Layout/Layout';
//import Navbar from '../../Layout/Navbar';
//import SearchBox from './components/SearchBox'

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);

  const getMovies = async (e) =>  {
    e.preventDefault();
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=af1284eb&`
    const res = await fetch(url);
    const resJson = await res.json();
    if (resJson.Search) {
      setMovies(resJson.Search);
      setLoading(true);
    }
    setSearchValue('');
  };

  return (
    <>
        <nav className="navbar navbar-dark bg-primary">
          <div className="container px-md-5">
            <a href="#/movie" className="navbar-brand">React Movie App</a>
            <form className="d-flex" onSubmit={getMovies}>
              <input type="text" className="form-control me-2" value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder='Search for movies...' />
              <input type="submit" className="btn btn-danger" value="Search" />
          </form>
          </div>
        </nav>

        <Layout>
        { loading ? 
        <div className='row row-cols-md-4 row-cols-2 py-5 gy-2 gx-2 gx-lg-0'>
          {movies.map((movie, index) =>
            <div className='col' key={index}>
              <div className='d-flex justify-content-center align-items-center bright position-relative rounded-3' style={{maxWidth:'250px',height:'375px',backgroundColor:'black',padding:'5px'}}>
                <Link to={{
                  pathname: `/movie/${movie.imdbID}`,
                  state: { movie }, //pass the data so that you can use it via useLocation
                  }}>
                  <img src={movie.Poster} alt='movie' className="rounded-3" style={{maxWidth:'100%',maxHeight:'100%'}}/>
                  <div className=
                  "position-absolute 
                  top-50 start-50 
                  translate-middle 
                  middle 
                  text-center 
                  text-light"><span className="fw-bold fst-italic">{movie.Title}</span> ({movie.Year})</div>
                </Link>
              </div>
            </div>
          )}
        </div>
        :
        <div className="d-flex justify-content-center align-items-center" style={{height:'71vh'}}><h1 className="fst-italic">Search Movies</h1></div>
        }
      </Layout>
    </>
  );
};

export default App;
