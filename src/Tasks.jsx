function Tasks(props) {

  const result = props.tasks.map((task, index) => {
    return (
      <div className="result" key={index}>
        <p
          style={{ color: props.colors[index] }}
          contentEditable="true"
          key={index}
        >
          {task}{" "}
        </p>
        <button className="delete_item" onClick={() => props.deleteTask(index)}>
          x
        </button>
        <select
          value={props.colors[index]}
          onChange={(event) =>
            props.setColors({ ...props.colors, [index]: event.target.value })
          }
        >
          {props.colorOptions.map((text, index) => {
            return <option key={index}>{text}</option>;
          })}
        </select>
      </div>
    );
  });

  return <>
    {result}
  </>
}

export default Tasks;
