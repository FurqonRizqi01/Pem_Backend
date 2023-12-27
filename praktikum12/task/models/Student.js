// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const query = "SELECT * from students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(query, (err, results) => {
        return resolve(results);
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static create(Student) {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO students SET ?";
        db.query(query, Student, (err, results) => {
            resolve(this.show(results.insertId));
        });
    });
  }

static show(id) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM students WHERE id = ${id} `;
        db.query(sql, (err, results) => {
            resolve(results);
        });
    });
  }
}

// export class Student
module.exports = Student;