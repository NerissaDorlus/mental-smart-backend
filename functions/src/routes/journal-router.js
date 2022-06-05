import { Router } from "express";
import { addJournal, getAllJournals } from "../services/journal-services.js";

export const journalRouter = new Router();

journalRouter.post("/", async (req, res) => {
  if (!req.body || !req.body.feeling || !req.body.willTalkTo) {
    res.status(401).send("❌Invalid request❌");
    return;
  }
  const newJournal = {
    feeling: req.body.feeling,
    willTalkTo: req.body.willTalkTo,
  };
  await addJournal(newJournal);
  res.status(201).send("Success");
});

journalRouter.get("/", async (req, res) => {
  const journals = await getAllJournals();
  res.status(200).send(journals);
});
