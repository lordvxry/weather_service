import { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';

const App: FC = () => {
  return (
    <div>
      <Header />
      <MainPage />
    </div>
  );
};

export default App;
