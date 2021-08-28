import { useEffect, useState, useContext } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import HeroContext from '../Contexts';
const HeroBioPage = ({match})=>{
  const {heroname, nemesisname} = match.params
  // console.log({heroname, nemesisname})
 //global state
 const HerosData= useContext(HeroContext);
 //local state
 const [namesis, setSelectedNamesis] = useState({})
 //hooks
 useEffect(()=>{
   if(heroname && nemesisname){
     const heroSelected = HerosData.find(hero=>hero.name === heroname)
     const selectedNamesis = heroSelected?.nemesis?.find(item=>item.name === nemesisname)
     setSelectedNamesis(selectedNamesis)
   }
 }, [heroname, nemesisname, HerosData])

 const {name, bio, firstAppearance} = namesis
  return <>
        <Breadcrumbs/>
        <div className="card">
          <h5 className="card-header">{name}</h5>
          <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{bio}</p>
            <footer className="blockquote-footer">First Appearance in <cite title="Source Title">{firstAppearance}</cite></footer>
          </blockquote>
          </div>
        </div>
      </>
}
export default HeroBioPage