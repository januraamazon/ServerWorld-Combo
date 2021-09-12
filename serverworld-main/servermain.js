
//Serverworld:Servermain REAL - This file has to change
'use strict';
const ecsport = 80;
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



//HOMEPAGE


  let metadata = process.env.ECS_CONTAINER_METADATA_URI_V4 + "/task";
  var url1 = metadata;
  request.get(url1, (error, response, body) => {
    let bodyresp = JSON.parse(body);
     console.log('SERVER-MAIN metadata dump ', body); 
   console.log('SERVER-MAIN Availability Zone is  bodyresp.Availability ', bodyresp.AvailabilityZone);
   
 
  
});

console.log('Calling Serverside from Servermain container.... '); 
var urlside = 'http://localhost:8080/';
request.get(urlside, (error, response, body) => {
    //BODYRESP does not work. Direct BODY works
   let bodyresp = JSON.parse(body);
   //console.log('Response from Serverside Container in Servermain BODYRESP JSON', bodyresp); 
   //console.log('Response from Serverside Container in Servermain BODY JSON', body); 
   //let ServersideAZ = JSON.parse(body.ServerSideAZ);
   //console.log('SERVERSIDE Availability Zone received is bodyresp AZ ', bodyresp.ServerSideAZ);
   console.log('SERVERSIDE Availability Zone received is body AZ ', bodyresp.ServerSideAZ);
   
 
  
});

app.listen(ecsport, function () {
    console.log('Serverworld MAIN listening on port ', ecsport);
});


