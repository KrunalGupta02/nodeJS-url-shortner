import { Router } from "express";
import { URL } from "../models/url.model.js";

const router = Router();

router.get('/', async (req, res) => {
    if (!req.user) return res.redirect('/login');

    // The code retrieves all URLs created by the logged-in user, sorts them by newest first, and renders them on the home page.
    const allUrls = await URL.find({ createdBy: req.user._id }).sort({ createdAt: -1 }).lean().exec()

    return res.render('home', { urls: allUrls })
})

router.get('/signup', (req, res) => {
    return res.render('signup')
})

router.get('/login', (req, res) => {
    return res.render('login')
})

export default router;