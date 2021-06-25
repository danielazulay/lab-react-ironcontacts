import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import Table from "./Table";
import Button from "./Button";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <Button name="Add Random contact" />
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">FirstName</th>
            <th scope="col">Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.slice(0, 5).map((actor) => {
            return (
              <Table
                name={actor.name}
                pictureUrl={actor.pictureUrl}
                popularity={actor.popularity}
                id={actor.id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
