let CategoryModel = {};
/*Product_Category{idCategory,name,iconURL}
getCategories, getCategories(id), insertCategories(name,iconURL), deleteCategories(idCategory)
updateIconCategories(iconURL, idCategory), updateNameCategories(name,idCategory)
http://localhost:3000/api/sales/categories/get/list
http://localhost:3000/api/sales/categories/get/:id
http://localhost:3000/api/sales/categories/new
http://localhost:3000/api/sales/categories/delete/
http://localhost:3000/api/sales/categories/update/icon/
 */
CategoryModel.getCategories = (conn, callback) => {
    if (conn) {
        conn.query('SELECT * FROM Product_Category ;', (err, result) => {
            if (err) throw err
            callback(err, result)
        })
    }
}

CategoryModel.getCategory = (conn, idCategory, callback) => {
    if (conn) {
        conn.query('SELECT * FROM Product_Category WHERE idCategory = ?;', [idCategory], (err, result) => {
            if (err) throw err
            callback(err, result)
        })
    }
}

CategoryModel.insertCategory = (conn, category, callback) => {
    if (conn) {
        conn.query("INSERT INTO Product_Category (name, iconURL) values(?,?);", [category.name, category.iconURL], (error, result) => {
            if (error) throw error;
            callback(null, result);
        });
    }
}

CategoryModel.insertCategoryDev = async function (conn, categories, callback) {
    if (conn) {
        let errores = ''
        let n = 0
        let q_insert = "INSERT INTO Product_Category (name, iconURL) values(?,?);"
        await categories.forEach( function (c, i, array) {
            conn.query(q_insert, [c.name, c.iconURL], (error, result) => {
                if (error) {
                    errores += "item " + i + ": ERROR! - " + JSON.stringify(error) + "\n"
                } else {
                    errores += "item " + i + ": OK!    - " + JSON.stringify(result) + "\n"
                    n++
                }
            });
        });
        callback(null, {
            msg: 'Proceso terminado, categorias insertadas: ' + n,
            resumen: errores
        })
    }
}

CategoryModel.updateIconCategory = (conn, category, callback) => {
    if (conn) {
        conn.query("UPDATE Product_Category SET iconURL=? WHERE idCategory=?;", [category.iconURL, category.idCategory], (error, result) => {
            if (error) throw error
            callback(error, {
                success: true,
                msg: 'Category iconURL Updated',
                result
            })
        })
    }
}

CategoryModel.updateNameCategory = (conn, c, callback) => {
    if (conn) {
        conn.query("UPDATE Product_Category SET name=? WHERE idCategory=?;", [c.name, c.idCategory], (error, result) => {
            if (error) throw error
            callback(error, {
                success: true,
                msg: 'Category name Updated',
                result
            })
        })
    }
}

CategoryModel.deleteCategory = (conn, idCategory, callback) => {
    if (conn) {
        conn.query("SELECT * FROM Product_Category WHERE idCategory = ?;", [idCategory], (err, row) => {
            if (row.length > 0) {
                conn.query("DELETE FROM Product_Category WHERE idCategory = ?", [idCategory], (err, result) => {
                    if (err) {
                        callback(err, {
                            success: false,
                            msg: 'Category Not Deleted',
                            result
                        })
                    } else {
                        callback(err, {
                            success: true,
                            msg: 'Category Deleted',
                            result
                        })
                    }
                })
            } else {
                callback(err, {
                    success: false,
                    msg: 'Category Not Found',
                    result: err
                })
            }
        })
    }
}

module.exports = CategoryModel;