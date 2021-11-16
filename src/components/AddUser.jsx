
import React from 'react';
class AddUser extends React.Component {


    state = {
        name : "",
    }

    handleChange = (e) => {
        this.setState(
            {name: e.target.value}
            )

    }


    handleClick = (e) => {
        e.preventDefault();
        this.props.addUser({
            name : this.state.name,
            image : "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/8/5/8/858743bb35_50169458_chien-min.jpg"
        })
    }

   

        



    render() {

        return (
          

          
            <div className="add--user">
                  <form onSubmit={this.handleClick}>
            <input type="text" onChange={this.handleChange}/>
            </form>
         

          <div>
            <i className="fa fa-plus-circle" onClick={this.handleClick}></i>
          </div>
      </div>
    
        )
    }
}

export default AddUser;