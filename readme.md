A fiveM dashboard built with next.js and react, leveraging webrtc.

WIP

## Setup

* Build the web client
		cd /snail-server
		npm i && npm run build
* Create __.env__ in __./server__

	```
	PORT=3000
	MONGO_URL=mongodb://<username>:<password>@<address>/<db>
	SESSION_SECRET=keyboard snail
	APPLICATION_URL=http://localhost:3000
	GAME_URL=fivem://connect/localhost:30120
	EMAIL_ADDRESS=<email>@gmail.com
	EMAIL_PASSWORD=<password>
	```
	You can get a free MongoDB database at [https://mlab.com/](https://mlab.com/)

* Add resources to your fiveM server config
	```
	start simple-peer
	start snail-server
	start snail-client
	```

* Have a look at /snail-client/client.lua on how to Register

## Contribute
Pull requests and issues are welcome


#### LICENSE MIT
