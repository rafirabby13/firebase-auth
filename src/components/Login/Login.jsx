/* eslint-disable no-unused-vars */
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init.js";
import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [user, setUser] = useState({name: '', email: ''})
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  const GitHubProvider = new GithubAuthProvider()

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        // setName(res.user.displayName)
        // setEmail(res.user.email)
        // setUser(
        //     {
        //         name: res.user.displayName,
        //         email: res.user.email
        //     }
        // )
        setUser(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignOut = () => {
    signOut(auth).then(()=>{
        alert('sign out successfully')
        setUser('')
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleSignInWithGithub=()=>{
        signInWithPopup(auth, GitHubProvider)
        .then(res=>{
            console.log(res.user);
            setUser(res.user)
        })
        .catch(err=>{
            console.log(err);
        })
  }

  return (
    <div>
      {/* <h1>{user.name}</h1>
            <h1>{user.email}</h1> */}
      {user && (
        <div>
          <h4>{user.displayName}</h4>
          <h4>{user.email}</h4>
          <img src={user.photoURL} alt="" />
        </div>
      )}
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
        
      ) : (
        <div>
            <button onClick={handleSignInWithGoogle}>
          Create account with Google
        </button>
        <button onClick={handleSignInWithGithub}>
          Create account with Github
        </button>
        </div>
      )}
    </div>
  );
};

export default Login;
