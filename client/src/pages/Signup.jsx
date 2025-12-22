import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../utils/axiosConfig";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/authSlice";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await axios.post("/auth/signup", {
      name,
      email,
      password,
    });

    dispatch(loginSuccess(res.data));
    navigate("/dashboard");
  };
}