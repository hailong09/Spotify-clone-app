
import { useEffect, useState } from 'react';
import './App.css';
import Login from "./Login"
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player'
import {useGlobalContext} from './context'
const spotify = new SpotifyWebApi();

function App() {
  const [{user , token}, dispatch] = useGlobalContext();
  useEffect(() =>{
      const hash = getTokenFromUrl();
      // console.log(token);
      window.location.hash = ""
      const _token = hash.access_token;
      if(_token){
        dispatch({
          type: 'SET_TOKEN',
          token: _token,
        });
        // Allow back and forward between React and spotify API
        spotify.setAccessToken(_token);
        //Fetches information about the current user
        spotify.getMe().then(user => {
          //console.log(user)
          
          dispatch({
            type: 'SET_USER',
            user: user,
          })
        })

        spotify.getUserPlaylists().then(playlists =>{
          console.log(playlists)
          dispatch({
            type: 'SET_PLAYLISTS',
            playlists
          })
        })

        spotify.getPlaylist('37i9dQZEVXblAnzFCRyVM7').then(
          response =>{
            dispatch({
              type: 'SET_DISCOVER_WEEKLY',
              discover_weekly: response
            })
          }
        )

      }
     
  },[])
// console.log(spotify);
  return (
  
    <div className="App">
      {
        token ? <Player spotify={spotify}/> : <Login/>
      }
         
    </div>
  );
}

export default App;
