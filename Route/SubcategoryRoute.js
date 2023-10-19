const express = require('express')
const subcategory = express.Router()

const { viewSubcategory, postSubcategory, subcategoryUpdate } = require('../Controller/SubCategory')

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

subcategory.get('/viewSubcategory', viewSubcategory)
subcategory.post('/postSubcategory',upload.single('photo'), postSubcategory)
subcategory.put('/updateSubcategory/:id',upload.single('photo'), subcategoryUpdate)

module.exports = subcategory;