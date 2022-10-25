import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import PageviewSortForm from './components/PageviewSortForm/PageviewSortForm';

function App() {
  return (
    <Container>
      <div className='App mt-4 mb-4 p-5'>
        <header className='square rounded bg-dark text-light mb-4 p-5 '>
          <h1>Welcome to WikiSort!</h1>
          <p>A Tiny (but Mighty) App Powered by Wikipedia</p>
        </header>
        <div>
          <PageviewSortForm />
        </div>
      </div>
    </Container>
  );
}

export default App;
