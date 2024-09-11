import express from "express"
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express();

// Middelware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY

// Option 1: Allow all the origins with default of cors(*)
app.use(cors());


// Option 2: Allow custom origins
// app.use(cors({
//   origin:'http://localhost:3000',
//   methods: ['GET','POST','PUT','DELETE'],
//   allowedHeaders: ['Content-Type'],
// }))

app.get('/', (request, response)=>{
  console.log(request)
  return response.status(234).send('Tutorial')
});

app.use('/books', booksRoute)


mongoose.connect(mongoDBURL).then(()=> {
  console.log('connected')

  app.listen(PORT, () =>{
    console.log(`listening to port: ${PORT}`)
  })
}).catch((err) =>{
  console.log(err);
})



