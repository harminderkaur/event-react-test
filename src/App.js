import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {HeroNamesisPage, MainPage, HeroBioPage} from './Pages';
import data from './data/db.json'
import HeroContext from './Contexts'
function App(props) {
  return (
    <HeroContext.Provider value={data}>
      <Router>
        <div className="container pt-5">
          <Switch>
            <Route exact path="/" component={MainPage} {...props} />
            <Route exact path="/:heroname" component={HeroNamesisPage} {...props} />
            <Route exact path="/:heroname/nemesis/:nemesisname" component={HeroBioPage} {...props} />
          </Switch>
        </div>
      </Router>
    </HeroContext.Provider>
    
  );
}

export default App;
