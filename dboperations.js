const  config = require('./dbconfig');
const  sql = require('mssql');

  async  function getTickets() {
    try {
    //   console.log(config.config)
      let  pool = await  sql.connect(config.config);
      let  ticketList = await sql.query`select * from tickets where status != 'Closed'`
      return  ticketList.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

  async  function addTickets(ticket) {
    try {
    //   console.log(config.config)
      let  pool = await  sql.connect(config.config);
      let  addTicket = await pool.request()
      .input('Name', sql.VarChar, ticket.Name)
      .input('Email', sql.VarChar, ticket.Email)
      .input('Department', sql.VarChar, ticket.Department)
      .input('Priority', sql.VarChar, ticket.Priority)
      .input('ContactID', sql.VarChar, ticket.ContactID)
      .input('Title', sql.VarChar, ticket.Title)
      .input('Description', sql.VarChar, ticket.Description)
      .execute('addTicket');
      return  addTicket.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

  module.exports = {
   
    getTickets: getTickets,
    addTickets: addTickets
}
