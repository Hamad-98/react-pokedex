export default function Select(props) {
  return (
    <div>
      <select onChange={props.handleChange}>{props.children}</select>
    </div>
  );
}
