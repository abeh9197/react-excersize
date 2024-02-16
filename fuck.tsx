const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(myElement);

const vehicles = ['mustang', 'f-150', 'expedition'];

const [,,suv] = vehicles;


const person = {
    name: 'Jesse',
    age: 30,
    address: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }

  displayMessage(person)

  function displayMessage({address: { state }}) {
    const message = 'I live in ' + state + '.';
  }