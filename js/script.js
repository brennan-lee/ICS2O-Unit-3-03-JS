// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-3-03-JS/sw.js", {
    scope: "/ICS2O-Unit-3-03-JS/",
  })
}

/**
 * This function displays an alert.
 * Math
 */
function calculate() {
  // input
  const r = parseInt(document.getElementById("radius").value)

  // process
  const math = (4.0 / 3.0) * Math.PI * Math.pow(r, 3)
  // output
  document.getElementById("math").innerHTML =
    "The volume is: " + math.toFixed(2) + " units³"
}
