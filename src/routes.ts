import { Router } from "express";
import { SenMailController } from "./controllers/SenMailController";
import SurveyController from "./controllers/SurveyController";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController()
const surveyController = new SurveyController()
const surveysUsersController = new SenMailController()

router
    .post('/users', userController.create)
    .post('/surveys', surveyController.create)
    .get('/surveys', surveyController.show)
    .post('/sendMail', surveysUsersController.execute)

export { router }