/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["arky", "vildred", "Straze", "Iseria"];
  let what = ["ate", "stole", "destroyed", "restored"];
  let whatelse = ["cookies", "fear", "the town", "the world"];
  let where = ["from home", "from us", "from them", "from change"];

  let who1 = who[Math.floor(Math.random() * 4)];
  let what1 = what[Math.floor(Math.random() * 4)];
  let whatelse1 = whatelse[Math.floor(Math.random() * 4)];
  let where1 = where[Math.floor(Math.random() * 4)];

  console.log(who1 + " " + what1 + " " + whatelse1 + " " + where1);
};
