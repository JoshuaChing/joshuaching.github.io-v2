import * as React from "react";

const styles = require('./profileDescription.module.scss');

class ProfileDescription extends React.PureComponent {
    render() {
        return (
            <div className={styles.descriptionText}>
                Hi! I'm currently a software engineer at Microsoft. My background is Systems Design Engineering at the University of Waterloo, Canada.
            </div>
        )
    }
}

export default ProfileDescription;