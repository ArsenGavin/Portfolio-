import { Route, Switch, Redirect } from 'react-router-dom'
// We will create these two pages in a moment
import '../style/App.scss';
import video from '../video/motiondesign.mp4';
import Header from './Header';
import Presentation from './Presentation';
import ProjetsPro from './ProjetsPro';
import ProjetsEpitech from './ProjetsEpitech';
import ProjetsPerso from './ProjetsPerso';



export default function App() {
  return (
      <Switch>
          <div>
              <video autoPlay loop  className="video-fond">
                <source src={video}
                        type="video/mp4"></source>
              </video>

              <div className="App">
                <Header />

                {/* <div className="main-content">
                  <Presentation />
                  <ProjetsPro />
                  <ProjetsEpitech />
                  <ProjetsPerso />
                </div> */}


                <Route exact path="/">
                  <Redirect to="/App"/>
                </Route>
                <Route path="/Presentation" component={Presentation}/>
                <Route path="/ProjetsPro" component={ProjetsPro}/>
                <Route path="/ProjetsEpitech" component={ProjetsEpitech}/>
                <Route path="/ProjetsPerso" component={ProjetsPerso}/>
                <p className="citation">"La différence entre le possible et l'impossible se trouve dans la détermination" Gandhi</p>
              </div>
          </div>
      </Switch>
  )
}