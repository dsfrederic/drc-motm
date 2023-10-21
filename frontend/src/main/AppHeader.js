import Button from '@mui/material/Button';
import React from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useGameContext } from "../contexts/GameContext";
import { removeToken } from "./Helpers";

const AppHeader = () => {
  const { user } = useAuthContext();
  const { nav_value, changeNavValue } = useGameContext();

  const handleLogout = () => {
    removeToken();
    changeNavValue("signin");
  };

  return (
    <div className="header_space">
      <Button variant="text" href="/" type="link">
        HOME
      </Button>
      <div>
        {user ? (
          <>
            <Button variant="text" href="/profile" type="link">
              {user.username}
            </Button>
            <Button
              variant="text" 
              type="primary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button variant="text" href="/signin" type="link">
              Login
            </Button>
            <Button
              variant="text" 
              href="/signup"
              type="primary"
            >
              SignUp
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default AppHeader;