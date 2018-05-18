# jalmari-bot


Jalmari Bot is bot designed to Discord VoIP software. I'm sure there is lot of these bot's but hey, why not build own?


Bot is build with Javascript and runs on NodeJS.

## Installation, running and deployment
### Node install
> npm install
> npm run watch

Bot should now login to your Discord server.

### Deployment to Docker
Remember to have ***docker-ce*** package installed and running at your server or machine first! More info about that can be found at [Docker official docs](https://docs.docker.com/install/).

Navigate to folder where the bot is located.
Run following commands:
> docker build -t jalmari-bot .
>
> docker run -d jalmari-bot

Check out is the bot running
> docker ps

Bot should now login to your Discord server.