'use strict';
const { Resend } = require('resend');

/**
 * A set of functions called "actions" for `email`
 */

const resend = new Resend('re_ivwaXX23_49C3MMsU23gJMMqDJe7bk5eDre_ivwaXX23_49C3MMsU23gJMMqDJe7bk5eD');
module.exports = {
  sendEmail: async (ctx) => {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['juanda.bravo98@gmail.com'],
      subject: 'Hello World',
      html: '<strong>It works!</strong>',
    });
  
    if (error) {
      console.error({ error });
      return ctx.send({error}, 500);
    }
  
    console.log({ data });
    ctx.send({data}, 200);
  }
};
