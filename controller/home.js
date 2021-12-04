const home = async (req, res)=>{
    res.render('index',{
        'home': 'Index page',
        'title': 'Index'
    })
}

module.exports = home