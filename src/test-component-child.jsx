export function TestComponentChild(props) {
  console.log(props)

  props.addTask();
  props.resetInput();
  props.addWithReset();

  return <div>{props.text}</div>
}