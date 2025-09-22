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
