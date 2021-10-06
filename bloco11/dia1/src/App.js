<<<<<<< HEAD
=======
import logo from './logo.svg';
>>>>>>> f375e8bf0d6f851481021b18dc99703f6eda34af
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrayOfTasks = ['Escovar os dentes', 'Tomar banho', 'Fazer exercício', 'Estudar'];

const App = () => (<ul>{arrayOfTasks.map(element => task(element))}</ul>)

export default App;
