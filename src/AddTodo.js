import React, {Component} from  'react'

class AddTodo extends Component{
    state = {
        content: ''
    }
    handelChange = (e) =>{
        this.setState({
            content: e.target.value
        })
    }
    handelSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
          content:''
        })
    }
    render(){
        return (
          <div>
            <form onSubmit={this.handelSubmit}>
              <label>Add new todo:</label>
              <input type="text" onChange={this.handelChange} value={this.state.content}/> 
            </form>
          </div>
        );
    }
}

export default AddTodo;