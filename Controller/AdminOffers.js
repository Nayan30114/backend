const connection = require('../Model/dbconnect')

//                                 GET
const viewOffers = async (req, res) => {
    try {
        const sqlQuery = 'select * from tbl_admin_offer'
        await connection.query(sqlQuery, (err, result) => {
            if (err) {
                return res.status(404).json({ message: "Not Found" })
            }
            res.status(200).json({
                success: true,
                result
            })
        })
    } catch (error) {
        res.send({ status: 500, Error: error.message })
    }
}

//                                  POST
const addOffers = (req, res) => {
    try {
        const userData = req.body;
        const sqlQuery = "INSERT INTO tbl_admin_offer SET ?";
        connection.query(sqlQuery, userData, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(result)
            }
        })
    }
    catch (error) {
        res.send("Error")
    }
};

//                                     PUT
const updateOffers = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.id
        let SqlQuery = "UPDATE tbl_admin_offer SET ? WHERE offerid =?"
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
}

//                                     DELETE
const deleteOffers = (req, res) => {
    const id = req.params.id;
    console.log(id)
    const sql = "Delete FROM tbl_admin_offer WHERE uid = ?";
    connection.query(sql, id, (err, result) => {
        console.log(err)
        if (err) return res.json({ Error:"delete employee error in sql"});
        return res.json({ Status: "Success" })
    })
}

module.exports = { viewOffers, addOffers, updateOffers, deleteOffers };