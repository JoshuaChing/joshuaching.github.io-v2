import * as React from "react";

const styles = require('./profileHeader.module.scss');

class ProfileHeader extends React.PureComponent {
    render(){
        return <div className={styles.headerText}>Joshua Ching</div>
    }
}

export default ProfileHeader;