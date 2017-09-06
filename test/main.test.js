#!/usr/bin/env node

// *********************************

// Coded along with David B and Aspen

// ***********************************


const { assert: { equal, deepEqual, notEqual, isFunction, isObject, isString } } = require('chai');
const { addToy, getToy, removeToy, listChildren, setTrue } = require('../lootbag');

describe('lootbag', () => {
  // Items can be added to bag.
  describe("add toy", () => {
    it('should exist', () => {
      isFunction(addToy);
    });
    it('should accept two strings as an argument',  () => {
      addToy("nunchucks", "jevon");
    })
  });
  
  // Must be able to list all toys for a given child's name.
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
  
  // Items can be removed from bag, per child only. Removing ball from the bag should not be allowed. A child's name must be specified.
  describe('removeToy', () => { 
    it('should exist', () => {
      isFunction(removeToy);
    });
  });

  // Must be able to list all children who are getting a toy.
  describe('listChildren', () => { 
    it('should exist', () => {
      isFunction(listChildren);
    });
    it('should return an object',  () => {
      return listChildren()
      .then( (data) => {
        isObject(data);
      })
    })
  });

  // Must be able to set the delivered property of a child, which defaults to false, to true.
  describe('setTrue', () => { 
    it('should exist', () => {
      isFunction(setTrue);
    });
  });

});
