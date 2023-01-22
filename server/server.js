// Load env variables
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
  }
  
  // Import dependencies
  const express = require("express");
  const cors = require("cors");
  const cookieParser = require('cookie-parser');
  const ConnectionDb = require("./connection/Connectiondb");
  const notesController = require("./controllers/notesController");
  const usersController= require("./controllers/usersController");
  const requireAuth=require("./middleware/requireAuth")

  // Create an express app
  const app = express();
  
  // Configure express app
  app.use(express.json());
  app.use(cookieParser());
  app.use(cors({
    origin:true,
    credentials:true,
  }));
  
  // Connect to database
  ConnectionDb();
  
  // Routing
  app.post("/signup",usersController.signup);
  app.post("/login",usersController.login);
  app.get("/logout",usersController.logout);
  app.get("/checkauth", requireAuth, usersController.checkAuth);
  
  app.get("/notes",requireAuth, notesController.fetchNotes);
  app.get("/notes/:id",requireAuth, notesController.fetchNote);
  app.post("/notes",requireAuth, notesController.createNote);
  app.put("/notes/:id", requireAuth,notesController.updateNote);
  app.delete("/notes/:id",requireAuth, notesController.deleteNote);
  
  // Start our server
  app.listen(process.env.PORT);