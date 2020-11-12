
import '../css/Presentation.css';

function Presentation() {
  return (
    <div className="presentation-component presentation">
      <h3>Profil</h3>
      <div className="presentation-list">
        <div className="presentation-text1">
            <p className="presentation-text">CodeName :</p>
            <p className="presentation-text">Age :</p>
            <p className="presentation-text">City :</p>
            <p className="presentation-text">Skills :</p>
        </div>
        <div className="presentation-text2">
            <p className="presentation-text">ArsenGavin</p>
            <p className="presentation-text">28y</p>
            <p className="presentation-text">Paris</p>
        </div>
      </div> 
      <p className="presentation-text presentation-text-alt">javascript | jquery</p>
      <p className="presentation-text presentation-text-alt">Vue.js  | react.js</p>
      <p className="presentation-text presentation-text-alt">wordpress | joomla</p>
      <p className="presentation-text presentation-text-alt">css  |  sass</p>
      <p className="presentation-text presentation-text-alt">github</p>
    </div>
  );
}

export default Presentation;
