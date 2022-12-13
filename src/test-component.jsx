import { TestComponentChild } from "./test-component-child";

export default function TestComponent() {

  function addTask() {
  }

  function resetInput() {
  }

  function addWithReset() {
  }

  return (
    <>
      <TestComponentChild addTask={addTask} resetInput={resetInput} addWithReset={addWithReset} text={"test text"} />
    </>
  )
}