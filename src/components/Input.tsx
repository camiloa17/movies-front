import { Component, JSX } from "solid-js";

type Props = {
  name: string
  title: string
  type: string
  class: string
  ref: any
  placeholder: string
  onChange: JSX.ChangeEventHandlerUnion<HTMLInputElement, Event>
  autoComplete: string
  value: string
  errorDiv: string
  errorMsg: string
}

const Input: Component<Props> = (props) => {
    return (
        <div class="mb-3">
            <label for={props.name} class="form-label">
                {props.title}
            </label>
            <input
                type={props.type}
                class={props.class}
                id={props.name}
                ref={props.ref}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
                autocomplete={props.autoComplete}
                value={props.value}
            />
            <div class={props.errorDiv}>{props.errorMsg}</div>
        </div>
    )
}

export default Input;