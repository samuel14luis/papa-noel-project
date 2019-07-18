let LabelModel = {};//LABELS{idLabel, name}

LabelModel.getLabels = (conn, callback) => {
    if(conn) {
        conn.query('SELECT * FROM LABELS;', (err, result) => {
            if(err) throw err
            callback(err, result)
        })
    }
}

LabelModel.getLabel = (conn, idLabel, callback) => {
    if(conn) {
        conn.query('SELECT * FROM LABELS WHERE idLabel = ?;', [idLabel], (err, result) => {
            if(err) throw err
            callback(err, result)
        })
    }
}

LabelModel.insertLabel = (conn, label, callback) => {
    if(conn) {
        conn.query("INSERT INTO LABELS (name) values (?);", [label.name], (error, result) => {
            if(error) throw error;
            callback(null, result);
        });
    }
}

LabelModel.updateNameLabel = (conn, label, callback) => {
    if(conn) {
        conn.query("UPDATE LABELS SET name=? WHERE idLabel=?;", [label.name, label.idLabel], (error, result) => {
            if(error) throw error
            callback(error, {
                success: true,
                msg: 'Label name Updated',
                result
            })
        })
    }
}

LabelModel.deleteLabel = (conn, idLabel, callback) => {
    if(conn) {
        conn.query("SELECT * FROM LABELS WHERE idLabel = ?;", [idLabel], (err, row) => {
            if(row.length > 0) {
                conn.query("DELETE FROM LABELS WHERE idLabel = ?", [idLabel], (err, result) => {
                    if(err) {
                        callback(err, {
                            success: false,
                            msg: 'Label was not Deleted',
                            result
                        })
                    } else {
                        callback(err, {
                            success: true,
                            msg: 'Label was Deleted',
                            result
                        })
                    }
                })
            } else {
                callback(err, {
                    success: false,
                    msg: 'Label was not Found',
                    result: err
                })
            }
        })
    }
}

module.exports = LabelModel;