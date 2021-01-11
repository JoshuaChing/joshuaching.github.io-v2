import * as React from "react";
import Header from "../header/header";

const styles = require('./experienceContainer.module.scss');

// container responsible for all experience related components
class ExperienceContainer extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <Header text="Experience"></Header>
                <table className={styles.table}>
                    <tr>
                        <th>Microsoft</th>
                        <th>Software Engineer</th>
                        <th>2018 (Current)</th>
                    </tr>
                    <tr className={styles.subRow}>
                        <th></th>
                        <th>Xbox Family Safety Team</th>
                        <th></th>
                    </tr>
                    <tr className={styles.subRow}>
                        <th></th>
                        <th>Mixer.com Team</th>
                        <th></th>
                    </tr>

                    <tr>
                        <th>Yelp</th>
                        <th>Software Engineer Intern</th>
                        <th>2017</th>
                    </tr>

                    <tr>
                        <th>Yelp</th>
                        <th>Software Engineer Intern</th>
                        <th>2016</th>
                    </tr>

                    <tr>
                        <th>Shopify</th>
                        <th>Software Developer Intern</th>
                        <th>2016</th>
                    </tr>

                    <tr>
                        <th>Zynga</th>
                        <th>Software Engineer Intern</th>
                        <th>2015</th>
                    </tr>
                </table>
            </div>
        )
    }
}

export default ExperienceContainer;