const config = {
    user: "sa",
    password: "p4s5w0rD",
    database: "TicketingSystem_dev",
    server: '192.168.3.104',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: false, 
      trustServerCertificate: true
    }
  }
  
  module.exports = {
   
    config
  }
  