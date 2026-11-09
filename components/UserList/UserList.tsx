import { User } from "@/types/user";
import css from "./UserList.module.css";

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  return (
    <ul className={css.userlist}>
      {users.map((user) => (
        <li key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>isOnline:{user.isOnline ? "yes" : "no"}</p>
        </li>
      ))}
    </ul>
  );
}
