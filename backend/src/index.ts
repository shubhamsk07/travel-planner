
import express, { Router } from "express"
import cors from "cors"
import { authRouter } from "./routes/authRouter";
const app = express();
const PORT =3000;
export const JWT_SECRET='secret';

declare global {
    namespace Express {
      interface Request {
        userId?:String
      }
    }
  }


app.use(express.json())
app.use(cors())

app.use("/api/v1/auth",authRouter)





app.listen(3000,()=>{
    console.log(`The server is running on : http://localhost:${PORT}`)
})