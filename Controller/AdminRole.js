const connection = require('../Model/dbconnect')

const adminrole_view = async (req, res) => {
    try {
        const sqlQuery = 'SELECT * FROM tbl_admin_roles'
        await connection.query(sqlQuery, (err, result) => {
            if (err) {
                return res.status(404).json({ message: "Not Found" })
            }
            res.send(result)
            // res.status(200).json({
            //     success: true,
            //     result
            // })
        })
    } catch (error) {
        res.send({ status: 500, Error: error.message })
    }
}

const adminrolePost =  (req, res) => {
    try {
        const data = req.body;
        const sqlQuery = 'INSERT INTO tbl_admin_roles SET ?'
        connection.query(sqlQuery, data, (err, result) => {
            if (err) {
               res.json(err)
            }
            else{
                res.json(result)
            }
        }
        )
    } catch (error) {
        res.send({ status: 500, Error: error.message })
    }
}

const adminrole_update = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.id
        let SqlQuery = "UPDATE tbl_admin_roles SET ? WHERE role_id =?"
        connection.query(SqlQuery, [data, id], (err, result) => {
            // console.log(data)    // terminal me bhi dikhayega ki kya update hua hai
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

module.exports = {adminrolePost, adminrole_view, adminrole_update};