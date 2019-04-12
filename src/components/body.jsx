import React, { Component } from 'react';
//import logo from './logo.svg';
import '../css/body.css';
import output from '../util/script.js';

class Body extends Component {
  render() {
    return (
      <div className='body'>
      <div ClassName='form'>
      <form className='register-form'>
                    Name: <br/> <input type="text" name="name" placeholder="Name" onChange={this.props.handleChangeInfo} /><br/>
                    Age: <br/> <input type="text" name="age" placeholder="Age" onChange={this.props.handleChangeInfo} /><br/>
                    Occupation: <br/> <input type="text" name="occupation" placeholder="Occupation" onChange={this.props.handleChangeInfo} /><br/>
                    <br/>
                    <button type="button" onClick={this.props.handleAddUser}>Add</button>
     </form>
      </div>
      </div>
    );
  }
}
Body.propTypes = {
  handleChangeInfo: PropTypes.func,
  handleAddUser: PropTypes.func
}
export {Body}
