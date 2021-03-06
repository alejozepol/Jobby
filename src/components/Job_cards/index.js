import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style/index.scss";
import location from "./assets/location.svg";
import building from "./assets/building.svg";
import money from "./assets/money.svg";
import target from "./assets/target.svg";

class index extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div className="card_container">
        <h2>Data Science</h2>
        <section className="card-aspects__container">
          <ul>
            <li>
              <span>
                <img src={location} alt="location" /> New York, NY
              </span>
            </li>
            <li>
              <span>
                <img src={building} alt="building" /> Vera Institute of justice
                3.2
              </span>
            </li>
            <li>
              <span>
                <img src={money} alt="money" /> $37K-$66K (Glassdoor est.)
              </span>
            </li>
            <li>
              <span>
                <img src={target} alt="target" /> 3.2
              </span>
            </li>
          </ul>
        </section>
        <h5>
          Are you eager to roll up your sleeves and harness data to drive policy
          change? Do you enjoy sifting ...
        </h5>
        <Link className="text-reset text-decoration-none" to={`/job/1`}>
          <button>More...</button>
        </Link>
      </div>
    );
  }
}

export default index;
