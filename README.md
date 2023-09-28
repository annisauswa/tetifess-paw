# tetifess
<div align="center">
  <img src="https://github.com/annisauswa/tetifess-paw/assets/24343313/4c16b078-27bd-4bfd-91ff-47d0e24d6e8e" alt="tetifess" width="40%">
  <p>API Documentation of tetifess, a platform designed for DTETI community to confess and share their thoughts anonymously</p>
</div>

## 📜 Dokumentasi API
> dapat dilakukan dari link Postman berikut: https://documenter.getpostman.com/view/29987436/2s9YJZ44ud

## 📁 Folder Structure
    .
    ├── server                   # for server-side containing backend APIs
    │    ├── controller           # define function logic
    │    ├── model                # define object schema
    │    ├── routes               # define routes to access APIs
    │    ├── middleware           # middleware to verify token for authentication and verify admin for authorization
    │    ├── server.js            
    │    ├── .env                 # define backend PORT, JWT SECRET, and MONGO_URI
    │    └── package.json
    ├── frontend                 # for client side
    ├── .gitignore               # ignore some files (ex: node module, package-lock.json)
    ├── package.json             
    ├── package-lock.json        
    └── README.md

## 🖥 Persiapan Server

Clone Repository
  ```
  git clone
  ```

Run Server
  ```
  
  // access server directory
  cd ./server
  
  // install dependencies
  npm install
  
  // run nodemon server.js
  npm run dev
  
  ```

Server Running on
  ```
  localhost:5001
  ```

## 👨‍💻 Contributor
  1. Annisa Uswa Sufia &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;21/475357/TK/52474 <br>
  2. Fransiscus Marselino Handoyo&emsp;&emsp;&emsp;&emsp;21/474984/TK/52444 <br>
  3. Izzat Arroyyan &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 21/477795/TK/52626 <br>
  5. Raditya Christoaji Ballandean Prabowo &nbsp; 21/481218/TK/53115 <br>
  6. Rico Frijaya S. Pane &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 21/480631/TK/53032 <br>
