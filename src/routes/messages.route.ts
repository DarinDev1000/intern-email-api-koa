/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  Route to handle root element: return uri's for available resources & note on authentication   */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

'use strict';

// const router = require('koa-router')(); // router middleware for koa
const messages = require('../models/messages.model');

// import * as router from "koa-router";
// import * as sample from "../models/sample.model";

router.get('/message/get', messages.getMessages);
router.post('/message/add', messages.addMessages);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

module.exports = router.middleware();
