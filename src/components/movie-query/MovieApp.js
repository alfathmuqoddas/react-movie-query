import React, { useState, useEffect }from 'react';
import {Link} from 'react-router-dom';
import Layout from '../../Layout/Layout';
import './MovieApp.css';
//import SearchBox from './components/SearchBox'

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovies = async (searchValue) =>  {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=af1284eb&`
    const res = await fetch(url);
    const resJson = await res.json();
    if (resJson.Search) {
      setMovies(resJson.Search);
    }
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  return (
      <Layout>
        <div className="">
          <div className="input-group my-3">
              <input type="text" className="form-control" value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder='Type to search...' />
          </div>
        </div>

        <div className='row g-2 my-5'>
          {movies.map((movie, index) =>
            <div className='col-md-3 bg-dark'>
            <div className='p-2 bright position-relative'>
              <Link to={{
                pathname: `/movie/${movie.imdbID}`,
                state: { movie }, //pass the data so that you can use it via useLocation
                }}>
                <img src={movie.Poster} alt='movie' className="w-100" />
                <div className="position-absolute top-50 start-50 translate-middle middle text-light"><h1>+</h1></div>
              </Link>
            </div>
            </div>
          )}
        </div>
      </Layout>
  );
};

export default App;
