import { Router } from "express";
import { AnswerController } from "./controllers/AnswerController";
import { NPSController } from "./controllers/NPSController";
import { SenMailController } from "./controllers/SenMailController";
import SurveyController from "./controllers/SurveyController";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController()
const surveyController = new SurveyController()
const surveysUsersController = new SenMailController()
const answerController = new AnswerController()
const npsController = new NPSController()

router
    .post('/users', userController.create)
    .post('/surveys', surveyController.create)
    .get('/surveys', surveyController.show)
    .post('/sendMail', surveysUsersController.execute)
    .get('/answers/:value', answerController.execute)
    .get('/nps/:survey_id', npsController.execute)

export { router }