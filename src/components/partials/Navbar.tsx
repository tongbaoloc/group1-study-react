import React from "react";
import navs from "../../store/navs.json";
import auth_navs from "../../store/auth_navs.json";
import logo from "../../assets/logo.png";
import { useRecoilState } from "recoil";
import { isAuthState, userState } from "../../store/RecoildStore";
export default function Navbar() {
  const [user, setUser] = useRecoilState(userState);
  const [isAuth, setIsAuth] = useRecoilState(isAuthState);
  return (
    <div className="container m-auto py-4 flex justify-between">
      <img src={logo} className="w-2/12 border-4 border-green-900"></img>
      <div className="flex justify-between w-10/12 ml-1">
        <div className="w-6/12  border-green-900 border-4 p-2 flex justify-around ">
          {navs &&
            navs.map((nav) => {
              return (
                <a key={nav.title}
                  className="bg-green-900 h-10 my-auto px-6 py-2 rounded-md"
                  href={nav.url}
                >
                  {nav.title}
                </a>
              );
            })}
        </div>
        <div className="w-3/12 border-4 border-green-900  flex justify-around  ">
            {isAuth && (
                <div className="my-auto">
                <p className="text-lg font-bold text-black"> Hi {user.username}</p>
             </div>
            )}
          {auth_navs &&
            auth_navs.map((nav) => {
              if (isAuth == nav.status)
                return (
                  <a key={nav.title}
                    className="bg-green-900 h-10 my-auto px-6 py-2 rounded-md"
                    href={nav.url}
                  >
                    {nav.title}
                  </a>
                );
            })}
        </div>
      </div>
    </div>
  );
}
