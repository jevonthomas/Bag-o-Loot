#!/usr/bin/env node

// *********************************

// Coded along with David B and Aspen

// ***********************************


const { assert: { equal, deepEqual, notEqual, isFunction, isObject, isString } } = require('chai');
const { addToy, getToy } = require('../lootbag');

describe('lootbag', () => {
  
  describe("add toy", () => {
    it('should exist', () => {
      isFunction(addToy);
    });
    it('should accept two strings as an argument',  () => {
      addToy("sonic", "jevon");
    })
  });
  
  describe('get toy', () => { 
    it('should exist', () => {
      isFunction(getToy);
    });  
    it('should return an object',  () => {
      return getToy("jevon")
      .then( (data) => {
        isObject(data);
      })
    })
  });

});
