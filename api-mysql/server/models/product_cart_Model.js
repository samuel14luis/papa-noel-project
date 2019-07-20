let CartModel = {};

CartModel.getCart = (conn, idUser, callback) => {
    if (conn) {
        let query = 'SELECT c.User_idUser, c.Products_idProduct, p.name, p.img, p.description, '+
        'b.brandName, (p.unitPrize + p.unitProfit) as prize, p.stock, c.quantity, c.selected '+
        'FROM CART c '+
        'INNER JOIN PRODUCTS p ON c.Products_idProduct = p.idProduct '+
        'INNER JOIN PRODUCT_BRANDS b ON p.PRODUCT_BRANDS_idBrand = b.idBrand '+
        'WHERE User_idUser=?;'

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

CartModel.setSelectForAll = (conn, idUser, selected, callback) => {
    if (conn) {
        conn.query("UPDATE CART SET selected=? WHERE User_idUser=?;", [selected, idUser], (error, result) => {
            if (error) throw error
            callback(error, {
                success: true,
                msg: 'item-select ha sido actualizado en todos los productos.',
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