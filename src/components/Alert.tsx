import { Component } from "solid-js";

type Props = {
  class: string,
  message: string
}

const Alert: Component<Props> = (props) => {
  return(
      <div class={"alert " + props.class} role="alert">
          {props.message}
      </div>
  )
}

export default Alert;