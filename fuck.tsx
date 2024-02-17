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

const arrayOne = [1, 2, 3];
const arrayTwo = ["a", "b", "c"];
const combinedArray = [...arrayOne, ...arrayTwo]

blue ? renderBlue() : renderRed();

const title = <h1 className="primary">hello world</h1>