import './App.css';
import Calculator from './components/CalculatorComp.js'; 
import { Provider } from "react-redux";
import store from "./features/store.js";


function App() {
  return (
    <Provider store={store}>
      <Calculator/>
    </Provider>
  );
}

export default App;
