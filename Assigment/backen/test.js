let generate_secret = require('crypto').randomBytes(64).toString('hex')
console.log(generate_secret)