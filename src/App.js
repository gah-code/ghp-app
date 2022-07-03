import NavBar from './components/Navigation/NavBar';
import Header from './components/Layout/Header';
import Services from './components/Misc/Services';
import About from './components/Layout/About';
import Footer from './components/Layout/Footer';

import '../src/styles/main.scss';

function App () {
  return (
    <div className="App">

      <NavBar />
      <Header />
      <Services />
      <About />
      <Footer />

    </div>
  );
}

export default App;

//
