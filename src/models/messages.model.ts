//const middleMVP = require("../services/middle.service");

class Messages {

  static async getMessages(ctx) {
    try {
      const text = "This is a sample test";
      ctx.body = text;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
  
  static async addMessages(ctx) {
    try {
      const json = {
        message: "This is a sample message",
        format: "json",
        users: [
            {
              id: 1658,
              name: 'test Name'
            },
            {
              id: 6578,
              name: 'some Name'
            },
            {
              id: 9823,
              name: 'the saying'
            },
            {
              id: 1572,
              name: 'api'
            }
          ]
        };
      ctx.body = json;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  // static async function1(ctx) {
  //   try {
  //     const [results] = await global.db.query(`select * from users`);
  //     ctx.body = results;
  //   } catch (e) {
  //     console.log(e);
  //     throw e;
  //   }
  // }

  // static async function2(ctx, next) {
  //   ctx.state = {
  //     session: this.session,
  //     title: 'app'
  //   };

}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

module.exports = Sample;