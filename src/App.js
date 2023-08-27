import './App.scss';
import FAQ from './Components/FAQ/FAQ';
import Features from './Components/Features/Features';
import { Header } from './Components/Header/Header';

function App() {
  return (
    <>
      <Header/>
      <Features/>
      <FAQ/>
    </>
  );
}

export default App;
