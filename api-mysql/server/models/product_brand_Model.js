let BrandModel = {};//PRODUCT_BRANDS{idBrand, brandName}

BrandModel.getBrands = (conn, callback) => {
    if(conn) {
        conn.query('SELECT * FROM PRODUCT_BRANDS;', (err, result) => {
            if(err) throw err
            callback(err, result)
        })
    }
}

BrandModel.getBrand = (conn, idBrand, callback) => {
    if(conn) {
        conn.query('SELECT * FROM PRODUCT_BRANDS WHERE idBrand = ?;', [idBrand], (err, result) => {
            if(err) throw err
            callback(err, result)
        })
    }
}

BrandModel.insertBrand = (conn, brand, callback) => {
    if(conn) {
        conn.query("INSERT INTO PRODUCT_BRANDS (brandName) values (?);", [brand.brandName], (error, result) => {
            if(error) throw error;
            callback(null, result);
        });
    }
}

BrandModel.updateNameBrand = (conn, brand, callback) => {
    if(conn) {
        conn.query("UPDATE PRODUCT_BRANDS SET brandName=? WHERE idBrand=?;", [brand.brandName, brand.idBrand], (error, result) => {
            if(error) throw error
            callback(error, {
                success: true,
                msg: 'Brand name was Updated',
                result
            })
        })
    }
}

BrandModel.deleteBrand = (conn, idBrand, callback) => {
    if(conn) {
        conn.query("SELECT * FROM PRODUCT_BRANDS WHERE idBrand = ?;", [idBrand], (err, row) => {
            if(row.length > 0) {
                conn.query("DELETE FROM PRODUCT_BRANDS WHERE idBrand = ?", [idBrand], (err, result) => {
                    if(err) {
                        callback(err, {
                            success: false,
                            msg: 'Brand was not Deleted',
                            result
                        })
                    } else {
                        callback(err, {
                            success: true,
                            msg: 'Brand was Deleted',
                            result
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

module.exports = BrandModel;