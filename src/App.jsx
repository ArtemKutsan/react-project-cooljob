// src/App.jsx
import './App.css';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Partners from './components/sections/Partners';
import Categories from './components/sections/Categories';
// import Vacancies from './components/sections/Vacancies';

function App() {
  return (
    <>
      <div className="layout">
        <Header />
        <section id="hero">
          <Hero />
        </section>
        <section id="partners">
          <Partners />
        </section>
      </div>
      <main>
        {/* <div className="container">
          <h1>React project Cooljob</h1>
        </div> */}

        <section id="categories">
          <Categories />
        </section>

        {/* <section id="vacancies">
          <Vacancies />
        </section> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
