import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";


const useUsers = () => {
    const [error, setError] = useState("");
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
  
      const { request, cancel } = userService.getAll<User>();
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

    return { users, error, isLoading, setUsers, setError };
};


export default useUsers;