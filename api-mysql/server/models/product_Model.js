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

ProductModel.getProductsByCategory = (conn, idCategory, callback) => {
    if (conn) {
        let query = 'SELECT p.idProduct, p.name, p.img, p.description, b.brandName '+
        'FROM PRODUCTS p INNER JOIN PRODUCT_BRANDS b '+
        'ON p.PRODUCT_BRANDS_idBrand = b.idBrand '+
        'WHERE Product_Category_idCategory=?;'
        conn.query(query, [idCategory], (err, result) => {
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

ProductModel.insertProductDev = async function (conn, productos, callback) {
    if (conn) {
        let errores = ''
        let n = 0
        let q_brands = "SELECT * FROM PRODUCT_BRANDS WHERE idBrand = ?;"
        let q_category = "SELECT * FROM PRODUCT_CATEGORY WHERE idCategory = ?;"
        let q_insert = "INSERT INTO PRODUCTS (name,img,description,Product_Brands_idBrand,Product_Category_idCategory) values (?,?,?,?,?);"
        await productos.forEach(async function (p, i, array) {
            await conn.query(q_brands, [p.Product_Brands_idBrand], async function (err1, r1) {
                console.log("new ---uwu tut "+n)
                if (r1.length > 0) {
                    await conn.query(q_category, [p.Product_Category_idCategory], async function (err2, r2) {
                        if (r2.length > 0) {
                            await conn.query(q_insert, [p.name, p.img, p.description, p.Product_Brands_idBrand, p.Product_Category_idCategory],
                                (error, result) => {
                                    console.log("       uwu tut "+n)
                                    if (error){
                                        errores += "item "+ i + ": ERROR! - "+ JSON.stringify(error) + "\n"
                                    } else {
                                        errores += "item "+ i + ": OK!    - "+ JSON.stringify(result) + "\n"
                                        n++
                                    }
                                    console.log("       uwu tut "+n)
                                });
                        } else {
                            errores += "item "+ i + ": ERROR! - Category was not Found\n"
                        }
                    })
                } else {
                    errores += "item "+ i + ": ERROR! - Brand was not Found\n"
                }
            })
        });
        callback(null, {
            msg: 'Proceso terminado, productos insertados: '+n,
            resumen: errores
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