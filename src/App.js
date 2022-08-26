import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import BlogList from "./components/BlogList";
import { Provider } from "react-redux/es/exports";
import store from "./redux/store";
function App() {
    return (
            <Provider store={store}>
              <Navbar />
              <Search/>
              <BlogList/>
              <Footer/>
              </Provider>
      
       
    );
}

export default App;
