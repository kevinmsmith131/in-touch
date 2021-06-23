import React from 'react';
import Header from './../../components/header/Header';
import FollowingBar from './../../components/followingbar/FollowingBar';
import Feed from './../../components/feed/Feed';
import './home.css';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Header isHomepage={true}/>
      <div className='homeContainer'>
        <FollowingBar user={user}/>
        <Feed isHomepage={true}/>  
      </div>
    </>
  );
};

export default Home;