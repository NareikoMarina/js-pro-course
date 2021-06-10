import React, {useEffect, useState} from 'react';
import styles from './User.module.css';

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("http://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((result) => setUsers(result));
    }, []);

    return (
      <div className={styles.users}>
        {users.map((user) => {
          return <div className={styles.users} key={user.id}>{user.name}</div>;
        })}
      </div>
    );
};

export default User;