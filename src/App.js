
import './App.css';
import About from './components/About/About';
import AttorneyPage from './components/AttorneyPage/AttorneyPage';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import NewsLetter from './components/NewsLetter/NewsLetter';
import PracticePage from './components/PracticePage/PracticePage';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <HomePage/>
    <AttorneyPage/>
    <PracticePage/>
   <About/>
   <Faq/>
   <NewsLetter/>
   <Footer/>
    </div>
  );
}

export default App;
