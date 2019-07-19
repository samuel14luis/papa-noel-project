let VALUEOF_FEATUREModel = {};
/*VALUEOF_FEATURE{idValueOf_Feature, name, TypeOf_Feature_idTypeOf_Feature}
http://localhost:3000/api/features/values/get/list
http://localhost:3000/api/features/values/get/:id
http://localhost:3000/api/features/values/new
http://localhost:3000/api/features/values/delete/
http://localhost:3000/api/features/values/update/name/
*/

VALUEOF_FEATUREModel.getFeatureValues = (conn, callback) => {
    if(conn) {
        conn.query('SELECT * FROM VALUEOF_FEATURE;', (err, result) => {
            if(err) throw err
            callback(err, result)
        })
    }
}

VALUEOF_FEATUREModel.getFeatureValue = (conn, idValueOf_Feature, callback) => {
    if(conn) {
        conn.query('SELECT * FROM VALUEOF_FEATURE WHERE idValueOf_Feature = ?;', [idValueOf_Feature], (err, result) => {
            if(err) throw err
            callback(err, result)
        })
    }
}

VALUEOF_FEATUREModel.insertFeatureValue = (conn, valueoffeature, callback) => {
    if(conn) {
        conn.query("INSERT INTO VALUEOF_FEATURE (name, TypeOf_Feature_idTypeOf_Feature) values (?, ?);", [valueoffeature.name, valueoffeature.TypeOf_Feature_idTypeOf_Feature], (error, result) => {
            if(error) throw error;
            callback(null, result);
        });
    }
}

VALUEOF_FEATUREModel.updateFeatureValueName = (conn, valueoffeature, callback) => {
    if(conn) {
        conn.query("UPDATE VALUEOF_FEATURE SET name=? WHERE idValueOf_Feature=?;", [valueoffeature.name, valueoffeature.idValueOf_Feature], (error, result) => {
            if(error) throw error
            callback(error, {
                success: true,
                msg: 'value_of_feature name was Updated',
                result
            })
        })
    }
}

VALUEOF_FEATUREModel.deleteFeatureValue = (conn, idValueOf_Feature, callback) => {
    if(conn) {
        conn.query("SELECT * FROM VALUEOF_FEATURE WHERE idValueOf_Feature = ?;", [idValueOf_Feature], (err, row) => {
            if(row.length > 0) {
                conn.query("DELETE FROM VALUEOF_FEATURE WHERE idValueOf_Feature = ?", [idValueOf_Feature], (err, result) => {
                    if(err) {
                        callback(err, {
                            success: false,
                            msg: 'value_of_feature was not Deleted',
                            result
                        })
                    } else {
                        callback(err, {
                            success: true,
                            msg: 'value_of_feature was Deleted',
                            result
                        })
                    }
                })
            } else {
                callback(err, {
                    success: false,
                    msg: 'value_of_feature was not Found',
                    result: err
                })
            }
        })
    }
}

module.exports = VALUEOF_FEATUREModel;