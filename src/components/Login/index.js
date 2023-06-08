import React, {useState} from 'react';
import Swal from 'sweetalert2';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {UserAuth} from "../../context/AuthContext";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {currentUser, signInWithGoogle} = UserAuth()
  console.log(currentUser)

  const handleLoginWithGoogle = async () => {
    try {
      await signInWithGoogle()
      localStorage.setItem('is_authenticated', true);
    } catch (error) {
      console.log(error)
    }
  }
  const handleLogin = async (e) => {
    e.preventDefault();

    const auth = getAuth();

    if (document.activeElement.name === 'Login') {
      try {
        await signInWithEmailAndPassword(auth, email, password)
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            localStorage.setItem('is_authenticated', true);
            setIsAuthenticated(true);

            Swal.fire({
              icon: 'success',
              title: 'Successfully logged in!',
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
      } catch (err) {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'Incorrect email or password.',
              showConfirmButton: true,
            });
          },
        });
      }
    } else if (document.activeElement.name === "Register") {
      try {
        createUserWithEmailAndPassword(auth, email, password)
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            localStorage.setItem('is_authenticated', true);
            setIsAuthenticated(true);

            Swal.fire({
              icon: 'success',
              title: 'Successfully registered and logged in!',
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
      } catch (err) {
        console.log(err)
      }
    }

  };

  return (
    <div className="small-container">
      <form onSubmit={handleLogin}>
        <h1>Admin Login</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="admin@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="qwerty"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <input style={{ marginTop: '12px' }} type="submit" value="Login" name="Login" />
        <input style={{ marginTop: '12px', marginLeft: '12px', backgroundColor: "black" }} type="submit" value="Register" name="Register" />
      </form>
      <button
        type="button"
        onClick={handleLoginWithGoogle}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        With Google
      </button>


    </div>
  );
};

export default Login;
