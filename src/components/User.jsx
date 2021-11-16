
function User(props){
    return (
        <div className="user">
              <div className="user--image">
                  <div className="image--container">
                      <img src={props.image} alt="" />
                  </div>
              </div>
              <div className="user--name">
                <h3>{props.name}</h3>
                <p>Dévéloppeur Fullstack</p>
              </div>
              <div className="user--delete">
                  <i className="fas fa-trash"></i>
              </div>
            </div>
    )
}

export default User;