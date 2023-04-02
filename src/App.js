import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import RouterPage from './components/RouterPage';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
         <RouterPage />       
         {/* <Login/> */}
    </div>
  );
}

export default App;
