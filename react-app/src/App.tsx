import axios, { AxiosError } from "axios";
import { set } from "immer/dist/internal";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof AxiosError) return;
        setLoading(false);
        setError(error.message);
      });
    // .finally(() => setLoading(false)); it does not work with strict mode on
    // network tab in inspect, change no throttling to slow 3g

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .catch((error) => {
        setError(error.message);
        setUsers([...users, user]);
      });
  };
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
