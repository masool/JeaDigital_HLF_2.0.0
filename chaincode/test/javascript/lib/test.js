'use strict';
const { Contract} = require('fabric-contract-api');
class test extends Contract {
  async init(ctx) {
  
    console.log("<== test Chaincode==>");
    
     }
}

module.exports = test;