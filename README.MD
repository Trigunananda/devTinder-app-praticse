# 🚀 Node.js Project Setup Guide

This guide explains how to:

* Initialize a Node.js project
* Initialize Git repository
* Create MongoDB Atlas database
* Connect MongoDB with Compass & Node.js
* Whitelist IP in MongoDB Atlas
* Push project to GitHub
* Run the application

---

# 📁 1. Create Project & Initialize Node.js

```bash
mkdir my-node-app
cd my-node-app
npm init -y
```

This will create a `package.json` file.

---

# 🔧 2. Initialize Git Repository

```bash
git init
```

Create basic files:

```bash
touch index.js .gitignore
```

Add this inside `.gitignore`:

```
node_modules/
.env
```

---

# ☁️ 3. Create MongoDB Atlas Database

1. Go to MongoDB Atlas website
2. Create a free cluster
3. Create a database user (username & password)
4. Create a database (e.g., `myDatabase`)

---

# 🔐 4. Whitelist IP Address

1. Go to **Network Access**
2. Click **Add IP Address**
3. Select:

```
0.0.0.0/0   (Allow access from anywhere)
```

OR add your current IP.

---

# 🔗 5. Get Connection String

1. Go to **Clusters → Connect**
2. Select **Connect your application**
3. Copy connection string:

```
mongodb+srv://<username>:<password>@cluster.mongodb.net/myDatabase
```

Replace:

* `<username>` → your DB username
* `<password>` → your DB password

---

# 💻 6. Connect MongoDB in Node.js

Install mongoose:

```bash
npm install mongoose
```

Add this in `index.js`:

```js
const mongoose = require("mongoose");

mongoose.connect("your_connection_string")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
```

---

# 🧪 7. Connect with MongoDB Compass (Local Tool)

1. Open MongoDB Compass
2. Paste same connection string
3. Click **Connect**

---

# 🌐 8. Create Repository on GitHub

1. Go to GitHub
2. Click **New Repository**
3. Use SAME project name: `my-node-app`

---

# 🔗 9. Connect Local Repo to GitHub

```bash
git remote add origin https://github.com/your-username/my-node-app.git
git branch -M main
git add .
git commit -m "Initial commit"
git push -u origin main
```

---

# ▶️ 10. Run the Application

```bash
node index.js
```

OR if using nodemon:

```bash
npm install -g nodemon
nodemon index.js
```

---

# 📦 Project Structure

```
my-node-app/
│
├── node_modules/
├── package.json
├── index.js
├── .gitignore
└── README.md
```

---

# ✅ Summary

* Initialize Node.js → `npm init -y`
* Initialize Git → `git init`
* Create MongoDB Atlas → cluster + user
* Whitelist IP → allow access
* Connect DB → mongoose
* Push to GitHub → remote + push
* Run app → `node index.js`

---

# 💡 Notes

* Keep credentials in `.env` file (recommended)
* Never push `.env` to GitHub
* Use `nodemon` for development

---

# 🎯 Author

Triguna


