require('dotenv').config()
//require('./config/connection_config');
import  server from './config/server_config'

server.listen(3000, function () { console.log('listening on port 3000') });
