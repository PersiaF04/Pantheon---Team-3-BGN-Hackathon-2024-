import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogin = async ({ email, firstName, lastName, image }) => {
    console.log("handleLogin", email, firstName, lastName, image);
    try {
      console.log(import.meta.env.VITE_BASE_URL);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/signon`,
        {
          email,
          firstName,
          lastName,
          image,
        },
      );
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);
      console.log(localStorage.getItem("data"));
      console.log("Login response", response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const responseGoogle = async (response) => {
    console.log("Google Response:", response); // Debug response
    if (response.credential) {
      const token = response.credential; // Get the token

      // Decode the ID token (if using it) to get user info
      const userPayload = JSON.parse(atob(token.split(".")[1]));
      console.log("response credential", token);
      console.log("userpayload", userPayload);

      await handleLogin({
        email: userPayload.email,
        firstName: userPayload.given_name,
        lastName: userPayload.family_name,
        image: userPayload.picture,
      });

      const user = JSON.parse(localStorage.getItem("user"));

      console.log(user);
      setUser({
        name: user.firstName + " " + user.lastName,
        email: user.email,
        picture: user.image, // Assuming `picture` is in userPayload
      });

      // Navigate to profile after setting the user
      navigate("/profile");
    } else {
      console.error("Login failed:", response.error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-11/12 max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <GoogleLogin
          onSuccess={responseGoogle}
          onError={(error) => console.error("Login failed:", error)}
          scope="openid profile email" // Updated scopes
          style={{ width: "100%" }}
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded w-full"
        />
      </div>
    </div>
  );
};

export default Login;
