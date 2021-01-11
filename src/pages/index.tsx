import * as React from "react";
import ExperienceContainer from "../components/experience/experienceContainer";
import ProfileContainer from "../components/profile/profileContainer";

require('./app.module.scss');

const IndexPage = () => {
  return (
    <main>
      <title>Joshua Ching</title>
      <ProfileContainer></ProfileContainer>
      <ExperienceContainer></ExperienceContainer>
    </main>
  )
}

export default IndexPage;