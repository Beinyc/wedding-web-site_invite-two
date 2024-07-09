import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import OurStory from './components/OurStory/OurStory';
import Photo from './components/Photo/Photo';
import Place from './components/place/place';
import DressCode from './components/DressCode/DressCode';
import Wishes from './components/Wishes/Wishes';
import GeneralChat from './components/GeneralChat/GeneralChat';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Place/>
      <OurStory/>
      <Photo/>
      <DressCode/>
      <Wishes/>
      <GeneralChat/>
    </div>
  );
}

export default App;
