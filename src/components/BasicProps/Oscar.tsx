import React from "react";

type OscarProps = {
  // type for mentioning components as type
  children: React.ReactNode;
};

const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};
export default Oscar;
