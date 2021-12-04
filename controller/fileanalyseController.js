const fileanalyseController = async (req, res, next)=>{
    let name = req.file;
    res.json({
        'name': name.originalname,
        'type': name.mimetype,
        'size': name.size
    })
}

module.exports = fileanalyseController