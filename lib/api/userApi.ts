import { User } from "@/types/user";
import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});

export default async function getUsers(): Promise<User[]> {
  const { data } = await usersApi.get<User[]>("/users");
  return data;
}
