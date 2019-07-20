let FavModel = {};

FavModel.getFavs = (conn, idUser, callback) => {
    if (conn) {
        let query = 'SELECT f.User_idUser, p.idProduct, p.name, p.img, p.description, '+
        'b.brandName, (p.unitPrize + p.unitProfit) as prize, p.stock '+
        'FROM PRODUCTS_FAV f INNER JOIN PRODUCTS p '+
        'on f.Products_idProduct = p.idProduct INNER JOIN PRODUCT_BRANDS b '+
        'ON p.PRODUCT_BRANDS_idBrand = b.idBrand '+
        'WHERE User_idUser=?;'

        conn.query(query,[idUser], (err, result) => {
            if (err) throw err
            callback(err, result)
        })
    }
}

FavModel.addToFavs = (conn, idProduct, idUser, callback) => {
    if (conn) {
        conn.query("SELECT * FROM PRODUCTS WHERE idProduct = ?;", [idProduct], (err, row1) => {
            if (row1.length > 0) {
                conn.query("SELECT * FROM USER WHERE idUser = ?;", [idUser], (err, row2) => {
                    if (row2.length > 0) {
                        conn.query("INSERT INTO PRODUCTS_FAV (Products_idProduct, User_idUser) VALUES (?,?);", [idProduct, idUser], (error, result) => {
                            if (error) throw error
                            callback(error, {
                                success: true,
                                msg: 'Product was added to favs',
                                result
                            })
                        })
                    } else {
                        callback(err, {
                            success: false,
                            msg: 'User was not Found',
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

FavModel.removeFromFavs = (conn, idProduct, idUser, callback) => {
    if (conn) {
        conn.query("SELECT * FROM PRODUCTS WHERE idProduct = ?;", [idProduct], (err, row1) => {
            if (row1.length > 0) {
                conn.query("SELECT * FROM USER WHERE idUser = ?;", [idUser], (err, row2) => {
                    if (row2.length > 0) {
                        conn.query("DELETE FROM PRODUCTS_FAV WHERE Products_idProduct = ? AND User_idUser = ?;", [idProduct, idUser], (error, result) => {
                            if (error) throw error
                            callback(error, {
                                success: true,
                                msg: 'Product was removed from favs',
                                result
                            })
                        })
                    } else {
                        callback(err, {
                            success: false,
                            msg: 'User was not Found',
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

module.exports = FavModel;