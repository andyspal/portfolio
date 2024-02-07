import React from 'react';
import '../styles/Home.scss';
import homeDraw from '../Images/home-laptop-draw.jpg';
const Home = () => {
  return (
    <div id='Home' className='home-content'>
      <div className="content-container">
        <div className='text-container'>
          <h2>Hello, I'm <span className='bold uppercase'>Andy</span></h2>
          <h3 className='subtitle'><span className='bold uppercase'>mern</span> stack developer</h3>
        </div>
        <div className='image-container'>
          <img className='developer-image' src={homeDraw} alt="developer-draw" title='developer-draw' />
        </div>
      </div>

    </div>
  )
}

export default Home;
