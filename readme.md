A FiveM dashboard built with Next.js and React, leveraging WebRTC.

__WIP__

## Setup

* Build the web client
	* `cd /snail-server`
	* `npm i && npm run build`
* Create __.env__ in __/snail-server/server__ with the following content

	```
	PORT=3000
	NODE_ENV=production
	MONGO_URL=mongodb://<username>:<password>@<address>/<db>
	SESSION_SECRET=keyboard snail
	APPLICATION_URL=http://localhost:3000
	EMAIL_ADDRESS=<email>@gmail.com
	EMAIL_PASSWORD=<password>
	```
	You can get a free MongoDB database at [https://mlab.com/](https://mlab.com/)

* Add resources to your FiveM server config
	```
	start simple-peer
	start snail-server
	start snail-client
	```

* Have a look at __/snail-client/client.lua__ on how to Register

## Contribute
Pull requests and issues are welcome

***

#### LICENSE MIT
