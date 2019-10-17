#!/usr/bin/node
const { sendMail } = require('./lib/mail');
const { getDateArg } = require('./lib/args');

const givenDate = getDateArg();
sendMail(givenDate);
