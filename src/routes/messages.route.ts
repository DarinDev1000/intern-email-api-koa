/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  Route to handle root element: return uri's for available resources & note on authentication   */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

'use strict';

// const router = require('koa-router')(); // router middleware for koa
const messages = require('../models/messages.model');

import * as Router from "koa-router";
// import * as sample from "../models/sample.model";

const router: Router = new Router();

router.prefix('/message');

router.get('/get', messages.getMessages);
router.post('/add', messages.addMessages);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

module.exports = router.middleware();
// export default router.routes();
