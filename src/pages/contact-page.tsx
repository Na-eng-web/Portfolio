import { Box, Button, Input } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export const ContactPage = () => {
  const [users, setUsers] = useState({} as user);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8080/users");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async () => {
    try {
      const res = await axios.post("http://localhost:8080/addUser", {
        name: users.name,
        email: users.email,
        age: users.age,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    //function to get all users
    getUsers();
  }, []);

  interface user {
    name: string;
    email: string;
    age: number;
  }

  const handleChange = ({ field, value }: { field: string; value: string }) => {
    setUsers({ ...users, [field]: value });
  };

  return (
    <Box>
      <Input
        placeholder="Enter your name"
        onChange={(e) => handleChange({ field: "name", value: e.target.value })}
      />
      <Input
        placeholder="email"
        onChange={(e) =>
          handleChange({ field: "email", value: e.target.value })
        }
      />
      <Input
        placeholder="age"
        onChange={(e) => handleChange({ field: "age", value: e.target.value })}
      />
      <Button onClick={() => addUser()}>Submit</Button>
    </Box>
  );
};
