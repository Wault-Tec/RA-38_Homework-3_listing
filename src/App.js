import './App.css';
import jsonData from "./data/etsy.json"
import Listing from './components/Listing';

const App = () => {
  return <Listing items={jsonData}/>
}

export default App;
