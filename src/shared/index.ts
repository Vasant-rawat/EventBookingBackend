const express = require("express");
const app = express();
app.get('/', (res: Response, req: Request) => {
  res.json({message:"Hello World"})
})
