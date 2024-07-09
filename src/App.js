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
      <Header/>
      <Main/>
      <Place/>
      <OurStory/>
      <Photo/>
      <Schedule/>
      <DressCode/>
      <Wishes/>
      <GeneralChat/>
      <Meeting/>
      <Timer/>
    </div>
  );
}

export default App;
