import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='wrapper'>
      <Home/>
      <About/>
      <Contact/>
      </div>  
    </div>
  );
}

export default App;
