const connection = require('../Model/dbconnect')

//                         GET

const roleassignView = async (req, res) => {
    try {
        const sqlQuery = 'SELECT * FROM tbl_name_role_assign'
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

//                                 POST

const roleassignPost = async (req, res) => {
    try {
        const data = req.body
        const sqlQuery = 'INSERT INTO tbl_name_role_assign SET ?'
        connection.query(sqlQuery, data, (err, result) => {
            if (err) {
                res.json(err)
            }
            else {
                res.json(result)
            }
        })
    }
    catch (error) {
        res.send({ status: 500, Error: error.message })
    } 
}

module.exports = { roleassignView, roleassignPost }