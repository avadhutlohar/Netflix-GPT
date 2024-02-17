import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { logo } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
      <img className="w-44 mx-auto md:mx-0 " src={logo} alt="logo" />
      <div className="flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </div>
      {user && (
        <div className={`flex p-2 justify-between ${isMobileMenuOpen ? 'flex-col items-start md:flex-row' : 'hidden md:flex'}`}>
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="p-2 m-2 bg-gray-900 text-white"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="py-2 px-4 mx-4 my-2   bg-purple-700 text-white rounded-lg "
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <div className="md:flex items-center">
            <img
              className="hidden md:block w-12 h-12 rounded-md"
              src={user.photoURL}
              alt="usericon"
            />
            <button onClick={handleSignOut} className="font-bold text-white ml-1">
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
