#!/usr/bin/env node

// *********************************

// Coded along with David B and Aspen

// ***********************************


const { assert: { equal, deepEqual, notEqual, isFunction, isObject } } = require('chai');
const { addToy } = require('../lootbag');

describe('add toy', () => {

    it('should exist', () => {
      isFunction(addToy);
    });

//     it('should return an number',  () => {
//       roll("1d6")
//       // .then( (diceTotal) => {
//       //   isNumber(diceTotal, "Hooray! It's diceTotal!")
//       // })
//   })

});
