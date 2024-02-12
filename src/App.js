import Header from './components/Header';
import Login from './components/Login';
import Cardimg from './carding/Carding';
import Card2 from './carding/Card2';
import Card3 from './components/Card3';
import Footer from './components/Footer';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <div className="container">
        <div className="row">
          <div className="col">
            <Cardimg />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Card2 />
          </div>
        </div>
      </div>
      <div className="card3">
        <Card3 />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Section />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
