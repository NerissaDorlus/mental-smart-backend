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
    const snapshot = await journalCollection.get();
    const journals = snapshot.docs.map((doc) => {
      let journal = doc.data();
      journal.id = doc.id;
      return journal;
    });
    return journals
  } catch (err) {
    console.error(err);
  }
};
