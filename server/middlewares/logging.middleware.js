exports.logRequest = (req, res, next) => {
    const packet = {
        'url': req.url,
        'method': req.method,
        'headers': req.headers,
        'body':req.body, 
        'params': req.params
    };
    console.log(packet);
    next();
}

exports.logGlobalRequest = (req, res, next) => {
    console.log(`Info: ${new Date(Date.now())}: ${req.method} ${req.protocol}://${req.hostname+req.originalUrl}`);
    console.dir(req.body, {depth:null});
    console.dir(req.params, {depth:null});
    next();
}