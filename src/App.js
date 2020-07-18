import React from 'react';
import './App.css';
// import Tasklist from './components/Tasklist';
import Listitem from './components/Listitem';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
library.add(faTrash);

class App extends React.Component {

constructor (props){
  super(props);
  this.state = {
    items : [ ],
    Currentitem : {
      text :" ",
      key : '',
    }
  }

  this.handelInput = this.handelInput.bind(this)
  this.addItem = this.addItem.bind(this)
  this.deleteItem = this.deleteItem.bind(this)
  this.setUpdate = this.setUpdate.bind(this)
}

handelInput(event){
  this.setState({
    Currentitem :{
      text : event.target.value,
      key : Date.now()
    }
  })
}

addItem(event){
  event.preventDefault();
  const newItem = this.state.Currentitem;
  console.log(newItem);
  if(newItem !== " "){
    const newItems = [...this.state.items , newItem]
    this.setState({
      items : newItems,
      Currentitem : {
        text :'',
        key : ''
      }
    })
  }
}

deleteItem(key){
  const filteredItems = this.state.items.filter(item =>
    item.key !== key )
    this.setState({
      items : filteredItems
    })
}

setUpdate(text,key){
  console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{        
      if(item.key===key){
        //console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
}

 render() { 
    return ( 
      <div className = "App">
        <header>
        <form id = "to-do-form" onSubmit = {this.addItem}>
          <input 
          type ="text" 
          value = {this.state.Currentitem.text}
          onChange = {this.handelInput}
          placeholder = "enter text"></input>
          <button type = "submit">Add</button>
        </form>
      </header>
      <Listitem items = {this.state.items}
      deleteItem = {this.deleteItem} 
      setUpdate  = {this.setUpdate}
      />
      </div>
     );
  }
}
 
export default App;
