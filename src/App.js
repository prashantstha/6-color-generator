import React, {useState} from 'react'
import './scss/App.scss';
import SingleColor from './SingleColor';
import Values from 'values.js';

function App() {
  const [color, SetColor] = useState('');
  const [error, setError] = useState(false);
  const [list, SetList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setError(false);
      SetList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    
  }


  return (
    <div className="App">
      <section className='container'>
        <div className="title">
          <h1>Color generator</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
          type="text"
          className={`${error ? 'error': null}`}
          value={color}
          onChange={(e) => SetColor(e.target.value)}
          placeholder="#f15025"
          />
          <button className="btn" type="submit">Submit</button>
        </form>
      </section>
      <section className='color-list'>
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
        })}
      </section>
      
    </div>
  );
}

export default App;
