# Installation
- Create MySQL Database: `nodejs_react_simple_login_db`
- Run `npm install`
- Run `node server.js`

# Test
- `npm test`

# Create New User
`http://localhost:3001/api/auth/signup`

    {
        "username": "admin",
        "email": "admin@localhost.local",
        "password": "admin",
        "roles": ["admin"]
    }

# List Roles
 - `admin`
 - `user`

# Basic Sign In
`http://localhost:3001/api/auth/signin`

    {
        "username": "test",
        "password": "test"
    }
Example Result:

    {
        "id": 1,
        "username": "admin",
        "email": "admin@localhost.local",
        "roles": [
            "ROLE_ADMIN"
        ],
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjY1NjQ3MjM3LCJleHAiOjE2NjU3MzM2Mzd9.dgmO7eoBLde45e4aqmegsKvoD-WJxb0fk9jkZimheWw"
    }