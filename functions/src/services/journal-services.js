import connectDb from "../db/connectDb.js";

const journalCollection = connectDb().collection("journals");

export const addJournal = async (newJournal) => {
  try {
    const doc = await journalCollection.add(newJournal);
  } catch (err) {
    console.error(err);
  }
};

export const getAllJournals = async () => {
  try {
  //capturing all off the journal collection
    const snapshot = await journalCollection.get();
  //accessing just the data I entered
    const journals = snapshot.docs.map((doc) => {
      let journal = doc.data();
      journal.id = doc.id;
      return journal;
    });
  //returning an array of journal entries
    return journals
  } catch (err) {
    console.error(err);
  }
};
