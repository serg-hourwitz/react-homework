function Buttons(props) {
  return (
    <div>
      <button onClick={() => props.addTask()}>add item</button>

      <button onClick={() => props.resetInput()}>reset inputValue</button>

      <button
        onClick={() => {
          props.addTask();
          props.resetInput();
        }}
      >
        add + reset
      </button>
    </div>
  );
}

export default Buttons;
