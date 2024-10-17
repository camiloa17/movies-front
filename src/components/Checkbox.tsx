import { Component, JSX } from "solid-js";


type Props = {
  name: string
  title: string
  checked: boolean
  class: string
  ref?: any
  placeholder?: string
  onChange: JSX.ChangeEventHandlerUnion<HTMLInputElement, Event>
  value: string
}

const Checkbox: Component<Props> = (props) => {
    return (
        <div class="form-check">
            <input
                class={`form-check-input ${props.class}`}
                type='checkbox'
                id={props.name}
                ref={props.ref}
                name={props.name}
                onChange={props.onChange}
                value={props.value}
                checked={props.checked}
            />
            <label for={props.name} class="form-check-label">
                {props.title}
            </label>
        </div>
    )
}

export default Checkbox;