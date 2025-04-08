import { getUser } from "../service/auth.js";

async function restrictToLoggedInUserOnly(req, res, next) {
    // const userUid = req.cookies?.uid;

    const userUid = req.headers['Authorization'];
    console.log(req.headers);

    if (!userUid) return res.redirect("/login")

    const token = userUid.split("Bearer ")[1];

    const user = getUser(token)

    if (!user) return res.redirect("/login")

    req.user = user;
    next();
}

async function checkAuth(req, res, next) {
    console.log(req.headers);
    // const userUid = req.cookies?.uid;

    const userUid = req.headers['Authorization'];
    const token = userUid.split("Bearer ")[1];

    const user = getUser(token)
    req.user = user;
    next();
}

export { restrictToLoggedInUserOnly, checkAuth };