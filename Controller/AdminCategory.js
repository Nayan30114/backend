const connection = require('../Model/dbconnect.js');

//                                         GET
const viewcategory = async (req, res) => {
    try {
        const sqlQuery = 'select * from tbl_admin_product_category'
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

const addcategory =  (req, res) => {
    try {
        const data = {
            P_Category_Id:req.body.pCategoryid,
            Category_name:req.body.pCategoryname
        }
        const sqlQuery = 'INSERT INTO tbl_admin_product_category SET ?'
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

const updatecategory = (req, res) => {
    try {
        let data = req.body;
        let id = req.params.id
        let SqlQuery = "UPDATE tbl_admin_product_category SET ? WHERE P_Category_Id =?"
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

const findcategory = async (req, res) => {
    try {
        const sqlQuery = 'SELECT * FROM tbl_admin_product_category where P_Category_Id = ?'
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

module.exports = {addcategory, viewcategory, updatecategory, findcategory};