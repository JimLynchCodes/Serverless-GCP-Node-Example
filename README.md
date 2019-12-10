# Serverless GCP Node Example
An example of a simple serverless Node.js function meant to be deployed to Google Cloud Platform.


### Node Version
When creating this project I used node version 12.13.1
(uses .nvmrc by default)
```
nvm use
```

install dependencies:
```
nvm use
```

install dependencies:
```
nvm use
```

### Deploying
Before deploying, you will need to set up the GCP SDK. You can do this by first downloading adnr unning the installer here: https://cloud.google.com/sdk/install

(macOS installer): https://cloud.google.com/sdk/docs/downloads-interactive

Once you have downloaded the google cli, initialize it with this command:
```
gcloud init
```

Login with your google credentials and choose "Create a new project".

Add a google keyfile (not totally sure where to get that from) to this folder (using your home directory instead of "Users/jim"):
```
/Users/jim/.gcloud/keyfile.json
```

Run the usual serverless deploy command:
```
sls deploy
```

### Scaffodling
This project was scaffolded with the serverless google nodejs template:
```
sls create --template google-nodejs
```

Run locally with:

```
sls offline start
```

(Note, I'm getting this error though):

Serverless: Starting Offline: dev/us-central1.

Serverless: Routes for first:
 
  Type Error ---------------------------------------------
 
  TypeError: Cannot read property 'startsWith' of undefined
      at ApiGateway._createRoutes (/Users/jim/Git-Projects/Serverless-GCP-Node-Example/node_modules/serverless-offline/src/ApiGateway.js:250:36)
      at fun.events.forEach (/Users/jim/Git-Projects/Serverless-GCP-Node-Example/node_modules/serverless-offline/src/ServerlessOffline.js:480:25)
      at Array.forEach (<anonymous>)
      at Object.keys.forEach (/Users/jim/Git-Projects/Serverless-GCP-Node-Example/node_modules/serverless-offline/src/ServerlessOffline.js:461:18)
      at Array.forEach (<anonymous>)
      at ServerlessOffline._setupEvents (/Users/jim/Git-Projects/Serverless-GCP-Node-Example/node_modules/serverless-offline/src/ServerlessOffline.js:417:41)
      at ServerlessOffline._buildServer (/Users/jim/Git-Projects/Serverless-GCP-Node-Example/node_modules/serverless-offline/src/ServerlessOffline.js:256:10)
      at ServerlessOffline.start (/Users/jim/Git-Projects/Serverless-GCP-Node-Example/node_modules/serverless-offline/src/ServerlessOffline.js:171:33)
      at BbPromise.reduce (/Users/jim/.nvm/versions/node/v11.15.0/lib/node_modules/serverless/lib/classes/PluginManager.js:489:55)
      at tryCatcher (/Users/jim/.nvm/versions/node/v11.15.0/lib/node_modules/serverless/node_modules/bluebird/js/release/util.js:16:23)
      at Object.gotValue (/Users/jim/.nvm/versions/node/v11.15.0/lib/node_modules/serverless/node_modules/bluebird/js/release/reduce.js:168:18)
      at Object.gotAccum (/Users/jim/.nvm/versions/node/v11.15.0/lib/node_modules/serverless/node_modules/bluebird/js/release/reduce.js:155:25)
      at Object.tryCatcher (/Users/jim/.nvm/versions/node/v11.15.0/lib/node_modules/serverless/node_modules/bluebird/js/release/util.js:16:23)
      at Promise._settlePromiseFromHandler (/Users/jim/.nvm/versions/node/v11.15.0/lib/node_modules/serverless/node_modules/bluebird/js/release/promise.js:547:31)
      at Promise._settlePromise (/Users/jim/.nvm/versions/node/v11.15.0/lib/node_modules/serverless/node_modules/bluebird/js/release/promise.js:604:18)
      at Promise._settlePromiseCtx (/Users/jim/.nvm/versions/node/v11.15.0/lib/node_modules/serverless/node_modules/bluebird/js/release/promise.js:641:10)
      at _drainQueueStep (/Users/jim/.nvm/versions/node/v11.15.0/lib/node_modules/serverless/node_modules/bluebird/js/release/async.js:97:12)
      at _drainQueue (/Users/jim/.nvm/versions/node/v11.15.0/lib/node_modules/serverless/node_modules/bluebird/js/release/async.js:86:9)
      at Async._drainQueues (/Users/jim/.nvm/versions/node/v11.15.0/lib/node_modules/serverless/node_modules/bluebird/js/release/async.js:102:5)
      at Immediate.Async.drainQueues (/Users/jim/.nvm/versions/node/v11.15.0/lib/node_modules/serverless/node_modules/bluebird/js/release/async.js:15:14)
      at processImmediate (internal/timers.js:443:21)
      at process.topLevelDomainCallback (domain.js:136:23)
 
     For debugging logs, run again after setting the "SLS_DEBUG=*" environment variable.
 
  Get Support --------------------------------------------
     Docs:          docs.serverless.com
     Bugs:          github.com/serverless/serverless/issues
     Issues:        forum.serverless.com
 
  Your Environment Information ---------------------------
     Operating System:          darwin
     Node Version:              11.15.0
     Framework Version:         1.59.2
     Plugin Version:            3.2.5
     SDK Version:               2.2.1
     Components Core Version:   1.1.2
     Components CLI Version:    1.4.0



### Overall Thoughts
Welp, it was a cool experiment to see how much different the Google Cloud Serverless functions are from the good ole' aws lambda functions that I'm used to. Overall, they weren't all the bad but definitely kind of a pain to get working. AWS is the main hotness and so everything works very smoothly. With GCP you have to jump through a few extra hoops (ie troubleshoot a few extra strange error messages) to get it working. Serverless plugins can be hit or miss (ala the serverless-offline error above). I haven't conducted any serious benchmarks in terms of pricing an costs so I can't really comment on that. If you find yourself working at a company that has to use GCP, serverless functions are definitely a great alternative to spinning up loads and loads of linux boxes although you should brace yourself to walk headfirst into a sandstorm. 😉  