const connection = require('../Model/dbconnect')

//                                 GET
const viewSubcategory = async (req, res) => {
    try {
        const sqlQuery = 'select * from tbl_admin_subcategory'
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
const postSubcategory = (req, res) => {
    let sqlQuery = "INSERT INTO tbl_admin_subcategory SET?";
    let data = req.body
    data = {...data, photo: req.file.location}
    connection.query(sqlQuery, data, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(result)
        }
    })
}

//                                        PUT
const subcategoryUpdate = (req, res) => {
    let data = req.body;
    let id = req.params.id
    let SqlQuery = "UPDATE tbl_admin_subcategory SET ? WHERE subcategory_id =?"
    connection.query(SqlQuery, [data, id], (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
};

module.exports = { viewSubcategory, postSubcategory, subcategoryUpdate }