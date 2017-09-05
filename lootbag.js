#!/usr/bin/env node

"use strict";

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag-o-loot.sqlite', (err) => {});

// Code from in class examples
let createTables = () => {
  db.run(`DROP TABLE IF EXISTS lootbag`)
  .run(
    `CREATE TABLE IF NOT EXISTS lootbag (
    child_id INTEGER PRIMARY KEY AUTOINCREMENT, toy TEXT, child TEXT)`
    )
};

createTables();

module.exports.addToy = (toy, child) => {
  db.run(`INSERT INTO lootbag VALUES (null, "${toy}", "${child}")`);
};

module.exports.getToy = (childRecepient) => { db.each(`SELECT toy FROM lootbag WHERE child = ${childRecepient})`); };