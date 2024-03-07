"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import Loading from "@/components/Loading";

export default function SignIn() {
  const { setData } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/users/sign-in", user);
      console.log(response);
      const res = await axios.get("/api/users/me");
      console.log(res.data);
      setData(res.data.data._id);
      localStorage.setItem("session_id", res.data.data._id);
      router.push("/");
    } catch (error) {
      toast.error("Login failed");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
      <div className="spinner-container"> <Loading /></div> 
      ) : (
        <div className="container">
          <h1>Sign In</h1>
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
            <button
              className="button-form"
              type="button"
              onClick={handleSignIn}
            >
              Sign In
            </button>

            <Link href="/sign-up" className="sign-link">
              Sign Up
            </Link>
          </form>
        </div>
      )}
    </>
  );
}
