// В файле NotFoundPage.jsx

import React from "react";
import NotFoundStyles from "./NotFoundStyles";

const NotFoundPage = () => {
  return (
    <NotFoundStyles.Container>
      <NotFoundStyles.Heading>404 - Not Found</NotFoundStyles.Heading>
      <NotFoundStyles.Description>
        Oops! The page you are looking for might be in another universe. In the
        meantime, feel free to explore the vastness of space or visit a galaxy
        far, far away.
      </NotFoundStyles.Description>
    </NotFoundStyles.Container>
  );
};

export default NotFoundPage;
