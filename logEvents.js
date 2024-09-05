const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

const logEvents = async (message, logname) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}`;
    // console.log(logItem);

    try {
        if (!fs.existsSync('./logs')) {
            fs.mkdir('./logs', (err) => {
                if (err) throw err;
            });
        }
        await fsPromises.appendFile(
            path.join(__dirname, 'logs', logname),
            `${logItem}\n`
        );
    } catch (err) {
        console.log(err);
    }
};

module.exports = logEvents;
