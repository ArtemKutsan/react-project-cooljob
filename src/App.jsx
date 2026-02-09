// src/App.jsx
import './App.css';
import Header from './components/sections/Header';
import Partners from './components/sections/Partners';

function App() {
  return (
    <>
      <div className="layout">
        <Header />
        {/* <section id="hero"></section> */}
      </div>
      <main>
        <div className="container">
          <h1>React project Cooljob</h1>
        </div>
        <section id="partners">
          <Partners />
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
