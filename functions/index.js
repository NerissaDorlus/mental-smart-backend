import express from "express";
import functions from "firebase-functions";
import {journalRouter} from "./src/routes/journal-router.js"
import cors from "cors"
// import { authorize } from "./src/authorization.js";

// import { userRouter } from "./src/routes/user-router.js";


const app = express();

app.use(cors());
app.use(express.json());
// app.use(authorize);
app.use("/journals", journalRouter);

// app.use("/users", userRouter )


//firebase functions
// export const api = functions.https.onRequest(app);

//local
app.listen(3030, () => {
  console.log("Listening on http://localhost:3030...");
});
