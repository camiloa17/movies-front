import { Component, For, Index, JSX } from "solid-js";


type Options = {value: string | number, label: string}[]

type Props = {
  name: string
  title: string
  class: string
  options: Options
  ref?: any
  placeholder?: string
  onChange: JSX.ChangeEventHandlerUnion<HTMLSelectElement, Event>
  value: string
  errorDiv?: string
  errorMsg?: string
}

const Select: Component<Props> = (props) => {
    return (
        <div class="mb-3">
            <label for={props.name} class="form-label">
                {props.title}
            </label>
            <select
                class={`form-select ${props.class}`}
                id={props.name}
                ref={props.ref}
                name={props.name}
                onChange={props.onChange}
                value={props.value}
            >
              <option value='' >{props.placeholder}</option>
              <Index each={props.options}>
                {(opt)=> (
                  <option value={opt().value}>{opt().label}</option>
                )}
              </Index>
            </select>
            <div class={props.errorDiv}>{props.errorMsg}</div>
        </div>
    )
}

export default Select;