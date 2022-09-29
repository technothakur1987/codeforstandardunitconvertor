
import './App.css';

import MainHeader from './components/MainHeader';
import Length from './components/Length';
import Area from './components/Area';
import Temperature from './components/Temperature';
import Time from './components/Time';
import Volume from './components/Volume';
import Weight from './components/Weight';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function resultFunc(){
  /*norms
  1. kilmeter
  2. hectometer
  3. decameter
  4. meter
  5. decimeter
  6. centimeter
  7. millimeter
  */
  
   //getting the values of formselect and toselect
  var select1 = document.getElementById('formSelect');
  var value1 = select1.options[select1.selectedIndex].value;
  
  var select2 = document.getElementById('toSelect');
  var value2 = select2.options[select2.selectedIndex].value;
  
  var lengthunit=document.getElementById('lengthunit').value;
  
  (value1==1 && value2==1) ? document.getElementById('showResult').innerText = (lengthunit*1).toFixed(2)+ " kilometer" : console.log("false");
  (value1==1 && value2==2) ? document.getElementById('showResult').innerText = (lengthunit*10).toFixed(2)+" hectometer" : console.log("false");
  (value1==1 && value2==3) ? document.getElementById('showResult').innerText = (lengthunit*100).toFixed(2)+" decameter" : console.log("false");
  (value1==1 && value2==4) ? document.getElementById('showResult').innerText = (lengthunit*1000).toFixed(2)+" meter" : console.log("false");
  (value1==1 && value2==5) ? document.getElementById('showResult').innerText = (lengthunit*10000).toFixed(2)+" decimeter" : console.log("false");
  (value1==1 && value2==6) ? document.getElementById('showResult').innerText = (lengthunit*100000).toFixed(2)+" centimeter" : console.log("false");
  (value1==1 && value2==7) ? document.getElementById('showResult').innerText = (lengthunit*1000000).toFixed(2)+" millimeter" : console.log("false");

  (value1==2 && value2==1) ? document.getElementById('showResult').innerText = (lengthunit/10).toFixed(3)+" kilometer" : console.log("false"); 
  (value1==2 && value2==2) ? document.getElementById('showResult').innerText = (lengthunit).toFixed(3) +" hectometer" : console.log("false");
  (value1==2 && value2==3) ? document.getElementById('showResult').innerText = (lengthunit*10).toFixed(3) +" decameter" : console.log("false");
  (value1==2 && value2==4) ? document.getElementById('showResult').innerText = (lengthunit*100).toFixed(3) +" meter" : console.log("false");
  (value1==2 && value2==5) ? document.getElementById('showResult').innerText = (lengthunit*1000).toFixed(3) +" decimeter" : console.log("false");
  (value1==2 && value2==6) ? document.getElementById('showResult').innerText = (lengthunit*10000).toFixed(3) +" centimeter" : console.log("false");
  (value1==2 && value2==7) ? document.getElementById('showResult').innerText = (lengthunit*100000).toFixed(3) +" millimeter" : console.log("false");

  (value1==3 && value2==1) ? document.getElementById('showResult').innerText = (lengthunit/100).toFixed(3) +" kilometer" : console.log("false");
  (value1==3 && value2==2) ? document.getElementById('showResult').innerText = (lengthunit/10).toFixed(3) +" hectometer" : console.log("false");
  (value1==3 && value2==3) ? document.getElementById('showResult').innerText = (lengthunit/1).toFixed(3) +" decameter" : console.log("false");
  (value1==3 && value2==4) ? document.getElementById('showResult').innerText = (lengthunit*10).toFixed(3) +" meter" : console.log("false");
  (value1==3 && value2==5) ? document.getElementById('showResult').innerText = (lengthunit*100).toFixed(3) +" decimeter" : console.log("false");
  (value1==3 && value2==6) ? document.getElementById('showResult').innerText = (lengthunit*1000).toFixed(3) +" centimeter" : console.log("false");
  (value1==3 && value2==7) ? document.getElementById('showResult').innerText = (lengthunit*10000).toFixed(3) +" millimeter" : console.log("false");

  (value1==4 && value2==1) ? document.getElementById('showResult').innerText = (lengthunit/1000).toFixed(3) +" kilometer" : console.log("false");
  (value1==4 && value2==2) ? document.getElementById('showResult').innerText = (lengthunit/100).toFixed(3) +" hectometer" : console.log("false");
  (value1==4 && value2==3) ? document.getElementById('showResult').innerText = (lengthunit/10).toFixed(3) +" decameter" : console.log("false");
  (value1==4 && value2==4) ? document.getElementById('showResult').innerText = (lengthunit*1).toFixed(3) +" meter" : console.log("false");
  (value1==4 && value2==5) ? document.getElementById('showResult').innerText = (lengthunit*10).toFixed(3) +" decimeter" : console.log("false");
  (value1==4 && value2==6) ? document.getElementById('showResult').innerText = (lengthunit*100).toFixed(3) +" centimeter" : console.log("false");
  (value1==4 && value2==7) ? document.getElementById('showResult').innerText = (lengthunit*1000).toFixed(3) +" millimeter" : console.log("false");
   
  (value1==5 && value2==1) ? document.getElementById('showResult').innerText = (lengthunit/10000).toFixed(3) +" kilometer" : console.log("false");
  (value1==5 && value2==2) ? document.getElementById('showResult').innerText = (lengthunit/1000).toFixed(3) +" hectometer" : console.log("false");
  (value1==5 && value2==3) ? document.getElementById('showResult').innerText = (lengthunit/100).toFixed(3) +" decameter" : console.log("false");
  (value1==5 && value2==4) ? document.getElementById('showResult').innerText = (lengthunit/10).toFixed(3) +" meter" : console.log("false");
  (value1==5 && value2==5) ? document.getElementById('showResult').innerText = (lengthunit*1).toFixed(3) +" decimeter" : console.log("false");
  (value1==5 && value2==6) ? document.getElementById('showResult').innerText = (lengthunit*10).toFixed(3) +" centimeter" : console.log("false");
  (value1==5 && value2==7) ? document.getElementById('showResult').innerText = (lengthunit*100).toFixed(3) +" millimeter" : console.log("false");
   
  (value1==6 && value2==1) ? document.getElementById('showResult').innerText = (lengthunit/100000).toFixed(3) +" kilometer" : console.log("false");
  (value1==6 && value2==2) ? document.getElementById('showResult').innerText = (lengthunit/10000).toFixed(3) +" hectometer" : console.log("false");
  (value1==6 && value2==3) ? document.getElementById('showResult').innerText = (lengthunit/1000).toFixed(3) +" decameter" : console.log("false");
  (value1==6 && value2==4) ? document.getElementById('showResult').innerText = (lengthunit/100).toFixed(3) +" meter" : console.log("false");
  (value1==6 && value2==5) ? document.getElementById('showResult').innerText = (lengthunit/10).toFixed(3) +" decimeter" : console.log("false");
  (value1==6 && value2==6) ? document.getElementById('showResult').innerText = (lengthunit/1).toFixed(3) +" centimeter" : console.log("false");
  (value1==6 && value2==7) ? document.getElementById('showResult').innerText = (lengthunit*10).toFixed(3) +" millimeter" : console.log("false");

  
}

function resultTempFunc(){
  console.log("Converting Temperatures")
   /*norms
  1. Fahrenheit
  2. Rankine
  3. Celsius
  4. Centigrade
  5. Kelvin
  
  */

  //getting the values of formselect and toselect
  var selectTemp1 = document.getElementById('formTempSelect');
  var valueTemp1 = selectTemp1.options[selectTemp1.selectedIndex].value;
  console.log("formTempSelect"+ valueTemp1);
  var selectTemp2 = document.getElementById('toTempSelect');
  var valueTemp2 = selectTemp2.options[selectTemp2.selectedIndex].value;
  console.log("toTempselect"+ valueTemp2);
  var Temperatureunit=document.getElementById('Temperatureunit').value;
  console.log("Temperatureunit"+Temperatureunit);

  var rankineTemp = 459.67;
  

  (valueTemp1==1 && valueTemp2==1) ? document.getElementById('showTempResult').innerText = Temperatureunit*1+ " Fahrenheit" : console.log("false");
  (valueTemp1==1 && valueTemp2==2) ? document.getElementById('showTempResult').innerText = parseFloat(Temperatureunit) + parseFloat(rankineTemp)+ " Rankine" : console.log("false");
  (valueTemp1==1 && valueTemp2==3) ? document.getElementById('showTempResult').innerText = (((parseFloat(Temperatureunit)-32)*5)/9).toFixed(2) +" Celsius" : console.log("false");
  (valueTemp1==1 && valueTemp2==4) ? document.getElementById('showTempResult').innerText = (((parseFloat(Temperatureunit)-32)*5)/9).toFixed(2) +" Centigrade" : console.log("false");
  (valueTemp1==1 && valueTemp2==5) ? document.getElementById('showTempResult').innerText = (((parseFloat(Temperatureunit)-32)*5)/9).toFixed(2) +" Kelvin" : console.log("false");
  
  (valueTemp1==2 && valueTemp2==1) ? document.getElementById('showTempResult').innerText = parseFloat(Temperatureunit) - parseFloat(rankineTemp)+ " Fahrenheit" : console.log("false");
  (valueTemp1==2 && valueTemp2==2) ? document.getElementById('showTempResult').innerText = parseFloat(Temperatureunit) *1+ " Rankine" : console.log("false");
  (valueTemp1==2 && valueTemp2==3) ? document.getElementById('showTempResult').innerText = (((parseFloat(Temperatureunit)-491.67)*5)/9).toFixed(2) +" Celsius" : console.log("false");
  (valueTemp1==2 && valueTemp2==4) ? document.getElementById('showTempResult').innerText = (((parseFloat(Temperatureunit)-491.67)*5)/9).toFixed(2) +" Centigrade" : console.log("false");
  (valueTemp1==2 && valueTemp2==5) ? document.getElementById('showTempResult').innerText = (((parseFloat(Temperatureunit)-0)*5)/9).toFixed(2) +" Kelvin" : console.log("false");
   
  (valueTemp1==3 && valueTemp2==1) ? document.getElementById('showTempResult').innerText = ((parseFloat(Temperatureunit)*9)/5)+32 + " Fahrenheit" : console.log("false");
  (valueTemp1==3 && valueTemp2==2) ? document.getElementById('showTempResult').innerText = (((parseFloat(Temperatureunit)*9)/5)+491.47).toFixed(2)+ " Rankine" : console.log("false");
  (valueTemp1==3 && valueTemp2==3) ? document.getElementById('showTempResult').innerText = (((parseFloat(Temperatureunit)-0)*1)/1).toFixed(2) +" Celsius" : console.log("false");
  (valueTemp1==3 && valueTemp2==4) ? document.getElementById('showTempResult').innerText = (((parseFloat(Temperatureunit)-0)*1)/1).toFixed(2) +" Centigrade" : console.log("false");
  (valueTemp1==3 && valueTemp2==5) ? document.getElementById('showTempResult').innerText = (((parseFloat(Temperatureunit)+273.15)*1)/1).toFixed(2) +" Kelvin" : console.log("false");
  
  (valueTemp1==4 && valueTemp2==1) ? document.getElementById('showTempResult').innerText = ((parseFloat(Temperatureunit)*9)/5)+32 + " Fahrenheit" : console.log("false");
  (valueTemp1==4 && valueTemp2==2) ? document.getElementById('showTempResult').innerText = (((parseFloat(Temperatureunit)*9)/5)+491.47).toFixed(2)+ " Rankine" : console.log("false");
  (valueTemp1==4 && valueTemp2==3) ? document.getElementById('showTempResult').innerText = (((parseFloat(Temperatureunit)-0)*1)/1).toFixed(2) +" Celsius" : console.log("false");
  (valueTemp1==4 && valueTemp2==4) ? document.getElementById('showTempResult').innerText = (((parseFloat(Temperatureunit)-0)*1)/1).toFixed(2) +" Centigrade" : console.log("false");
  (valueTemp1==4 && valueTemp2==5) ? document.getElementById('showTempResult').innerText = (((parseFloat(Temperatureunit)+273.15)*1)/1).toFixed(2) +" Kelvin" : console.log("false");
  
  (valueTemp1==5 && valueTemp2==1) ? document.getElementById('showTempResult').innerText = (((parseFloat(Temperatureunit)-273.15)*9)/5)+32 + " Fahrenheit" : console.log("false");
  (valueTemp1==5 && valueTemp2==2) ? document.getElementById('showTempResult').innerText = (((parseFloat(Temperatureunit)*1.8)/1)+0).toFixed(2)+ " Rankine" : console.log("false");
  (valueTemp1==5 && valueTemp2==3) ? document.getElementById('showTempResult').innerText = (((parseFloat(Temperatureunit)-273.15)*1)/1).toFixed(2) +" Celsius" : console.log("false");
  (valueTemp1==5 && valueTemp2==4) ? document.getElementById('showTempResult').innerText = (((parseFloat(Temperatureunit)-273.15)*1)/1).toFixed(2) +" Centigrade" : console.log("false");
  (valueTemp1==5 && valueTemp2==5) ? document.getElementById('showTempResult').innerText = (((parseFloat(Temperatureunit)+0)*1)/1).toFixed(2) +" Kelvin" : console.log("false");

  

}


function App() {
  return (
    <BrowserRouter>
    < MainHeader/>
    <div className="navHeader">
      <ul>
        <li>
          <Link to="/length"> Length</Link>
        </li>
        <li>
          <Link to="/temperature"> Temperature</Link>
        </li>
        <li>
          <Link to="/area">Area</Link>
        </li>
        <li>
          <Link to="/volume"> Volume</Link>
        </li>
        <li>
          <Link to="/weight"> Weight</Link>
        </li>
        <li>
          <Link to="/time"> Time</Link>
        </li>
      </ul>
    </div>
    <Routes>
    <Route path="/length" element={<Length resultFunc={resultFunc} />}/>
    <Route path="/temperature" element={<Temperature  resultTempFunc={resultTempFunc}/>}/>
    <Route path="/area" element={<Area />}/>
    <Route path="/volume" element={<Volume />}/>
    <Route path="/weight" element={<Weight />}/>
    <Route path="/time" element={<Time />}/>
    </Routes>
    </BrowserRouter>
    
  );
  
}

export default App;
