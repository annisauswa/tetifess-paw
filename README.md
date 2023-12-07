<br/>
<div align="center">
  <img src="https://github.com/annisauswa/tetifess-paw/assets/24343313/4c16b078-27bd-4bfd-91ff-47d0e24d6e8e" alt="tetifess" width="40%">
  <h1 align="center">TETIFESS</h1>
  <h2>Documentation of tetifess, a platform designed for DTETI community to confess and share their thoughts anonymously</h2>

  <p align="center">
    <a href="https://github.com/annisauswa/tetifess-paw/issues">Report Bug</a>
    ·
    <a href="https://github.com/annisauswa/tetifess-paw/issues">Request Improvement</a>
  </p>
</div>
<br />

## 📌 Table of Contents
1. [Contributors](#contributors)
2. [Important Links](#links)
3. [About Tetifess](#about-tetifess)
4. [Documentation - How to run in local](#setup-doc)

   a. [Setup Client](#client)
       
   b. [Setup Server](#server)


<a name="contributors"></a>

## 👨‍💻 Contributor
| Nama | NIM | GitHub Profile |
| --- | --- | --- |
| Annisa Uswa Sufia | 21/475357/TK/52474 | [annisauswa](https://github.com/annisauswa) |
| Fransiscus Marselino Handoyo | 21/474984/TK/52444 | [ethankuning](https://github.com/ethankuning) |
| Izzat Arroyyan | 21/477795/TK/52626 | [izzatarroyyan12](https://github.com/izzatarroyyan12) |
| Raditya Christoaji Ballandean Prabowo | 21/481218/TK/53115 | [Rexiar](https://github.com/Rexiar) |
| Rico Frijaya S. Pane | 21/480631/TK/53032 | [ricofrijayaspane](https://github.com/ricofrijayaspane) |

<a name="links"></a>

## 🔗 Important Links
| Name | Link |
| --- | --- |
| Webapp Deployed | [tetifess-paw.vercel.app](https://tetifess-paw.vercel.app/) |
| API Deployed | [tetifess-paw-api.vercel.app](https://tetifess-paw-api.vercel.app/) |
| API Postman Documentation | [postman-documentation](https://documenter.getpostman.com/view/29987436/2s9YJZ44ud) |
| Video Presentasi & Demo | [Video Presentasi](https://drive.google.com/file/d/1GWRhIIey6zKgvl9mv93bylqTzbeoruOB/view?usp=sharing) |
| Slide PPT | [Slide PPT](https://docs.google.com/presentation/d/1OLaPbvqI3LGuKNzKPCj0tnMb0-dWucu9wVIEC3GLuSM/edit?usp=sharing) |

<a name="about-tetifess"></a>

## 💬 About Tetifess 

### Quick Introduction
> TETIFESS is a purpose-built platform for the community of DTETI (Department of Electrical Engineering and Information Technology) to express themselves freely, confess thoughts, and share experiences anonymously. This unique space provides an avenue for individuals within the DTETI community to connect, unburden their thoughts, and foster a sense of camaraderie.

### Main Feature
![image](https://github.com/annisauswa/tetifess-paw/assets/91132619/1ee6787d-7077-4699-bd09-be5f191c607a)
- Authentication
- Homepage
- Profile Page
- Like Unlike a Post
- Search Page
- Dashboard (admin access only)

### Tech Stack
- Nodejs
- Nextjs
- Tailwind CSS
- Expressjs
- MongoDB Atlas
- Vercel

### Folder Structure 📁 
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

<a name="setup-doc"></a>

## 🖥 Documentation - How to run in local
Clone Repository
  ```
  git clone https://github.com/annisauswa/tetifess-paw.git
  ```

<a name="client"></a>

### Setup Client (Frontend) 🌐
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

<a name="server"></a>

### Setup Server (Backend) 💻
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


