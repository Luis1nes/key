import Row from './components/row/row'
import './App.css';

let letters = {
  firstRow: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  secondRow: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  thirdRow: ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
}

function App() {
  return (
    <div className="App">
      {
        Object.keys(letters).map((key, index) => {
          return <Row key={index} letters={letters[key]} />
        })
      }
    </div>
  );
}

export default App;
