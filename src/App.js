import React, {Component} from 'react';
import initReactFastclick from 'react-fastclick';
import Calendar from './Components/index'
initReactFastclick();
const style = {
  position: 'relative',
  margin: '50px auto'
}
class App extends Component {

  render() {
    return(
      <div className='App'>
        <Calendar style={style} width="302px"/>
      </div> 
    )
  }
}

export default App;
