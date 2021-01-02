import React, { useEffect } from 'react';
import aos from 'aos';

import './App.css';
import AppHeader from '../../components/Header';
import RouterView from '../../components/RouterView';
// import {axios} from "../utils/axios";
// import Header from "../components/Header.js";
// import SearchBox from "../components/SearchBox";
// import MovieList from "../components/MovieList";
// import AppLoader from "../components/AppLoader";


const API_KEY_STRING = 'apikey=a5d7e42f';

function Index() {
  // const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios.get(`/?s=iron&apikey&${API_KEY_STRING}`)
  //     .then(res => {
  //       setMovies(res.data.Search);
  //       setLoading(false);
  //     })
  //     .catch(err => console.error(err))
  // },[])

  // function search(value){
  //   setLoading(true);
  //   axios.get(`/?s=${value}&${API_KEY_STRING}`)
  //     .then(res => {
  //       setMovies(res.data.Search);
  //       setLoading(false);
  //     })
  //     .catch(err => console.log(err))
  // }

  useEffect(() => {
    aos.init();
  }, []);

  return (
    <>
      <AppHeader/>
      <RouterView/>
    </>
  );
}

export default Index;