const mysql = require('mysql');
const db = require('../config/db').localConnect;
const secret = require('../config/secret');
const helper = require('../config/helper');
module.exports = {
    addAndUpdateCategory: (req) => {
        return new Promise((resolve, reject) => {
            let category_id = req.body.category_id ? req.body.category_id : helper.getId();
            let category_name = req.body.category_name ? req.body.category_name : '';

            let userSql = 'INSERT tbl_category_master SET ';
            let userGenrSql = '';
            if (helper.checkEmpty(category_id)) {
                if (userGenrSql !== '') {
                    userGenrSql += ',';
                }
                userGenrSql += ' category_id = ' + mysql.escape(category_id) + '';
            }
            if (helper.checkEmpty(category_name)) {
                if (userGenrSql !== '') {
                    userGenrSql += ',';
                }
                userGenrSql += ' category_name = ' + mysql.escape(category_name) + '';
            }

            userSql = userSql + ' ' + userGenrSql + ' , category_create_date = now() ON DUPLICATE KEY UPDATE ' + userGenrSql + ' ';

            db.query(userSql, (err, result) => {
                if (err) {
                    console.log(err)
                    reject([]);
                } else {
                    resolve("Category Detail Updated");
                }
            });
        })
    },
    addProductDetail: (req) => {
        return new Promise((resolve, reject) => {
            let category_id = req.body.category_id ? req.body.category_id : '';
            let product_id = req.body.product_id ? req.body.product_id : helper.getId();
            let product_name = req.body.product_name ? req.body.product_name : '';

            let userSql = 'INSERT tbl_product_master SET ';
            let userGenrSql = '';
            if (helper.checkEmpty(product_id)) {
                if (userGenrSql !== '') {
                    userGenrSql += ',';
                }
                userGenrSql += ' product_id = ' + mysql.escape(product_id) + '';
            }
            if (helper.checkEmpty(product_name)) {
                if (userGenrSql !== '') {
                    userGenrSql += ',';
                }
                userGenrSql += ' product_name = ' + mysql.escape(product_name) + '';
            }

            userSql = userSql + ' ' + userGenrSql + ' , product_create_date = now() ON DUPLICATE KEY UPDATE ' + userGenrSql + ' ';

            db.query(userSql, (err, result) => {
                if (err) {
                    console.log(err)
                    reject([]);
                } else {
                    resolve({ category_id: category_id, product_id: product_id });
                }
            });
        })
    },
    addProductCategoryDetail: (data) => {
        return new Promise((resolve, reject) => {
            let category_id = data.category_id ? data.category_id : '';
            let product_id = data.product_id ? data.product_id : '';

            let userSql = 'INSERT tbl_product_category_mapping SET ';
            let userGenrSql = '';
            if (helper.checkEmpty(category_id)) {
                if (userGenrSql !== '') {
                    userGenrSql += ',';
                }
                userGenrSql += ' category_id = ' + mysql.escape(category_id) + '';
            }
            if (helper.checkEmpty(product_id)) {
                if (userGenrSql !== '') {
                    userGenrSql += ',';
                }
                userGenrSql += ' product_id = ' + mysql.escape(product_id) + '';
            }

            userSql = userSql + ' ' + userGenrSql + ' , createdon = now() ON DUPLICATE KEY UPDATE ' + userGenrSql + ' ';

            db.query(userSql, (err, result) => {
                if (err) {
                    console.log(err)
                    reject([]);
                } else {
                    resolve("Product Detail Updated");
                }
            });
        })
    },
    delectCategoryDetail: (req) => {
        return new Promise((resolve, reject) => {
            let category_id = req.body.category_id ? req.body.category_id : '';
            let category_active_flag = 2;

            let userSql = 'INSERT tbl_category_master SET ';
            let userGenrSql = '';
            if (helper.checkEmpty(category_id)) {
                if (userGenrSql !== '') {
                    userGenrSql += ',';
                }
                userGenrSql += ' category_id = ' + mysql.escape(category_id) + '';
            }
            if (helper.checkEmpty(category_active_flag)) {
                if (userGenrSql !== '') {
                    userGenrSql += ',';
                }
                userGenrSql += ' category_active_flag = ' + mysql.escape(category_active_flag) + '';
            }

            userSql = userSql + ' ' + userGenrSql + ' ON DUPLICATE KEY UPDATE ' + userGenrSql + ' ';

            db.query(userSql, (err, result) => {
                if (err) {
                    console.log(err)
                    reject([]);
                } else {
                    resolve("delected Category Detail");
                }
            });
        })
    },
    delectProductDetail: (req) => {
        return new Promise((resolve, reject) => {
            let product_id = req.body.product_id ? req.body.product_id : '';
            let product_active_flag = 2;

            let userSql = 'INSERT tbl_product_master SET ';
            let userGenrSql = '';
            if (helper.checkEmpty(product_id)) {
                if (userGenrSql !== '') {
                    userGenrSql += ',';
                }
                userGenrSql += ' product_id = ' + mysql.escape(product_id) + '';
            }
            if (helper.checkEmpty(product_active_flag)) {
                if (userGenrSql !== '') {
                    userGenrSql += ',';
                }
                userGenrSql += ' product_active_flag = ' + mysql.escape(product_active_flag) + '';
            }

            userSql = userSql + ' ' + userGenrSql + ' ON DUPLICATE KEY UPDATE ' + userGenrSql + ' ';

            db.query(userSql, (err, result) => {
                if (err) {
                    console.log(err)
                    reject([]);
                } else {
                    resolve("delected Product Detail");
                }
            });
        })
    },
    delectProductCategoryDetail: (req) => {
        return new Promise((resolve, reject) => {
            let category_id = req.body.category_id ? req.body.category_id : '';
            let product_id = req.body.product_id ? req.body.product_id : '';
            let active_flag = 2;

            let userSql = 'UPDATE tbl_product_category_mapping SET ';
            let userGenrSql = '';
            if (helper.checkEmpty(active_flag)) {
                userGenrSql += ' active_flag = ' + mysql.escape(active_flag) + '';
            }
            if (helper.checkEmpty(category_id)) {
                userGenrSql += ' where category_id = ' + mysql.escape(category_id) + '';
            }
            if (helper.checkEmpty(product_id)) {
                userGenrSql += ' where product_id = ' + mysql.escape(product_id) + '';
            }
            userSql = userSql + ' ' + userGenrSql + ' ';

            db.query(userSql, (err, result) => {
                if (err) {
                    console.log(err)
                    reject([]);
                } else {
                    resolve("delected Category Product Detail");
                }
            });
        })
    },
    getAllCategory: (req) => {
        return new Promise((resolve, reject) => {
            let category_id = req.query.category_id ? req.query.category_id : '';
            let category_name = req.query.category_name ? req.query.category_name : '';
            let page = req.query.page ? req.query.page : '';
            let result = [];
            let limit = secret.limit;
            let offset = (page - 1) * limit
            let sQuery = '';
            sQuery = ' SELECT \n\
                       category_id, \n\
                       category_name ';
            sQuery += ' FROM \n\
            tbl_category_master p \n\
                      WHERE category_active_flag = 1 ';
            if (category_id != '') {
                sQuery += ' AND category_id = ' + mysql.escape(category_id) + "";
            }
            if (page != '') {
                sQuery += 'limit ' + limit + ' OFFSET ' + offset + '';
            }
            db.query(sQuery, (err, rows) => {
                if (err) {
                    console.log(err)
                    return reject([]);
                } else if (rows && rows.length) {
                    rows.forEach(element => {
                        result.push({
                            category_id: element.category_id,
                            category_name: element.category_name,
                        });
                    });
                    return resolve(result);

                } else {
                    return reject({ msg: "data not found" });
                }
            });
        });
    },
    getAllProductByCategoryId: (req) => {
        return new Promise((resolve, reject) => {
            let category_id = req.query.category_id ? req.query.category_id : '';
            let category_name = req.query.category_name ? req.query.category_name : '';
            let page = req.query.page ? req.query.page : '';
            let result = [];
            let limit = secret.limit;
            let offset = (page - 1) * limit
            let sQuery = '';
            sQuery = ' SELECT \n\
                       pc.category_id, \n\
                       pc.product_id, \n\
            p.product_id,\n\
            p.product_name ';
            sQuery += ' FROM \n\
            tbl_product_category_mapping pc,tbl_product_master p \n\
                      WHERE pc.product_id = p.product_id AND active_flag = 1 ';
            if (category_id != '') {
                sQuery += ' AND category_id = ' + mysql.escape(category_id) + "";
            }
            if (page != '') {
                sQuery += 'limit ' + limit + ' OFFSET ' + offset + '';
            }
            db.query(sQuery, (err, rows) => {
                if (err) {
                    console.log(err)
                    return reject([]);
                } else if (rows && rows.length) {
                    rows.forEach(element => {
                        result.push({
                            category_id: element.category_id,
                            product_id: element.product_id,
                            product_name: element.product_name,
                        });
                    });
                    return resolve(result);

                } else {
                    return reject({ msg: "data not found" });
                }
            });
        });
    }
}