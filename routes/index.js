
/*
 * GET home page.
 */

exports.index = function(req, res)
{
    res.render(
        'index', 
        { 
            title: 'Eva' 
        }
    );
};
exports.demo = function(req, res)
{
    res.render(
        'demo', 
        { 
            title: 'This is Demo page',
            header: 'demo demo demo ...'
        }
    );
};

exports.app = function(req, res)
{
    res.render(
        'bootstrap', 
        { 
            title: 'This is bootstrap page',
            content: 'many many content ...'
        }
    );
};