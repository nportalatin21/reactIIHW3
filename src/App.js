import { List } from './List';
import './App.css';



function App() {

  const animals = [
    
      {id: 1, Picture: "🐕", Animal: "Dog"}, 
      {id: 2, Picture: "🐈", Animal: "Cat"}, 
      {id: 3, Picture: "🐔", Animal: "Chicken"}, 
      {id: 4, Picture: "🐄", Animal: "Cow"}, 
      {id: 5, Picture: "🐑", Animal: "Sheep"}, 
 

  ]



return (
  <div className='App'>
 
    <List data={animals}/>
    
  </div>

)
}

export default App;