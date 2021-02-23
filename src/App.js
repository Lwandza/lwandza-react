import './App.css';
import React, {useEffect} from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App(){

  
  const [{ token}, dispatch] = useDataLayerValue();

  useEffect(() =>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    
    if(_token){
      
      dispatch({
        type: "SET_TOKEN",
        token:_token,
      });
      

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        
        dispatch({
          type: "SET_USER",
          user:  user,
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        });
      });
      spotify.getPlaylist('37i9dQZEVXcFHqI0ZJPCJ5').then((respone) => {
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:respone,
        });
      });
 
    
    }

  
  }, [token,dispatch]);  
 

 
 
  return (
    <div>
      {
        token ? (
          <Home spotify={spotify}/>
        ) : (
          <Login/>
        )
      }
      
    </div>
      
  );

}

export default App;
