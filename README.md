## Blockchain Network V2.0.0

A sample Node.js app to demonstrate **__fabric-client__** & **__fabric-ca-client__** Node.js SDK

### Prerequisites and setup:

* [Docker](https://www.docker.com/products/overview) - v1.12 or higher
* [Docker Compose](https://docs.docker.com/compose/overview/) - v1.8 or higher
* [Git client](https://git-scm.com/downloads) - needed for clone commands
* **Node.js** v8.4.0 or higher
* [Download Docker images](http://hyperledger-fabric.readthedocs.io/en/latest/samples.html#binaries)

Once you have completed the above setup, you will have provisioned a local network with the following docker container configuration:

* 3 CAs
* 5 Orderers
* 3 Organisations
* 1 Channel
* 6 peers (2 peers per Org)
* 6 Couchdb(1 Couchdb per peer)

#### Artifacts
* Crypto material has been generated using the **fabric ca** from Hyperledger Fabric and mounted to all peers, the orderering node and CA containers. More details regarding the cryptogen tool are available [here](http://hyperledger-fabric.readthedocs.io/en/latest/build_network.html#crypto-generator).
* An Orderer genesis block (genesis.block) and channel configuration transaction (mychannel.tx) has been pre generated using the **fabric ca** tool from Hyperledger Fabric and placed within the artifacts folder. More details regarding the configtxgen tool are available [here](http://hyperledger-fabric.readthedocs.io/en/latest/build_network.html#configuration-transaction-generator).

### Running this network

Note:  This repo guide you how to run HLF network with above mentioned network requirements,  there is no chaincode written and deployed.

If chaincodes are ready then follow from below steps else start from "Terminal Window 1" section.

# How to deploy chaincode and run

1) Place chaincode file in to chaincode/test/javascript/lib.
2) Go to test-network/scripts/deployCC.sh script and paste "CC_SRC_PATH" as your chaincode path.
3) Go to startFabric.sh script and comment out last line("# sudo ./network.sh deployCC -l javascript) and follow below steps.

##### Terminal Window 1

## Start network

```
cd JeaDigital_HLF_2.0.0

chmod 777 startFabric.sh

./startFabric.sh

```

* This launches the required network on your local machine
* Installs the fabric-client, fabric-ca-client and couchdbnode modules
* And, starts the node app and access couchdb on http://127.0.0.1:5984/_utils


## Stop network

```
chmod 777 stopFabric.sh

./stopFabric.sh

```

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
