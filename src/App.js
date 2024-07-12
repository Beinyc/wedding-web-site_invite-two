import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import OurStory from './components/OurStory/OurStory';
import Photo from './components/Photo/Photo';
import Place from './components/place/place';
import DressCode from './components/DressCode/DressCode';
import Wishes from './components/Wishes/Wishes';
import GeneralChat from './components/GeneralChat/GeneralChat';
import Meeting from './components/Meeting/Meeting';
import Timer from './components/Timer/Timer';
import Schedule from './components/Schedule/Schedule';

function App() {
  return (
    <div className="App">
      <div id='home'><Header /></div>
      <div id="invitation"><Main /></div>
      <div id="date"></div>
      <div id="registration-place"></div>
      <div id="registration-place"></div>
      <div id="venue"><Place /></div>
      <div id="our-story"><OurStory /></div>
      <div id="happy-moments"><Photo /></div>
      <div id="schedule"><Schedule /></div>
      <div id="dress-code"><DressCode /></div>
      <div id="wishes"><Wishes /></div>
      <div id="chat"><GeneralChat /></div>
      <div id="rsvp"><Meeting /></div>
      <div id="countdown"><Timer /></div>
    </div>
  );
}

export default App;
