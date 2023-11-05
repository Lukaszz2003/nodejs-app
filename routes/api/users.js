import { Router } from "express"
import {
  current,
  login,
  logout,
  singUp,
  subscription,
} from ("../../controllers/index.js");


export const router = Router();

router.post('/signup', usersPostSchema, signup);
router.post('/login', usersPostSchema, login);
router.get('/logout', auth, logout);
router.get('/current', auth, current);
router.patch('/', auth, usersSubscSchema, subscription);

module.exports = router;
