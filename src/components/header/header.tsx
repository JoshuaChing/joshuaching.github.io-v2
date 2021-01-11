import * as React from 'react';

const styles = require('./header.module.scss');

interface IProps {
    text: string;
}

class Header extends React.PureComponent<IProps> {
    render() {
        return <div className={styles.header}>{this.props.text}</div>
    }
}

export default Header;