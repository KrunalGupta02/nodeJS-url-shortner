import { User } from "../models/user.model.js";
import { v4 as uuidv4 } from 'uuid';
import { setUser } from "../service/auth.js";


async function handleUserSignUp(req, res) {
    const { name, email, password } = req.body;

    await User.create({ name, email, password })

    // return res.render('home');
    return res.redirect("/");
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
        return res.render('login', { error: "Invalid email or password" })
    }

    // const sessionId = uuidv4();
    // setUser(sessionId, user)

    const token = setUser(user)

    res.cookie('token', token)

    return res.redirect("/");
}


export { handleUserSignUp, handleUserLogin }