import User from "./User";

function App() {

  const users = [
    {
      id: 1,
      firstname: 'Oleg',
      lastname: 'Petrov',
      age: 28
    },

    {
      id: 2,
      firstname: 'Ivan',
      lastname: 'Ivanov',
      age: 48
    },

    {
      id: 3,
      firstname: 'Elena',
      lastname: 'Vlasova',
      age: 50
    },

    {
      id: 4,
      firstname: 'Peter',
      lastname: 'Parker',
      age: 30
    }
  ]

  return (
    <div>
      {
        // users.map((elem) => <User firstname={elem.firstname} lastname={elem.lastname} age={elem.age} />)
        users.map((elem) => <User {...elem} key={elem.id} />)
      }
    </div>
  );
}

export default App;
