import React,{useState} from 'react';
import './App.css';
import Search from './components/Search/Search';
import Favorites from './components/Favorites/Favorites';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Lyric from './components/Lyric/Lyric';
import Navigation from './components/Navigation/Navigation';
import FavoriteContextProvider from './Contexts/FavoriteContext';

function App() {

  
  return (
    <div className="App">
        <img src={'/lyric-boot.png'}  className="logo"/>
            <FavoriteContextProvider>
                <Navigation />
                <Switch>
                  <Route path="/lyric">
                      <Lyric />
                  </Route>
                  <Route path="/favorites">
                        <Favorites />
                  </Route>
                  <Route path="/historique">
                      historique component
                  </Route>
                  <Route path="/">
                      <Search />
                  </Route>
                </Switch>
          </FavoriteContextProvider>
 
        
    </div>
  );
}

export default App;
