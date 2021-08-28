import { useEffect, useState, useContext } from 'react';
import {Link} from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs';
import FilterBox from '../components/FilterBox';
import HeroContext from '../Contexts';

const DescriptionRow = (label, value)=>{
  return <div className="row">
      <div className="col-2"><strong>{label}</strong></div>
      <div className="col-10">{value}</div>
    </div>
}

const HeroNamesisPage = ({match})=>{
  //global state
  const HerosData= useContext(HeroContext);
  //local state
  const [heroDetail, setHeroDetail] = useState({})
  const [filteredNemesis, setFilteredNemesis] = useState([])
  const selectedHero = match.params?.heroname
  //hooks
  useEffect(()=>{
    if(selectedHero){
      const heroSelected = HerosData.find(hero=>hero.name === selectedHero)
      setHeroDetail(heroSelected)
      setFilteredNemesis(heroSelected?.nemesis)
    }
  }, [selectedHero, HerosData])

  //methods 
  const searchHandler = (event) =>{
    const {value} = event.target
    const {nemesis = []} = heroDetail
    const filteredNamesis = nemesis.filter(item=>{
      return item.name?.toLowerCase().startsWith(value.trim()?.toLowerCase())
    })
    setFilteredNemesis(filteredNamesis)
  }

  const {name, realname, hobby, power} = heroDetail
  return  <>
          <FilterBox placeholder="Search nemesis By Name" searchHandler={searchHandler}/>
          <Breadcrumbs/>
          <div className="card">
            <h5 className="card-header">Hero Bio</h5>
            <div className="card-body">
              {DescriptionRow('Super Hero Name', name)}
              {DescriptionRow('Real Name', realname)}
              {DescriptionRow('Hobby', hobby)}
              {DescriptionRow('Powers', power?.map(item=><span key={item}>{item}{', '}</span>))}
              <h5 className="py-3">List of nemesis</h5>
              <ul className="list-group">
                {filteredNemesis?.length ? filteredNemesis.map(item=>
                <li className="list-group-item" key={item.name}>
                     <Link to={`${match.url}/nemesis/${item.name}`}>{item.name}</Link>
                </li>):
                <li className="list-group-item">No nemesis Available</li>
                }
              </ul>
            </div>
          </div>
  </>
}

export default HeroNamesisPage