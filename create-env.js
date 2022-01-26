const fs = require('fs');

fs.writeFileSync('./.env.production', `VUE_APP_API=${process.env.VUE_APP_API}\n`)