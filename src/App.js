
import './App.css';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import  React  from 'react';

class App extends React.Component {
  state  = {
    users: [ {
        name: 'Kouyate Karim',
        image : 'https://kouyatekarim.netlify.app/res/images/gomycode.jpeg'
    },
    
    ],
}

    handleAdd = (user) =>
    {
      let newUsers = [...this.state.users];//copie du tableau
      newUsers.push(user);

      this.setState({users: newUsers});
    }

  render() {
    return (
      <div className="container--list">
        
          <AddUser addUser={this.handleAdd}/>
          <UserList users={this.state.users}/>
      
      </div>
    );
  }
  
}

export default App;
