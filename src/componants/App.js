
import '../css/App.css';
import video from '../video/video-fond2.mp4';
import Header from './Header';
import Presentation from './Presentation';

function App() {
  return (
    <div>
      {/* <div className="video-fond"> */}
        <video autoPlay loop  className="video-fond">
          <source src={video}
                  type="video/mp4"></source>
        </video>
      {/* </div> */}
      <div className="App">
        <Header />
        <Presentation />
        <p className="citation">"La différence entre le possible et l'impossible se trouve dans la détermination" Gandhi</p>
      </div>
    </div>
  );
}

export default App;
