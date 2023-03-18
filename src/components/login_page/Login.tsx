import React, { useState } from "react";
import "./login.css";
import ListUsers from "../../store/users.json";
import { isAuthState, User, userState } from "../../store/RecoildStore";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useRecoilState(userState);
    const [isAuth, setIsAuth] = useRecoilState(isAuthState);
    const navigate = useNavigate();
    function handleSubmit(){
        debugger
        console.log(userName);
        console.log(password);
        console.log(ListUsers);
        ListUsers.forEach(user => {
         if(user.username == userName && user.pasword == password){
            setIsAuth(true);
            setUser({
                "username":userName,
                "password":password
            })
            navigate("/");
         }
       });
       if(isAuth == false){
        // alert("Opps, some things went wrong! Try again..")
       }
    }
  return (
    <div className="form">
      <div className="form__box">
        <div className="form__left">
          <div className="form__padding">
            <img
              className="form__image"
              src="https://i.pinimg.com/originals/8b/44/51/8b4451665d6b2139e29f29b51ffb1829.png"
            />
          </div>
        </div>
        <div className="form__right">
          <div className="form__padding-right">
            <form>
              <h1 className="form__title">Member Login</h1>
              <input className="form__email" type="text" placeholder="Email" onChange={(e) =>setUserName(e.target.value)} />
              <input
                className="form__password"
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******"
              />
              <input className="form__submit-btn" type="submit" onClick={handleSubmit} value="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
