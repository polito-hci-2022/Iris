"use strict";
/* Data Access Object (DAO) module for accessing db */

const { db } = require("./db");

exports.getMemory = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT memory FROM db";
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.log(err);
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

exports.getTestResults = () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT Answer1, Answer2 FROM test";
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

exports.addMemory = async () => {
  return new Promise((resolve, reject) => {
    const sql =
      "UPDATE db SET memory = ? WHERE memory = ?";
    db.run(
      sql,
      [1, 0],
      function (err) {
        if (err) {
          console.log(err)
          reject(err);
        }
        else {
          console.log(this)
          resolve(this);
        }
      }
    );
  });
};

exports.addPageCastleStory = async () => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO db(pageCastleStory) VALUES(?)";
    db.run(
      sql,
      [1],
      function (err) {
        if (err) reject(err);
        else {
          resolve(this.lastID);
        }
      }
    );
  });
};

exports.addTest = async () => {
  return new Promise((resolve, reject) => {
    const sql =
      "INSERT INTO db(test) VALUES(?)";
    db.run(
      sql,
      [1],
      function (err) {
        if (err) reject(err);
        else {
          resolve(this.lastID);
        }
      }
    );
  });
};

exports.saveTest = async (answer1, answer2) => {
  return new Promise((resolve, reject) => {
    const sql = "UPDATE test SET Answer1 = ?, Answer2 = ? WHERE User = ?";
    db.run(sql, [answer1, answer2, 1], function (err) {
      if (err) {
        console.log(err)
        reject(err);
      }
      else {
        console.log(this)
        resolve(this);
      }
    });
  });
};

exports.deleteMemory = () => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM db WHERE memory = ?";
    db.run(sql, [1], (err) => {
      if (err) reject(err);
      else resolve(null);
    });
  });
};


exports.deletePageCastleStory = () => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM db WHERE pageCastleStory = ?";
    db.run(sql, [1], (err) => {
      if (err) reject(err);
      else resolve(null);
    });
  });
};


exports.deleteTest = () => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM db WHERE test  = ?";
    db.run(sql, [1], (err) => {
      if (err) reject(err);
      else resolve(null);
    });
  });
};
