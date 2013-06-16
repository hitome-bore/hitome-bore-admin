/**
 * @fileOverview mongodb client
 * @name mongoClient.js
 * @author Shun Kokubo <shnkkb@gmail.com>
 */

var mongo = require('mongodb');
var Db = mongo.Db;
var Server = mongo.Server;
var config = require('../../config');
var logger = require('../util/logger').logger;

var mongoConf = config.mongodb || { host: '127.0.0.1', port: '27017', database: 'hitome_bore' };

var client = new Db(mongoConf.database, new Server(mongoConf.host, mongoConf.port, {safe:false}), {w: 1});

client.open(function(err) {
    if (err) {
        console.log('failed to connect to the mongodb', err)
        logger.error('failed to connect to the mongodb', err);
        throw err;
    }
    console.log('connected to the mongodb:' + mongoConf.host + ':' + mongoConf.port);
    logger.info('connected to the mongodb:' + mongoConf.host + ':' + mongoConf.port);
});

module.exports = client;