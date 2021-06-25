import "bootstrap/dist/css/bootstrap.min.css";
function Table(prop) {
  return (
    <tr>
      <th scope="row">
        <img className="picActor" src={prop.pictureUrl} />
      </th>

      <td>{prop.name}</td>
      <td>{prop.popularity}</td>
    </tr>
  );
}

export default Table;
