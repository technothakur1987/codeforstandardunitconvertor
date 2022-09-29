import React from "react";

export default function Length(props) {
  return (
    <div className="length">
      <div className="lengthMain border ps-5 pe-5 pt-5 pb-5">
        <div className=" row units p-2 ">
          <div className="col-6 ">
            <span>From</span>
            <span>
              <select className="form-select "  id="formSelect" aria-label="Default select example">
                <option defaultValue>Open this select menu</option>
                <option value="1">kilometre</option>
                <option value="2">Hectometre</option>
                <option value="3">Decametre</option>
                <option value="4">Metre</option>
                <option value="5">Decimetre</option>
                <option value="6">Centimetre</option>
                <option value="7">millimeter</option>
              </select>
            </span>
          </div>
          <div className="col-6 ">
            <span>To</span>
            <span>
            <select className="form-select" id="toSelect" aria-label="Default select example">
                <option defaultValue>Open this select menu</option>
                <option value="1">kilometre</option>
                <option value="2">Hectometre</option>
                <option value="3">Decametre</option>
                <option value="4">Metre</option>
                <option value="5">Decimetre</option>
                <option value="6">Centimetre</option>
                <option value="7">millimeter</option>
              </select>
            </span>
          </div>
        </div>
        <div className=" row values p-2">
          <div className="col-6 ">
            <span>values</span>
            <span>
              <input
                type="number"
                id="lengthunit"
                name="quantity"
                min="1"
                max="99999999999999999999"
              />
            </span>
          </div>
          <div className="col-6 ">
            <span className="resultBtn  " onClick={props.resultFunc}>Result</span>
            <span id="showResult">----</span>
          </div>
        </div>
      </div>
    </div>
  );
}
