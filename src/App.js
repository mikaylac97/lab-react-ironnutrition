import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'


// function App() {
//   return (
//     <div className="App">
//       <FoodBox />
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    const foodItems = foods.map(food => {
      return <FoodBox name={food.name} calories={food.calories} image={food.image} />
    })
    return (
      <div>
        {foodItems}
      </div>
    )
  }
}
