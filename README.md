**Make sure you have mongodb installed**  
`brew install mongodb`  

Make sure the default mongo directory exists and that you have r+w access...  
`mkdir -p /data/db`  
`sudo chown -R $(whoami) /data`

**Get the code**  
`git clone git@github.com:mikekavouras/apt-logger.git`  

**Start your mongo process**  
`mongod`

**Setup**  
`npm install`    
`npm start`  

**Use it**  
`http://localhost:3000`  
