import React from 'react';
import ExploreItem from '../../components/exploreMenuItem/ExploreItem';
import './ExploreMenu.css';
import item1 from '../../assets/item1.jpg';

const ExploreMenu = () => {
  return (
    <div className="exploreMenu">
      <h1>Our Menu</h1>
      <div className="menuTypes">
        <p>Indian</p>
        <p>Chinese</p>
        <p>Italian</p>
        <p>Mexican</p>
        <p>Indonesian</p>
        <p>South Indian</p>
        <p>American</p>
        <p>Indian</p>
        <p>Chinese</p>
        <p>Italian</p>
        <p>Mexican</p>
        <p>Indonesian</p>
        <p>South Indian</p>
        <p>American</p>
      </div>
      <div className="exploreList">
        <ExploreItem img={item1} name='Italiano' price='8' />
        <ExploreItem img={item1} name='Italiano' price='8' />
        <ExploreItem img={item1} name='Italiano' price='8' />
        <ExploreItem img={item1} name='Italiano' price='8' />
        <ExploreItem img={item1} name='Italiano' price='8' />
        <ExploreItem img={item1} name='Italiano' price='8' />
        <ExploreItem img={item1} name='Italiano' price='8' />
        <ExploreItem img={item1} name='Italiano' price='8' />
        <ExploreItem img={item1} name='Italiano' price='8' />
      </div>
    </div>
  )
}

export default ExploreMenu