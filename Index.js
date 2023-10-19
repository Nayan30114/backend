const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

dotenv.config();
app.use(express.json());

//         Swagger options
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'NODE JS API DOCUMENTATION',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:4000', 
      },
    ],
  },
  apis: ['./Route/AdminRoute.js'],  // Path to your route file
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use('/testing', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// const AdminRoleRoute = require('./Route/AdminRoleRoute.js')
// app.use('/', AdminRoleRoute)

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true,
  })
);

const AdminRoute = require('./Route/AdminRoute');
app.use('/', AdminRoute);

const adminroll_route = require('./Route/AdminRoleRoute');
app.use('/', adminroll_route);

const roleassignRoute = require('./Route/RoleAssignRoute');
app.use('/', roleassignRoute);

const admincategory_route  = require('./Route/AdminCategoryRoute')
app.use('/', admincategory_route )

const adminoffers_route = require('./Route/AdminOffersRoute')
app.use('/', adminoffers_route)

const subcategory = require('./Route/SubcategoryRoute')
app.use('/', subcategory)

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on ${port} Port`);
});