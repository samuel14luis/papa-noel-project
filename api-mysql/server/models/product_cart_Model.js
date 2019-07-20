let CartModel = {};

CartModel.getCart = (conn, idUser, callback) => {
    if (conn) {
        let query = 'SELECT * FROM CART WHERE User_idUser=?;'

        conn.query(query, [idUser], (err, result) => {
            if (err) throw err
            callback(err, result)
        })
    }
}

CartModel.addToCart = (conn, idUser, idProduct, quantity, callback) => {
    if (conn) {
        conn.query("SELECT * FROM USER WHERE idUser = ?;", [idUser], (err, row1) => {
            if (row1.length > 0) {
                conn.query("SELECT * FROM PRODUCTS WHERE idProduct = ? AND stock >=?;", [idProduct, quantity], (err, row2) => {
                    if (row2.length > 0) {
                        conn.query("INSERT INTO CART (User_idUser, quantity, selected, Products_idProduct) VALUES (?,?,?,?);", [idUser, quantity, 0, idProduct], (error, result) => {
                            if (error) throw error
                            callback(error, {
                                success: true,
                                msg: 'Product was added to cart',
                                result
                            })
                        })
                    } else {
                        callback(err, {
                            success: false,
                            msg: 'Product was not Found',
                            result: err
                        })
                    }
                })
            } else {
                callback(err, {
                    success: false,
                    msg: 'User was not Found',
                    result: err
                })
            }
        })
    }
}

CartModel.setSelectItem = (conn, idUser, idProduct, selected, callback) => {
    if (conn) {
        conn.query("UPDATE CART SET selected=? WHERE User_idUser=? AND Products_idProduct=?;", [selected, idUser, idProduct], (error, result) => {
            if (error) throw error
            callback(error, {
                success: true,
                msg: 'item-select ha sido actualizado',
                result
            })
        })
    }

}

CartModel.setQuantity = (conn, idUser, idProduct, quantity, callback) => {
    if (conn) {
        conn.query("SELECT * FROM PRODUCTS WHERE idProduct = ? AND stock >=?;", [idProduct, quantity], (err, row2) => {
            if (row2.length > 0) {
                conn.query("UPDATE CART SET quantity=? WHERE User_idUser=? AND Products_idProduct=?;", [quantity, idUser, idProduct], (error, result) => {
                    if (error) throw error
                    callback(error, {
                        success: true,
                        msg: 'item-quantity ha sido actualizado',
                        result
                    })
                })
            } else {
                callback(err, {
                    success: false,
                    msg: 'Producto no tiene stock suficiente',
                    result: err
                })
            }
        })        
    }

}

CartModel.removeFromCart = (conn, idUser, idProduct, callback) => {
    if (conn) {
        conn.query("SELECT * FROM USER WHERE idUser = ?;", [idUser], (err, row1) => {
            if (row1.length > 0) {
                conn.query("SELECT * FROM PRODUCTS WHERE idProduct = ?;", [idProduct], (err, row2) => {
                    if (row2.length > 0) {
                        conn.query("DELETE FROM CART WHERE Products_idProduct = ? AND User_idUser = ?;", [idProduct, idUser], (error, result) => {
                            if (error) throw error
                            callback(error, {
                                success: true,
                                msg: 'Product was removed from cart',
                                result
                            })
                        })
                    } else {
                        callback(err, {
                            success: false,
                            msg: 'Product was not Found',
                            result: err
                        })
                    }
                })
            } else {
                callback(err, {
                    success: false,
                    msg: 'User was not Found',
                    result: err
                })
            }
        })
    }
}

module.exports = CartModel;