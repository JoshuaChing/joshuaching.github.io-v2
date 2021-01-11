import * as React from "react";
import { Link } from "gatsby";

require('./app.module.scss');

const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <Link to="/">Go home</Link>.
    </main>
  )
}

export default NotFoundPage;
