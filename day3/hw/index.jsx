const root = document.getElementById("root");

class User extends React.Component {
  render() {
    return (
      <ul className="listUser">
        {users.map((users) => {
          return (
            <li key={users.id}>
              <h2>
                Hello {users.first_name} {users.last_name}
              </h2>
              <img src={users.avatar} alt={users.id} />
              <p>
                Email: <span>{users.email}</span>
              </p>
            </li>
          );
        })}
      </ul>
    );
  }
}

User.propTypes = {
  id: PropTypes.number,
  email: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  avatar: PropTypes.string,
};
