# 👀 isntanime-api
A RESTFUL API application built and developed with the aim of personal learning.

## Get Started
Some ways to develop this project on your own device

### Git Clone

First and foremost you have to clone this repo by running the following command:

```sh
git clone https://github.com/isntazis/isntanime-api
```
</br>

Once done of clone the repo you have to installing all dependencies needed just by typing the following command:

```sh
pnpm install
```
</br>

### Starting developmont mode  

If you have finished cloning this repo, the next step is the installation process for dependencies.

Once done of those process, make sure you have to running this project on development mode by typing this line in your own terminal

```sh
pnpm run dev
```

Once finished, make sure you check the log on the terminal.

for example log process:  
```Server listening at http://localhost:5000```

Then you open your own browser by typing:

<pre>
  http://localhost:[port]/checkhealth
</pre>
</br>

### Starting unit testing  

The next step After development mode is testing mode, which aims to analyze and check the errors of code.  

To start testing mode just by typing these lines on your terminal:

```sh
// unit test
pnpm run test:unit

// integration test
pnpm run test:e2e
```
</br>

### Starting production mode  

After completing development and testing mode, the next process is production mode.  

To start production mode just by typing these lines on your terminal:

```sh
// lint
pnpm run lint

// formatting
pnpm run format

// building
pnpm run build
```
</br>

## Technologies
These are some of the technologies which i used to build this project.

- PNPM  
PNPM (Performant NPM) is a package manager for Node.js that is designed to be more efficient and faster than other package manager

- Node.js  
Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.

- Express.js  
Express is a web application framework for Node.js that helps developers build web and mobile applications. It's a popular framework that's used to create single-page, multipage, and hybrid web applications.

- TypeScript  
TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.

- PostgreSQL  
PostgreSQL is a free, open-source database management system (RDBMS) that's known for its reliability, flexibility, and support of open technical standards

and other libraries or dependencies.
