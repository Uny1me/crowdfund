import About from './Components/About';
import Discover from './Components/Discover';
import Main from "./Components/Main";
import './App.css';

function App() {
  return (
    <div>
      <Main />
      <section style={{
        marginTop: '-160px',
        backgroundColor: 'rgb(252, 252, 252)'
      }} className="pb-5 d-flex flex-column align-content-center justify-content-center">
        <About />
        <Discover />
      </section>
    </div>
  );
}

export default App;
