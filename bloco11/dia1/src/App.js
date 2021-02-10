import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrayOfTasks = ['Escovar os dentes', 'Tomar banho', 'Fazer exercício', 'Estudar'];

const App = () => (<ul>{arrayOfTasks.map(element => task(element))}</ul>)

export default App;
