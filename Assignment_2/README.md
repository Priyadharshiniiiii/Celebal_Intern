# Node.js File Management Tool (Core Modules)

A simple HTTP-based file management tool built using **Node.js core modules**. This assignment helps understand how to use the `fs`, `path`, and `http` modules effectively.

## Features

- Create a file with custom content
- Read content from a file
- Delete a file

## Core Modules Used

- `fs`: File operations (create, read, delete)
- `path`: Resolves file paths
- `http`: Handles server and routing
- `url`: Parses query parameters

## How to Use

1. Run the server:

```bash
node server.js

```

2. Use your browser or tools like Postman or curl to test:

   ->  Create a File
   ``` bash
   GET http://localhost:3000/create?filename=test.txt&content=HelloWorld
   ```

  ![image](https://github.com/user-attachments/assets/6f031d89-f2f0-4a84-bba5-51a6d7ae43cd)

   
   -> Read a file
   ```bash
   GET http://localhost:3000/read?filename=test.txt
   ```

  ![image](https://github.com/user-attachments/assets/e81e5b06-faa2-4820-911e-a94270b8c7c3)


   -> Delete a file
   ```bash
   GET http://localhost:3000/delete?filename=test.txt
   ```

  ![image](https://github.com/user-attachments/assets/172b974c-1619-4ce6-8919-0582e0b0a109)





