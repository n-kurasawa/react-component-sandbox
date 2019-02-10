import * as React from "react";
import { Button, SecondaryBtn } from "./components/Button"

export default function App() {
  return (
    <div>
      <Button name="btn-primary">ボタン</Button>
      <SecondaryBtn>secondary</SecondaryBtn>
    </div>
  )
}
