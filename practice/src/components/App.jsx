import React from "react";
import cars from '../cars';

console.log(cars);

const [Tesla,BMW,Ford] = cars;

const {
  brand : TeslaBrand,
  model : TeslaModel,
  specifications:{
    year : TeslaYear,
    engine : TeslaEngine
  }
} = Tesla;

const {
  brand : BMWBrand,
  model : BMWModel,
  specifications:{
    year : BMWYear,
    engine : BMWEngine
  }
 } = BMW;


const {
  brand : FordBrand,
  model: FordModel,
  specifications:{
    year: FordYear,
    engine : FordEngine
  }
} = Ford;


function App() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Specifications</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{TeslaBrand}</td>
                    <td>{TeslaModel}</td>
                    <td>
                        <div className="specification">
                            <div className="spec-heading">Year:</div>
                            <div>{TeslaYear}</div>
                            <div className="spec-heading">Engine:</div>
                            <div>{TeslaEngine}</div>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>{BMWBrand}</td>
                    <td>{BMWModel}</td>
                    <td>
                        <div className="specification">
                            <div className="spec-heading">Year:</div>
                            <div>{BMWYear}</div>
                            <div className="spec-heading">Engine:</div>
                            <div>{BMWEngine}</div>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>{FordBrand}</td>
                    <td>{FordModel}</td>
                    <td>
                        <div className="specification">
                            <div className="spec-heading">Year:</div>
                            <div>{FordYear}</div>
                            <div className="spec-heading">Engine:</div>
                            <div>{FordEngine}</div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default App;
