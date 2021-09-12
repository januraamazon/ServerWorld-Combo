
//Serverworld:Serverside THIS file has to change
'use strict';
const ecsport = 8080;
var express = require('express');
var app = express();
const request = require('request');
/*pool info
const poolData = {    
UserPoolId : "us-east-2_rrEFcuWKH", // Your user pool id here    
ClientId : "5k395h46jpl8r4eqn4ocltrhcj" // Your app client id here
}; 
const pool_region = 'us-east-2';
*/


console.log('SERVER-SIDE Container started '); 
//HOMEPAGE
//HOMEPAGE
app.get('/', function(req, res) {
  console.log('Serverworld - MAIN called me....Function started...');
  let metadata = process.env.ECS_CONTAINER_METADATA_URI_V4 + "/task";
  var url1 = metadata;
  request.get(url1, (error, response, body) => {
    let bodyresp = JSON.parse(body);
     console.log('SERVER-SIDECAR metadata dump ', body); 
     console.log('SERVER-SIDECAR Availability Zone is  bodyresp.Availability ', bodyresp.AvailabilityZone);
     //res.send({ "ServerSideAZ": bodyresp.AvailabilityZone });
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ "ServerSideAZ": bodyresp.AvailabilityZone }, null, 3));
});
 
});

app.listen(ecsport, function () {
    console.log('Serverworld SIDECAR container listening on port ', ecsport);
});


