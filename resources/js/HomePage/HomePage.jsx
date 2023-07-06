import React from 'react';
import Login from '../Login/Login';
import Modal from '../Modal/Modal';
import "../../css/HomePage.scss";
import OrionTracker from '../OrionTracker/OrionTracker';
import MasteryTracker from '../MasteryTracker/MasteryTracker';



const HomePage = () => {
  return (
    <section className='home_page'>
      <div className="home_page_titles_and_login">
        <div className='home_page_titles'>
          <h1 className='home_page_title1'>Call of Duty: MWII</h1>
          <h1 className='home_page_title2'>Camo Tracker</h1>
        </div>
        <div className='home_page_login_section'>
          <Login />
        </div>
      </div>
      <div className='home_page_trackers'>
        <div className='orion_tracker_div'>
          <OrionTracker />
        </div>
        <div className='mastery_trackers_div'>
          <MasteryTracker masterycamo="Gold" />
          <MasteryTracker masterycamo="Platinum" />
          <MasteryTracker masterycamo="Polyatomic" />
        </div>
      </div>



    </section>
  );
};

export default HomePage;
