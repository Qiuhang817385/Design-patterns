import React, { Component } from 'react';
// import store from './store';
import { handleInputChange, handleBtnClick, handleListDel, getTodoListTrunk } from './store/actionCreators';
import { connect } from 'react-redux';
class App extends Component {
  // constructor(props) {
  //   super(props);
  // this.state = store.getState();
  // this.inputChange = this.inputChange.bind(this);
  // this.handleAppChange = this.handleAppChange.bind(this);
  // store.subscribe(this.handleAppChange);
  // }
  // handleAppChange() {
  //   this.setState(() => {
  //     return store.getState();
  //   })
  // }
  render() {
    const { inputValue, inputChange, btnClick, list, listDel } = this.props;
    return (
      <div>
        <input value={inputValue}
          onChange={inputChange}
        ></input>
        <button onClick={btnClick}>按钮</button>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <button onClick={listDel.bind(this, index)}>按钮</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
// 把store里面的数据转换成属性props,做连接的时候
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
// store.dispatch store的dispatch方法挂载到prop上
// 返回修改数据
const mapDispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      const value = e.target.value;
      const action = handleInputChange(value);
      dispatch(action);
    },
    btnClick() {
      // console.log('1');
      const action = handleBtnClick();
      dispatch(action);
    },
    listDel(index) {
      const action = handleListDel(index);
      dispatch(action);
    },
    componentDidMount() {
      const action = getTodoListTrunk();
      dispatch(action);
    }
  }
}


// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);