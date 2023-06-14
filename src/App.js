import './App.css';
import Navbar from './components/Navbar/Navbar'
import First from "./components/First"
import Second from "./components/Featured"
import Third from "./components/Third"
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <First />
      <Second />
      <Third />
      <Footer />
      <Sidebar />

    </div >
  );
}

export default App;
