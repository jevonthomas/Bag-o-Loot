#!/usr/bin/env node

"use strict";

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag-o-loot.sqlite', (err) => {});

// Code from in class examples
let createTables = () => {
  db.run(`DROP TABLE IF EXISTS lootbag`)
  .run(
    `CREATE TABLE IF NOT EXISTS lootbag (
    child_id INTEGER PRIMARY KEY AUTOINCREMENT, toy TEXT, child TEXT, delivered INTEGER)`
    )
};

createTables();

module.exports.addToy = (toy, child) => {
  db.run(`INSERT INTO lootbag VALUES (null, "${toy}", "${child}", 0)`);
};

module.exports.getToy = (childRecepient) => { 
    return new Promise ( (resolve, reject) => {
    db.get(`SELECT toy FROM lootbag WHERE child = "${childRecepient}"`, (err, toy) => {
        if (err) {
          console.log(err.toString())
          reject( err );
        }
        console.log('toy?', toy);
        resolve(toy);
      });
    });
};


// Must be able to list all children who are getting a toy.
module.exports.listChildren = () => {
  return new Promise ( (resolve, reject) => {
    db.get(`SELECT child FROM lootbag WHERE toy IS NOT NULL`, (err, children) => {
      if (err) {
        console.log(err.toString())
        reject( err );
      }
      console.log('Good Kids', children);
      resolve(children);
    });
  })
};

// Must be able to set the delivered property of a child, which defaults to false to true.
module.exports.setTrue = (child) => {
  return new Promise ( (resolve, reject) => {
    db.get(`UPDATE lootbag SET delivered = 1 WHERE child = "${child}"`)
    .get(`SELECT delivered FROM lootbag WHERE child = "${child}"`, (err, children) => {
      if (err) {
        console.log(err.toString())
        reject( err );
      }
      console.log('Good Kids', children);
      resolve(children);
    });
  })
};

// Items can be removed from bag, per child only. Removing ball from the bag should not be allowed. A child's name must be specified.
module.exports.removeToy = (child) => {
  return new Promise ( (resolve, reject) => {
    db.run(`DELETE FROM lootbag WHERE child = "${child}"`)
    .get(`SELECT * FROM lootbag WHERE child = "${child}"`, (err, children) => {
        if (err) {
          console.log(err.toString())
          reject( err );
        }
        console.log('Removed', children);
        resolve(children);
      });
    })
};