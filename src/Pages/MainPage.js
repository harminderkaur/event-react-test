import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom'
import FilterBox from '../components/FilterBox';
//custom import
import HeroContext from '../Contexts';
const MainPage = ()=>{
  //Global state
  const HerosData= useContext(HeroContext);
  //local state
  const [heroList, setHeroList] = useState(HerosData)

  //Method
  const searchHandler = (event) =>{
    const {value} = event.target
    const filteredHeros = HerosData.filter(hero=>{
      return hero.name.toLowerCase().startsWith(value.toLowerCase())
    })
    setHeroList(filteredHeros)
  }
  return<>
          <FilterBox placeholder="Search Your Hero By Name" searchHandler={searchHandler}/>
          <main>
            <ul className="list-group" data-testid="list">
              {heroList.length ? heroList.map(hero=><li className="list-group-item" key={hero.name}>
              <Link to={hero.name}>{hero.name}</Link></li>):
              <li className="list-group-item">No Hero Found</li>
              }
            </ul>
          </main>
    </>
}
export default MainPage;