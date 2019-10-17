const moment = require('moment');

/**
 * @returns Moment object
 */
function getDateArg() {
  let date = moment().add(1, 'days');

  if (process.argv.length > 2 && process.argv[2]) {
    const dateArg = process.argv[2];
    if (!dateArg.match(/today|tomorrow|\d{4}-\d{2}-\d{2}/)) {
      console.error(
        '[ERROR] - Incorrect given date. Please type "today", "tomorrow" or a date like "2019-01-03".'
      );
      process.exit(1);
    }

    switch (dateArg) {
      case 'today':
        date = moment();
        break;
      case 'tomorrow':
        break;
      default:
        date = moment(dateArg);
    }
  }

  return date;
}

module.exports = { getDateArg };
