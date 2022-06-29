import NavBar from './components/Navigation/NavBar';
import Header from './components/Layout/Header';
import Services from './components/Misc/Services';
import About from './components/Layout/About';
// import AvailableServices from './components/Misc/AvailableServices';

import '../src/styles/main.scss';

function App () {
  return (
    <div className="App">

      <NavBar />
      <Header />
      <Services />
      <About />

    </div>
  );
}

export default App;
