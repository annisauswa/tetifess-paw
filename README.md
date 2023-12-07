# tetifess
<div align="center">
  <img src="https://github.com/annisauswa/tetifess-paw/assets/24343313/4c16b078-27bd-4bfd-91ff-47d0e24d6e8e" alt="tetifess" width="40%">
  <p>Documentation of tetifess, a platform designed for DTETI community to confess and share their thoughts anonymously</p>
</div>

## Tugas Akhir

- **Link Video Presentasi:** [Video Presentasi]()

- **Link Slide PPT:** [Slide PPT](https://docs.google.com/presentation/d/1OLaPbvqI3LGuKNzKPCj0tnMb0-dWucu9wVIEC3GLuSM/edit?usp=sharing)

- **Link Webapp:** [Tetifess](https://tetifess-paw.vercel.app/)


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
    ├── client                   # for application front end
    |    ├── app                 # main application logic
    |    ├── components          # reusable UI components
    |    ├── public              # public assets
    |    ├── utils               # utility functions
    |    ├── .env                # define client-side environment variables
    |    ├── .eslintrc.json      # ESLint configuration
    |    ├── .gitignore          # ignore specific files in Git
    |    ├── .prettierignore     # ignore files for Prettier
    |    ├── .prettierrc         # Prettier configuration
    |    ├── jsconfig.json       # JavaScript configuration for Visual Studio Code
    |    ├── next.config.js      # Next.js configuration
    |    ├── package.json        # front-end dependencies and scripts
    |    ├── postcss.config.js   # PostCSS configuration
    |    ├── tailwind.config.js  # Tailwind CSS configuration
    ├── .gitignore               # ignore some files (ex: node module, package-lock.json)
    ├── package.json             
    ├── package-lock.json        
    └── README.md

## 🖥 Setup Aplikasi

Clone Repository
  ```
  git clone
  ```

Run Server
  ```
  
  // access frontend directory
  cd ./client
  
  // install dependencies
  npm install
  
  // run aplikasi
  npm run dev
  
  ```

Server Running on
  ```
  localhost:3000
  ```

## 📜 Dokumentasi API
> Dokumentasi API dari tetifess tersedia pada laman postman berikut : https://documenter.getpostman.com/view/29987436/2s9YJZ44ud

## 🖥 Persiapan Server (Backend)

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
