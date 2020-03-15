import React from "react";
const Wrapper = React.memo(({ children }) => {
  return <div className = "app-margin">{children}</div>;
});
export default Wrapper;
