import './App.scss';
import Button from '@material-ui/core/Button';
import Contacts from "../Contacts/Contacts.jsx";

function App() {
  return (
      <div className="app">
          <header className="app-header">
              App header React
          </header>
          <main className="wrapper">
              <div className="column">
                  <Contacts />
              </div>
              <div className="column">
                  <Contacts />
              </div>
              <div className="column">
                  <Button variant="contained" color="primary">
                      Hello World
                  </Button>
              </div>
          </main>
      </div>
  );
}
export default App;
