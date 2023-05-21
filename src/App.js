import './App.css';
import { Provider } from "react-redux";
import Calculator from './components/CalculatorComp.js'; 
import store from "./features/store.js";


function App() {
  return (
    <Provider store={store}>
      <h1 className='text-center font-black font-mono'>
        Calculator made by <br/>
        <a href="https://github.com/Pankeking/pancakalculator" className='font-sans'>
           Pankeking
        </a>
      </h1>
      <Calculator/>
    </Provider>
  );
}

export default App;
