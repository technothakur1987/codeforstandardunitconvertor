import React from 'react'

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div className="TemperatureMain border ps-5 pe-5 pt-5 pb-5">
        <div className=" row Temperatureunits p-2 ">
          <div className="col-6 ">
            <span>From</span>
            <span>
              <select className="form-select "  id="formTempSelect" aria-label="Default select example">
                <option defaultValue>Open this select menu</option>
                <option value="1">Fahrenheit</option>
                <option value="2">Rankine</option>
                <option value="3">Celsius</option>
                <option value="4">Centigrade</option>
                <option value="5">Kelvin</option>
              </select>
            </span>
          </div>
          <div className="col-6 ">
            <span>To</span>
            <span>
            <select className="form-select" id="toTempSelect" aria-label="Default select example">
                <option defaultValue>Open this select menu</option>
                <option value="1">Fahrenheit</option>
                <option value="2">Rankine</option>
                <option value="3">Celsius</option>
                <option value="4">Centigrade</option>
                <option value="5">Kelvin</option>
            </select>
            </span>
          </div>
        </div>-
        <div className=" row Temperaturevalues p-2">
          <div className="col-6 ">
            <span>values</span>
            <span>
              <input
                type="number"
                id="Temperatureunit"
                name="quantity"
                min="1"
                max="99999999999999999999"
              />
            </span>
          </div>
          <div className="col-6 ">
            <span className="resultTempBtn  " onClick={props.resultTempFunc}>Result</span>
            <span id="showTempResult">----</span>
          </div>
        </div>
      </div>
    </div>
  )
}
