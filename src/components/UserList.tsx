import * as React from "react";
import { useDispatch } from "react-redux";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creators/user";

interface UserListProps {}

const UserList: React.FC<UserListProps> = () => {
  const { error, loading, users } = useTypedSelector((state) => state.users);
  const { fetchUsers } = useActions();

  React.useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
};

export default UserList;
