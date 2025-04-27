const mega = require('megajs');

// MEGA account login details (optional, if you want upload to personal account)
const auth = {
    email: process.env.MEGA_EMAIL || '',
    password: process.env.MEGA_PASSWORD || '',
};

const uploadToMega = (stream, filename) => {
    return new Promise((resolve, reject) => {
        const storage = new mega.Storage(auth);

        storage.on('ready', () => {
            const upload = storage.upload({ name: filename });
            stream.pipe(upload);

            upload.on('complete', (file) => {
                file.link((err, url) => {
                    if (err) {
                        reject(err);
                    } else {
                        storage.close();
                        resolve(url);
                    }
                });
            });

            upload.on('error', (err) => {
                reject(err);
            });
        });

        storage.on('error', (err) => {
            reject(err);
        });
    });
};

module.exports = { uploadToMega };
