import * as React from "react";
import ProfileDescription from "./profileDescription/profileDescription";
import ProfileHeader from "./profileHeader/profileHeader";
import ProfilePicture from "./profilePicture/profilePicture";

// container responsible for all profile related components
class ProfileContainer extends React.Component {
    render() {
        return (
            <div>
                <ProfilePicture></ProfilePicture>
                <ProfileHeader></ProfileHeader>
                <ProfileDescription></ProfileDescription>
            </div>
        )
    }
}

export default ProfileContainer;