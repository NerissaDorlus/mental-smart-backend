import admin from "firebase-admin"
import serviceAccount from '../credentials-ui.js' 

const mentalSmartUi = admin.initializeApp(
  {
    credential: admin.credential.cert(serviceAccount),
  },
  "mental-smart"
);

export const authorize  = async (req, res, next) =>  {
    //checks token
    const jwt = req.headers.authorization
    if(!jwt){
        res.status(403).send("Unauthorized Request")
        return
    }
    try{

        const user  = await admin.auth(mentalSmartUi).verifyIdToken(jwt)
        //storage
        res.locals.user = user;
        next();
    } catch(e){
        res.status(403).send("Unauthorized Request")
    }
}