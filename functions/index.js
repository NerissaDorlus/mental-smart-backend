import express from "express";
import functions from "firebase-functions";
import {journalRouter} from "./src/routes/journal-router.js"


const app = express();
app.use(express.json());
app.use("/journals", journalRouter)


//firbase functions
// export const api = functions.https.onRequest(app);

//local
app.listen(3030, () => {
  console.log("Listening on http://localhost:3030...");
});
