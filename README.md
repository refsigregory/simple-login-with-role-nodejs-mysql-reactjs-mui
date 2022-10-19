# Getting Started
Simple Login with Role Access by Ref.si
## Installation guide
Docker:
- Run `docker-compose up -d`
- Open `http://localhost:3000`

Manual Install:
### DB
 - Update MySQL config in `/backend/app/config/db.config.js` 
 - Create MySQL Database: `nodejs_react_simple_login_db` (if not exists)
### BE
- `cd backend`
- `npm install`
- `node server.js`
### FE
- `cd ..`
- `npm install`
- `npn start`

 ## Start App
 Docker:
- Run `docker-compose up`
- Open `http://localhost:3000`

 Manual:
 - `npm start`
 - `npm run server`
 - Open `http://localhost:3000`

 ## Test
 - `npm test`

 # Starter User (Auto Generated)
 ## Admin:
 - username: admin
 - password: password
 ## User
 - username: user
 - password: password