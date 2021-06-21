const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const HttpStatus = require('http-status-codes');

//Add categories
//Update Category with category id 
router.post('/addAndUpdateCategory', (req, res) => {
    userController.addAndUpdateCategory(req).then((data) => {
      res.status(HttpStatus.OK).send(data)
    }).catch((e) => {
      res.status(HttpStatus.CONFLICT).send(e);
    });
});

//Add product by category id
//Update product by product id
router.post('/addAndUpdateProductByCategoryId', (req, res) => {
    userController.addProductDetail(req).then((data) => {
    userController.addProductCategoryDetail(data).then((data) => {
      res.status(HttpStatus.OK).send(data)
    }).catch((e) => {
      res.status(HttpStatus.CONFLICT).send(e);
    });
    }).catch((e) => {
      res.status(HttpStatus.CONFLICT).send(e);
    });
});

//Soft delect category by category id
router.post('/delectCategoryByCategoryId', (req, res) => {
  userController.delectCategoryDetail(req).then((data) => {
  userController.delectProductCategoryDetail(req).then((data) => {
    res.status(HttpStatus.OK).send(data)
  }).catch((e) => {
    res.status(HttpStatus.CONFLICT).send(e);
  });
  }).catch((e) => {
    res.status(HttpStatus.CONFLICT).send(e);
  });
});

//Soft delect product by product id
router.post('/delectProductByProductId', (req, res) => {
  userController.delectProductDetail(req).then((data) => {
  userController.delectProductCategoryDetail(req).then((data) => {
    res.status(HttpStatus.OK).send(data)
  }).catch((e) => {
    res.status(HttpStatus.CONFLICT).send(e);
  });
  }).catch((e) => {
    res.status(HttpStatus.CONFLICT).send(e);
  });
});

// List api for all Product with and pagination
// For pagination use parameter page and for one page limit is 10
router.get("/getAllProductByCategoryId", (req, res) => {
  userController.getAllProductByCategoryId(req).then((data) => {
    res.send(data);
  }).catch((e) => {
    res.status(HttpStatus.CONFLICT).send(e);
  });
});

// List api for all Product with and pagination
// For pagination use parameter page and for one page limit is 10
router.get("/getAllCategory", (req, res) => {
  userController.getAllCategory(req).then((data) => {
    res.send(data);
  }).catch((e) => {
    res.status(HttpStatus.CONFLICT).send(e);
  });
});

module.exports = router