let TYPEOF_FEATUREModel = {};//TYPEOF_FEATURE{idTypeOf_Feature, name}
//getProducts(), getProductsInterval():last&:num, getProduct(), insertProduct(), addLabel()

TYPEOF_FEATUREModel.getFeatureTypes = (conn, callback) => {
    if(conn) {
        conn.query('SELECT * FROM TYPEOF_FEATURE;', (err, result) => {
            if(err) throw err
            callback(err, result)
        })
    }
}

TYPEOF_FEATUREModel.getFeatureType = (conn, idTypeOf_Feature, callback) => {
    if(conn) {
        conn.query('SELECT * FROM TYPEOF_FEATURE WHERE idTypeOf_Feature = ?;', [idTypeOf_Feature], (err, result) => {
            if(err) throw err
            callback(err, result)
        })
    }
}

TYPEOF_FEATUREModel.insertFeatureType = (conn, typeoffeature, callback) => {
    if(conn) {
        conn.query("INSERT INTO TYPEOF_FEATURE (name) values (?);", [typeoffeature.name], (error, result) => {
            if(error) throw error;
            callback(null, result);
        });
    }
}

TYPEOF_FEATUREModel.updateFeatureType = (conn, typeoffeature, callback) => {
    if(conn) {
        conn.query("UPDATE TYPEOF_FEATURE SET name=? WHERE idTypeOf_Feature=?;", [typeoffeature.name, typeoffeature.idTypeOf_Feature], (error, result) => {
            if(error) throw error
            callback(error, {
                success: true,
                msg: 'type_of_feature name was Updated',
                result
            })
        })
    }
}

TYPEOF_FEATUREModel.deleteFeatureType = (conn, idTypeOf_Feature, callback) => {
    if(conn) {
        conn.query("SELECT * FROM TYPEOF_FEATURE WHERE idTypeOf_Feature = ?;", [idTypeOf_Feature], (err, row) => {
            if(row.length > 0) {
                conn.query("DELETE FROM TYPEOF_FEATURE WHERE idTypeOf_Feature = ?", [idTypeOf_Feature], (err, result) => {
                    if(err) {
                        callback(err, {
                            success: false,
                            msg: 'type_of_feature was not Deleted',
                            result
                        })
                    } else {
                        callback(err, {
                            success: true,
                            msg: 'type_of_feature was Deleted',
                            result
                        })
                    }
                })
            } else {
                callback(err, {
                    success: false,
                    msg: 'type_of_feature was not Found',
                    result: err
                })
            }
        })
    }
}

module.exports = TYPEOF_FEATUREModel;