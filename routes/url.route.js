import { Router } from "express";
import { getShortId, getUserAnalytics, handleGenerateNewShortURL } from "../controllers/url.controller.js";

const router = Router();

router.route("/").post(handleGenerateNewShortURL);

router.route('/:shortId').get(getShortId);

router.route('/analytics/:shortId').get(getUserAnalytics)


export default router;