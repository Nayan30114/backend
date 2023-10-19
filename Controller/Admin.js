const connection = require('../Model/dbconnect.js');
const bcrypt = require('bcrypt');
const express = require('express');

//                                 GET
const getData = (req, res) => {
    try {
        let sqlQuery = "SELECT * FROM admin"
        connection.query(sqlQuery, function (error, result) {
            if (error) {
                console.log("Error", error.sqlMessage)
            }
            else {
                res.json(result);
            }
        })
    }
    catch (error) {
        res.send(error.sqlMassage)
    }
};

//                                 POST
const postData = async (req, res) => {
    let sqlQuery = "insert into admin set?"
    const data = {
        uid: req.body.uid,
        name: req.body.name,
        email: req.body.email,
        aadhar: req.body.aadhar,
        qualification: req.body.qualification,
        address: req.body.address,
        mobile: req.body.mobile,
        photo: req.file.location,
        dob: req.body.dob,
        doj: req.body.doj,
        state: req.body.state,
        city: req.body.city,
        pin: req.body.pin,
        status: req.body.status,
        password: req.body.password
    }
    console.log(data, "data");
    await connection.query(sqlQuery, [data], function (error, result) {
        if (error) {
            console.log("error", error.sqlMessage)
        }
        else {
            res.json(result)
        }
    })
};

//                                     PUT
const putData = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.id
        let SqlQuery = "UPDATE admin SET ? WHERE uid =?"
        connection.query(SqlQuery, [data, id], (err, result) => {
            if (err) {
                res.json(err)
            }
            else {
                res.json(result)
            }
        })
    } catch (error) {
    }
};

//                                Status
const updateStatus = (req, res) => {
    try {
        let status = req.query.status;
        let id = req.query.uid;
        let SqlQuery = 'UPDATE admin SET status=? WHERE uid=?'
        connection.query(SqlQuery, [status, id], (err, result) => {
            if (err) {
                res.json(err)
            }
            else {
                res.json(result)
            }
        })
    } catch (error) {

    }
}

//                                     DELETE
const deleteData = (req, res) => {
    const id = req.params.id;
    console.log(id)
    const sql = "Delete FROM admin WHERE uid = ?";
    connection.query(sql, id, (err, result) => {

        console.log(err)
        if (err) return res.json({ Error: "delete employee error in sql" });
        return res.json({ Status: "Success" })
    })
}

module.exports = { getData, postData, putData, deleteData, updateStatus };