import Header from "./components/Header"
import Main from "./components/Main"
import './App.css';
import Footer from "./components/Footer";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div className="App container">
      <Header />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
