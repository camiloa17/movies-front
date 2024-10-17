import { Component, JSX } from "solid-js";

type Props = {
  name: string
  title: string
  type: string
  class: string
  cols: number
  rows: number
  ref?: any
  placeholder?: string
  onChange: JSX.ChangeEventHandlerUnion<HTMLTextAreaElement, Event>
  autoComplete: string
  value: string
  errorDiv?: string
  errorMsg?: string
}

const TextArea: Component<Props> = (props) => {
    return (
        <div class="mb-3">
            <label for={props.name} class="form-label">
                {props.title}
            </label>
            <textarea
                class={props.class}
                id={props.name}
                ref={props.ref}
                name={props.name}
                placeholder={props.placeholder}
                cols={props.cols}
                rows={props.rows}
                onChange={props.onChange}
                autocomplete={props.autoComplete}
                value={props.value}
            />
            <div class={props.errorDiv}>{props.errorMsg}</div>
        </div>
    )
}

export default TextArea;