#!/usr/bin/env node


const { assert: { equal, deepEqual, notEqual, isFunction, isObject, isString, isUndefined } } = require('chai');
const { addToy, getToy, removeToy, listChildren, setTrue } = require('../lootbag');

describe('lootbag', () => {
  // Items can be added to bag.
  describe("add toy", () => {
    it('should exist', () => {
      isFunction(addToy);
    });
    it('should accept two strings as an argument',  () => {
      addToy("Sword", "Leo");
      addToy("Bo", "Don");
      addToy("Sais", "Raph");
      addToy("Nunchucks", "Mike");
    })
  });
  
  // Must be able to list all toys for a given child's name.
  describe('get toy', () => { 
    it('should exist', () => {
      isFunction(getToy);
    });  
    it('should return an object',  () => {
      return getToy("Leo")
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
    it('should return an undefined object',  () => {
      return removeToy("Mike")
      .then( (data) => {
        isUndefined(data);
      })
    })
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
  //false = 0, true = 1
  describe('setTrue', () => { 
    it('should exist', () => {
      isFunction(setTrue);
    });
    it('should return a delivered property with the value of 1',  () => {
      return setTrue("Leo")
      .then( (data) => {
        deepEqual(data, {delivered: 1});
      })
    })
  });

});
