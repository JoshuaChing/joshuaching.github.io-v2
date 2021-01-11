import * as React from "react";

const pictureUrl = require('../../../images/profile.jpg');
const styles = require('./profilePicture.module.scss');

class ProfilePicture extends React.PureComponent {
    render(){
        return <img src={pictureUrl} className={styles.picture}></img>
    }
}

export default ProfilePicture;