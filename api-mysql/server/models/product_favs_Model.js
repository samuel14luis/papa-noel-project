let FavModel = {};

FavModel.getFavs = (conn, idUser, callback) => {
    if (conn) {
        conn.query('SELECT * FROM PRODUCTS_FAV WHERE User_idUser=?;',[idUser], (err, result) => {
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