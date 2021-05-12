// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Maryam Nona
// Created on: May 2021
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets users street name and street number and shows it back to the user

  // input
  const streetNumber = parseInt(document.getElementById('street-entered').value)
  const streetName = document.getElementById('street-name').value

  // output
document.getElementById('address').innerHTML = 'Your info is: ' + streetNumber + ' ' + streetName + '.'
}