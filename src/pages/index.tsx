import * as React from "react";
import ProfileContainer from "../components/profile/profileContainer";

require('./app.module.scss');

const IndexPage = () => {
  return (
    <main>
      <title>Joshua Ching</title>
      <ProfileContainer></ProfileContainer>
    </main>
  )
}

export default IndexPage;