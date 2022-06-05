import connectDb from "../db/connectDb";

const userCollection = connectDb().collection("users");

export const addUser = async (newUser) => {
  try {
    const doc = await userCollection.add(newUser);
  } catch (err) {
    console.error(err);
  }
};

export const getAllUsers = async () => {
  try {
    const snapshot = await userCollection.get();
    return snapshot.docs.map((doc) => {
      let users = doc.data();
      users.id = doc.id;
      return usersArray;
    });
  } catch (err) {
    console.error(err);
  }
};
