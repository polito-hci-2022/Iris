"use strict";
/* Data Access Object (DAO) module for accessing exams */

const { db } = require("./db");

exports.getMemory = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT memory FROM db WHERE memory = ?";
    db.all(sql, [1], (err, rows) => {
      if (err){
        reject(err);  
      } else {
        resolve(rows);
      }
    });
  });
};

exports.getPageCastleStory = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT pageCastleStory FROM db";
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
          resolve(rows);
      }
    });
  });
};

exports.getTest = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT test FROM db";
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

