const dataProcess = require("./dataProcess")
const yargs = require("yargs")

yargs.command ({
    command : "add",
    describe : "to add an user",
    builder: {
      id: {
        describe : "id of the user",
        demandOption : true,
      },
      fname : {
         describe : "first name of the user",
         demandOption : true,
         type : "string"
      },
      lname : {
        describe : "last name of the user",
        demandOption : true,
        type : "string"
     },
      age : {
        describe : "age of the user",
        demandOption : true,
      },
      city : {
        describe : "city of the user",
        demandOption : true,
      }
    },
    handler:(x)=> {
        dataProcess.addUser(x.id, x.fname, x.lname, x.age, x.city)
    }
})

yargs.command({
  command : "delete",
  describe : "to delete an user",
  handler : (x)=> {
     dataProcess.deleteData(x.id)
  }
})

yargs.command({
  command : "read",
  describe : "calling stored users to read",
  builder : {
    id : {
      describe : "the id of required user to read",
      demandOption : true,
      type : "string"
    }
  },
  handler : (x) => {
    dataProcess.readData(x.id)
  }
})

yargs.command({
  command : "list",
  describe : "lists all the data stored",
  handler : () => {
    dataProcess.listData()
  }
})

yargs.parse()