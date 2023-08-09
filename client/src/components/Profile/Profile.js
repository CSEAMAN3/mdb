import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

import "./Profile.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="user-info">
        <img className="user-img" src={user.picture} alt={user.name} />
        <div className="user-container">
          <h2 className="userInfo">{user.name}</h2>
          <p className="userInfo">{user.email}</p>
        </div>
      </div>
    )
  );
};

export default Profile;
