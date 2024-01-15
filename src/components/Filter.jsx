import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useSelector } from "react-redux";

function Filter({ setFiltred }) {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Filter">
        <Dropdown.Item
          onClick={() => {
            const data = todos.filter((e) => {
              return e.done == true;
            });
            setFiltred(data);
          }}
        >
          Done
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            const data = todos.filter((e) => {
              return !e.done == true;
            });
            setFiltred(data);
          }}
        >
          Not yet
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setFiltred([]);
          }}
        >
          All
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default Filter;
