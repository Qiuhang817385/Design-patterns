import React, { Component } from 'react';
import store from './store';
import {handleInputChange,handleBtnClick,handleListDel,getTodoListTrunk} from './store/actionCreators';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.inputChange = this.inputChange.bind(this);
    this.handleAppChange = this.handleAppChange.bind(this);
    store.subscribe(this.handleAppChange);
  }
  componentDidMount(){
    const action = getTodoListTrunk();
    store.dispatch(action);
  }
  handleAppChange() {
    this.setState(() => {
      return store.getState();
    })
  }
  inputChange(e) {
    const value = e.target.value;
    const action =handleInputChange(value);
    store.dispatch(action);
  }
  btnClick() {
    // console.log('1');
    const action=handleBtnClick();
    store.dispatch(action);

  }
  listDel(index){
    const action = handleListDel(index);
    store.dispatch(action);
  }
  render() {
    return (
      <div>
        <input value={this.state.inputValue}
          onChange={this.inputChange}
        ></input>
        <button onClick={this.btnClick}>按钮</button>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return (
                <li key={index}>
                {item}
                <button onClick={this.listDel.bind(this,index)}>按钮</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
export default App;