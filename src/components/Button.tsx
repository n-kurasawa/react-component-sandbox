import * as React from "react";

type BtnName = "btn-secondary" | "btn-primary"
type Props = {
  name: BtnName
}

const Button: React.FC<Props> = ({ name, children }) => {
  return <button className={`btn btn-space ${name}`}>{children}</button>
}

function SecondaryBtn({children}) {
  return <Button name="btn-secondary">{children}</Button>
}

export {
  Button,
  SecondaryBtn
};