import React, { useState, useEffect } from "react";
import AccessDeniedComponent from "./AccessDeniedComponent";
import axios from "axios";

const ProfileComponent = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    axios
      .get("https://gorder.website/API/user-profile.php?id=")
      .then((response) => {
        setProfileData(response.data);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made, but the server responded with a status code outside the range of 2xx
          console.log(
            "Data request failed with status code:",
            error.response.status
          );
        } else if (error.request) {
          // The request was made, but no response was received
          console.log("No response received from the server.");
        } else {
          // Something happened in setting up the request
          console.error("Error in making the request:", error.message);
        }
      });
  }, []);

  if (profileData === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {profileData.status == 200 ? (
        <div>
          <img src={profileData.data.picture} alt="Profile Picture"></img>
          <h1>{profileData.data.first_name + profileData.data.last_name}</h1>
        </div>
      ) : (
        <AccessDeniedComponent />
      )}
    </>
  );
};

export default ProfileComponent;
