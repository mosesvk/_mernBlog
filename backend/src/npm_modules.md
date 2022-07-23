The following npm modules were installed chronologically for the Backend

  - express 
      node.js library enhances Routing/HTTP requests
  - @babel/core @babel/node @babel/preset-env 
      Babel allows us to easily compile ES6 code to older versions (usually ES5), because it has better browser support
  - body-parser 
      allows server to extract JSON data that we send along with out request
  - nodemon
      senses when backend files change and automatically restarts the server

      command: 'npx nodemon --exec npx babel-node src/server.js'

  