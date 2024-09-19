import apiClient, { CanceledError } from "./services/api-client";
import React, { useEffect, useState } from "react";
import userService, { User } from "./services/user-service";

function App() {
  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const { request, cancel } = userService.getAllUsers();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setLoading(false);
        setError(error.message);
      });
    // .finally(() => setLoading(false)); it does not work with strict mode on
    // network tab in inspect, change no throttling to slow 3g

    return () => cancel();
  }, []);

  const deleteUser = (user: User) => {
    setUsers(users.filter((u) => u.id !== user.id));
    userService.deleteUser(user).catch((error) => {
      setError(error.message);
      setUsers([...users, user]);
    });
  };
  const addUser = () => {
    const newUser = { id: 0, name: "New User" };
    const originalUsers = [...users];
    setUsers([...users, newUser]);

    userService
      .createUser(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((error) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.updateUser(user).catch((error) => {
      setError(error.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-3"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
