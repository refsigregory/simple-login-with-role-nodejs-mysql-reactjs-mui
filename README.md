# Getting Started
Simple Login with Role Access by Ref.si
## Installation guide
Docker:
- Run `docker-compose up -d`
- Open: `localhost:3000`

Manual Install:
### DB
 - Update MySQL config in `/backend/app/config/db.config.js` 
 - Create MySQL Database: `nodejs_react_simple_login_db`
### BE
- `cd backend`
- `npm install`
- `node server.js`
### FE
- `cd ..`
- `npm install`
- `npn start`

 ## Start App Guide
 - `npm start`
 - `npm run server`

 ## Test
 - `npm test`

 # Starter User (Auto Generated)
 ## Admin:
 - username: admin
 - password: password
 ## User
 - username: user
 - password: password