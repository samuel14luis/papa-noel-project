let ProductModel = {};//PRODUCTS{idProduct, name,img,description,
//Product_Brands_idBrand,Product_Category_idCategory}
//getProducts(), getProductsInterval():last&:num, getProduct(), insertProduct(), addLabel()

ProductModel.getProducts = (conn, callback) => {
    if (conn) {
        conn.query('SELECT * FROM PRODUCTS;', (err, result) => {
            if (err) throw err
            callback(err, result)
        })
    }
}

ProductModel.getProductsInterval = (conn, last, num, callback) => {
    console.log(last + "  -  " + num)
    if (conn) {
        conn.query('SELECT * FROM PRODUCTS WHERE idProduct=? LIMIT ?;', [last, num], (err, result) => {
            if (err) throw err
            callback(err, result)
        })
    }
}

ProductModel.getProduct = (conn, idProduct, callback) => {
    if (conn) {
        conn.query('SELECT * FROM PRODUCTS WHERE idProduct = ?;', [idProduct], (err, result) => {
            if (err) throw err
            callback(err, result)
        })
    }
}

ProductModel.insertProduct = (conn, p, callback) => {
    if (conn) {
        conn.query("SELECT * FROM PRODUCT_BRANDS WHERE idBrand = ?;", [p.Product_Brands_idBrand], (err, row1) => {
            if (row1.length > 0) {
                conn.query("SELECT * FROM PRODUCT_CATEGORY WHERE idCategory = ?;", [p.Product_Category_idCategory], (err, row2) => {
                    if (row2.length > 0) {
                        conn.query("INSERT INTO PRODUCTS (name,img,description,Product_Brands_idBrand,Product_Category_idCategory) " +
                            "values (?,?,?,?,?);", [p.name, p.img, p.description, p.Product_Brands_idBrand, p.Product_Category_idCategory],
                            (error, result) => {
                                if (error) throw error;
                                callback(null, {
                                    success: true,
                                    msg: 'Product was inserted',
                                    result
                                });
                            });
                    } else {
                        callback(err, {
                            success: false,
                            msg: 'Category was not Found',
                            result: err
                        })
                    }
                })
            } else {
                callback(err, {
                    success: false,
                    msg: 'Brand was not Found',
                    result: err
                })
            }
        })
    }
}

ProductModel.addLabel = (conn, idProduct, idLabel, callback) => {
    if (conn) {
        conn.query("SELECT * FROM PRODUCTS WHERE idProduct = ?;", [idProduct], (err, row1) => {
            if (row1.length > 0) {
                conn.query("SELECT * FROM LABELS WHERE idLabel = ?;", [idLabel], (err, row2) => {
                    if (row2.length > 0) {
                        conn.query("INSERT INTO Labels_has_Products (Products_idProduct, Labels_idLabel) VALUES (?,?);", [idProduct, idLabel], (error, result) => {
                            if (error) throw error
                            callback(error, {
                                success: true,
                                msg: 'Label was added',
                                result
                            })
                        })
                    } else {
                        callback(err, {
                            success: false,
                            msg: 'Label was not Found',
                            result: err
                        })
                    }
                })
            } else {
                callback(err, {
                    success: false,
                    msg: 'Product was not Found',
                    result: err
                })
            }
        })
    }
}

module.exports = ProductModel;