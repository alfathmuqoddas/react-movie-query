import React, { useState, useEffect }from 'react';
import {Link} from 'react-router-dom';
import Layout from '../../Layout/Layout';
//import Navbar from '../../Layout/Navbar';
//import SearchBox from './components/SearchBox'

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  //const [loading, setLoading] = useState(false);

  const getMovies = async (e) =>  {
    e.preventDefault();
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=af1284eb&`
    const res = await fetch(url);
    const resJson = await res.json();
    if (resJson.Search) {
      setMovies(resJson.Search);
    }
    setSearchValue('');
  };

  return (
    <>
      <Layout>
        <div className="">
          <h1 className="mb-3 mt-5 text-center">React Movie App</h1>
          <form className="input-group mx-auto w-100" onSubmit={getMovies} style={{maxWidth: '500px'}}>
              <input type="text" className="form-control" value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder='Type to search...' />
              <input type="submit" className="btn btn-primary" value="Search" />
          </form>
        </div>

        <div className='row row-cols-md-4 row-cols-2 my-5 gy-2 gx-0'>
          {movies.map((movie, index) =>
            <div className='col'>
              <div className='bright position-relative rounded-3' style={{width:'250px',height:'375px',backgroundColor:'black',padding:'5px'}}>
                <Link to={{
                  pathname: `/movie/${movie.imdbID}`,
                  state: { movie }, //pass the data so that you can use it via useLocation
                  }}>
                  <img src={movie.Poster} alt='movie' className="rounded-3" style={{maxWidth:'100%',maxHeight:'100%'}}/>
                  <div className="position-absolute top-50 start-50 translate-middle middle text-light"><h1>+</h1></div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default App;
