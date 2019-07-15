let BannerModel = {};
//getBanners, getAllBanners, getBanner(id), insertBanner(banner.imgURL,banner.active), deleteBanner(id)
//updateImgBanner(ibanner.imgURL, banner.idBanner), updateActiveBanner(banner.active, banner.idBanner)
BannerModel.getBanners = (conn, callback) => {
    if(conn) {
        conn.query('SELECT * FROM BANNER WHERE active = 1 and state=1;', (err, result) => {
            if(err) throw err
            callback(err, result)
        })
    }
}

BannerModel.getAllBanners = (conn, callback) => {
    if(conn) {
        conn.query('SELECT * FROM BANNER where state=1;', (err, result) => {
            if(err) throw err
            callback(err, result)
        })
    }
}

BannerModel.getBanner = (conn, idBanner, callback) => {
    if(conn) {
        conn.query('SELECT * FROM BANNER WHERE active = 1 and idBanner = ?;', [idBanner], (err, result) => {
            if(err) throw err
            callback(err, result)
        })
    }
}

BannerModel.insertBanner = (conn, banner, callback) => {
    if(conn) {
        conn.query("INSERT INTO BANNER (imgURL, active,state,registrationDate) values(?,?,1,current_date());", [banner.imgURL, banner.active], (error, result) => {
            if(error) throw error;
            callback(null, result);
        });
    }
}

BannerModel.updateImgBanner = (conn, banner, callback) => {
    if(conn) {
        conn.query("UPDATE BANNER SET imgURL=? WHERE idBanner=?;", [banner.imgURL, banner.idBanner], (error, result) => {
            if(error) throw error
            callback(error, {
                success: true,
                msg: 'Banner imgURL Updated',
                result
            })
        })
    }
}

BannerModel.updateActiveBanner = (conn, banner, callback) => {
    if(conn) {
        conn.query("UPDATE BANNER SET active=? WHERE idBanner=?;", [banner.active, banner.idBanner], (error, result) => {
            if(error) throw error
            callback(error, {
                success: true,
                msg: 'Banner Active Updated',
                result
            })
        })
    }
}

BannerModel.deleteBanner = (conn, id, callback) => {
    if(conn) {
        conn.query("SELECT * FROM BANNER WHERE idBanner = ? and state=1", [id], (err, row) => {
            if(row.length > 0) {
                conn.query("UPDATE BANNER SET state=0 WHERE idBanner = ?", [id], (err, result) => {
                    if(err) {
                        callback(err, {
                            success: false,
                            msg: 'Banner Not Deleted',
                            result
                        })
                    } else {
                        callback(err, {
                            success: true,
                            msg: 'Banner Deleted',
                            result
                        })
                    }
                })
            } else {
                callback(err, {
                    success: false,
                    msg: 'Banner Not Found',
                    result: err
                })
            }
        })
    }
}

module.exports = BannerModel;