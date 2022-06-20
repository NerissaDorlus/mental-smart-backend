// import { } from "firebase-admin/firestore"
import admin from "firebase-admin";
import { Router } from "express";
import { addJournal, getAllJournals } from "../services/journal-services.js";

export const journalRouter = new Router();

journalRouter.post("/", async (req, res) => {
  if (!req.body || !req.body.feeling || !req.body.willTalkTo) {
    res.status(401).send("❌Invalid request❌");
    return;
  }  

  let timestamp = admin.firestore.FieldValue.serverTimestamp();


  const newJournal = {
    feeling: req.body.feeling,
    willTalkTo: req.body.willTalkTo,
    entryDate: timestamp
    
  };

  const { inputedEmail } = req.body

  if(inputedEmail){
    newJournal.email  = inputedEmail
  }

  const {userName} = req.body

  if(userName){
    newJournal.displayName = userName
  }
  
  
  await addJournal(newJournal);
  res.status(201).send("Success");
});

journalRouter.get("/", async (req, res) => {
  const journals = await getAllJournals();
  res.status(200).send(journals);
});
