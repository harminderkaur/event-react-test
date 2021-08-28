import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Breadcrumbs = () =>{
  const [crumbs, setCrumbs] = useState([])
  const {location} = window
  useEffect(()=>{
      if(location?.pathname && location?.pathname !== '/'){
        const crumbList = []
        const paths = location.pathname.split('/')
        // console.log("paths",paths)
        paths.forEach(item=>{
          if(item !== "nemesis"){
            const path = item === "" ? '/': `/${decodeURI(item)}`
            const name = item === ""? 'Home':`${decodeURI(item)}`
          
            crumbList.push({path, name})
          }
        })
        setCrumbs(crumbList)
      }
  }, [location?.pathname])
  
  return (<>{crumbs.length ? <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            {crumbs.map((item,index)=>
            index + 1 === crumbs.length ?  (
              <span key={index} className="breadcrumb-item "> {item.name}</span>
            ) : (
            <li className={`breadcrumb-item ${index === crumbs.length-1 && 'active'}`} key={item.name}>
                <Link to={item.path}>{item.name} </Link> 
            </li>
            )
            
            )}
          </ol>
        </nav>:null}
        </>)
}

export default Breadcrumbs