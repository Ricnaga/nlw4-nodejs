import { Router } from "express";
import SurveyController from "./controllers/SurveyController";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController()
const surveyController = new SurveyController()

router
    .post('/users', userController.create)
    .post('/surveys', surveyController.create)
    .get('/surveys', surveyController.show)

export { router }