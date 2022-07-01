import './App.css';
import AddBill from './Components/AddBill/AddBill';
import BillList from './Components/BillList/BillList';
import { BillProvider } from './Context/BillContext';

const App = () => {
  return (
    <div className='background'>
      <div className='container'>
        <BillProvider>
          <AddBill />
          <BillList />
        </BillProvider>
      </div>
    </div>
  )
}

export default App;
