# Express PostgreSQL API

A simple **REST API** built with **Node.js**, **Express**, and **PostgreSQL**.  
This API supports user registration, login, managing organisations, and linking users to organisations.

---

## 
- Node.js & Express  
- PostgreSQL (`pg` library)  
- JWT for authentication  
- password hashing  
- dotenv for environment variables
---

##
1. Clone the project:

```bash
git clone <your-repo-url>
cd node-express-postgresql-api
```
2. Install dependencies:

3. Create a .env file in the root folder and add:

PORT=3000
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_PORT=5432
JWT_SECRET=your_jwt_secret

4. Start the server:
```bash
npm run dev
```
### How to test API in Bruno or POSTMAN including which fields to fill for each endpoint

1. Load the server 
npm run dev

Open Bruno or Postman

2. Run database migrations

Method: ANY

URL: http://localhost:3030/migrate
Headers: None
Body: None
Response should be:
{ "message": "migrated successfully" }

3. Register a new user
Method: POST
URL: http://localhost:3030/auth/register
Headers: Content-Type: application/json
Body (JSON):
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "mypassword",
  "phone": "1234567890"
}

Response: JSON containing accessToken and user object.
Copy the accessToken to use for other requests.

4. Login an existing user
Method: POST
URL: http://localhost:3030/auth/login
Headers: Content-Type: application/json
Body (JSON):
{
  "email": "alex@example.com",
  "password": "mypassword"
}

Response: JSON containing a new accessToken.

All /api/* endpoints require a JWT token

Go to Headers - Add:
Authorization: Bearer TOKEN

6. Get user by ID
Method: GET
URL: http://localhost:3030/api/users/1

Headers: Authorization with token
Body: None

Replace 1 with the userI