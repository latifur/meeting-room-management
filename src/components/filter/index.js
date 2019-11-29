import React from "react";
import { useDispatch } from "react-redux";
import { SelectCapacity } from "../../redux/action/roomActions";

function Filter() {
  const dispatch = useDispatch();
  function handleChange(e) {
    const ChangedValue = e.target.value;
    console.log("changed", ChangedValue);
    dispatch(SelectCapacity(ChangedValue));
  }
  return (
    <div className="shadow-1 p-3 mb-5 bg-light">
      <div className="row">
        <div className="col-md-3">
          <select
            className="form-control"
            onChange={e => handleChange(e)}
            defaultValue=""
          >
            <option value="">Any Capacity</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
