import './App.css';
import InputForm from './Components/InputFrom';
import Table from './Components/Table';

function App() {
  return (
    <div className='lg:container mx-auto'>
      <div className="w-full flex justify-center flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 mt-2">Ini CRUD</h2>
        <InputForm/>
        <Table/>
      </div>
    </div>
  );
}

export default App;
