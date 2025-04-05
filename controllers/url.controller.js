import { nanoid } from "nanoid";
import { URL } from "../models/url.model.js";


async function handleGenerateNewShortURL(req, res) {
    const body = req.body;

    if (!body.url) return res.status(400).json({ error: "url is required" })

    const shortID = nanoid(8);

    // create entry in db
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: req.user._id
    });

    // return res.status(200).json({ id: shortID })
    return res.render('home', { id: shortID })
}

async function getShortId(req, res) {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
        { shortId }, // Ensure it's searching for a string
        { $push: { visitHistory: { timestamp: Date.now() } } },
        { new: true } // Use `new: true` to return the updated document
    );

    if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
    }

    res.redirect(entry.redirectURL);
}

async function getUserAnalytics(req, res) {
    const shortId = req.params.shortId;

    const result = await URL.findOne({ shortId });

    if (!result) {
        return res.status(404).json({ error: "Short URL not found" });
    }

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    });
}


export { handleGenerateNewShortURL, getShortId, getUserAnalytics }