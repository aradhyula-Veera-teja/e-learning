import './App.css';

import Headder from './components/Headder';
import Theme from './components/Theme';
import Pages from './pages/Pages';
import Navmenu from './components/NavMenu';
import Footer from './components/Footer';
import ScrollingTextBox from "./components/ScrollingTextBox";

function App() {
  return (
    <div>
      <Headder/>
      <Theme />
      <Pages />
      <Navmenu />
      <ScrollingTextBox />
      <Footer />
    </div>
  );
}

export default App;
