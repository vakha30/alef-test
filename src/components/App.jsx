import Footer from "./Footer/index";
import Header from "./Header";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
