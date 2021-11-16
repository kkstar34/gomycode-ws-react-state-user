
import React  from 'react';
import User from './User';


class UserList extends React.Component {


    

    render() {


        return (
            <div className="user--list">
                {this.props.users.map(user =>  <User name={user.name} image={user.image}/> )}
               
            </div>
        )
    }


}

export default UserList;