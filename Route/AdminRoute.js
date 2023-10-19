const express = require("express");
const AdminRoute = express.Router();    //Router is a Method of express for routing
const { getData, postData, putData, deleteData, updateStatus } = require('../Controller/Admin.js');
var fs = require('fs');

// const admin_validation = require('../Validation/JoiValid.js');    // Joi

/**
 * @swagger
 * components:
 *   schemas:
 *     admin:
 *       type: object
 *       properties:
 *         uid:
 *           type: string
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         aadhar:
 *           type: string
 *         qualification:
 *           type: string
 *         address:
 *           type: string
 *         mobile:
 *           type: string
 *         photo:
 *           type: string
 *         dob:
 *           type: string
 *         doj:
 *           type: string
 *         state:
 *           type: string
 *         city:
 *           type: string
 *         pin:
 *           type: string
 *         status:
 *           type: string
 *         password:
 *           type: string
 */


/**
 * @swagger
 * /getdata:
 *   get:
 *     summary: Get data
 *     description: Get method to retrieve data
 *     responses:
 *       200:
 *         description: Successfully retrieved data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/admin'
 */

/**
 * @swagger
 * /postdata:
 *   post:
 *     summary: Add a new data
 *     description: Add new data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/admin'
 *     responses:
 *       200:
 *         description:  added successfully
 */

/**
 * @swagger 
 * /putdata/{id}:
 *   put:
 *     summary: Update data
 *     description: Update data by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/admin'
 *     responses:
 *       200:
 *         description: Data updated successfully
 */

/**
 * @swagger 
 * /deleteData/{id}:
 *   delete:
 *     summary: Delete data
 *     description: Delete data by id
 *     parameters:
 *       - in: path
 *         name: uid
 *         description:  ID to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Data deleted successfully
 */


let multerS3 = require('multer-s3');
let multer = require("multer");
const { S3Client } = require("@aws-sdk/client-s3")

const bucketName = "imgbct"; 

//store file in AWS S3 configuration 
const s3 = new S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId: 'AKIAZB774HDWSSNBKXW2',
        secretAccessKey: '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'
    }
})


//Storage Configuraion
let storage = multerS3({
    s3: s3,
    bucket: bucketName,
    acl: 'public-read',
    metadata: (req, file, cb) => {
        cb(null, { fieldName: file.fieldname })
    },
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
let upload = multer({ storage: storage });


AdminRoute.get('/getdata', getData);
AdminRoute.post('/postdata', upload.single('photo'), postData);
AdminRoute.put('/putdata/:id', putData);
AdminRoute.delete('/deleteData/:id', deleteData);
// AdminRoute.post('/create', create);
AdminRoute.put('/updateStatus', updateStatus)

module.exports = AdminRoute;