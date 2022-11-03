// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: nov 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates volume of sphere.
 */
function calculate() {
  // input
  const radius = parseFloat(document.getElementById("radius-of-sphere").value)

  // process
  const volume = (4 / 3) * Math.PI * radius ** 3

  // output
  document.getElementById("volume").innerHTML =
    "volume is: " + volume.toFixed(2) + " mm³"
}
