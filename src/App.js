import './App.css';
import { Component } from 'react';
import{CardList} from './Component/card-list/card-list.component';
import{SearchBox} from './Component/search-box/search-box.component';

class App extends Component {
constructor(){
super();
this.state = {
  monsters : [],
  searchField : ''
  };
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response =>response.json())
  .then(users => this.setState({monsters:users}));
}

handleChange = (e) =>{this.setState ({searchField :e.target.value})}

render(){

  const {monsters,searchField } =this.state;
  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

  return (
    <div className='App'>
      <h1>Kittens of Gloomhaven</h1>
     <SearchBox
       placeholder={'Search Kittens'} 
       handleChange={this.handleChange}
     />
);
      <CardList monsters ={filteredMonsters }/> 
    </div>
  );
}
}

export default App;
