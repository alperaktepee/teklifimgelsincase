"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function SignUp() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  console.log(user);
  const handleSignUp = async () => {
    try {
      const response = await axios.post("/api/users/sign-up", user);
      toast.success("Registeration successful")
      router.push("/sign-in");
      console.log(response);
    } catch (error) {
      toast.error("Registration failed");
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form className="form-container">
        <input
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="button-form" type="button" onClick={handleSignUp}>
          Sign Up
        </button>

        <Link href="/sign-in" className="sign-link">
          Sign In
        </Link>
      </form>
    </div>
  );
}
