const fs = require("fs")

const addUser = (id, fname , lname , age , city) => {     
    const allData = loadData() 
    const duplicatedData = allData.filter((obj)=>{  
        return obj.id === id
    })

    if (duplicatedData.length == 0 ){ 

        allData.push({   
            id : id,
            fname : fname,
            lname : lname,
            age : age,
            city : city
        })
        saveAllData(allData)
    }else{
        console.log("ERROR DUPLICATED ID")
    }
}


///////////////////////////////////////////////////////////////////////

const loadData = () => {
    try{
    const DataJson = fs.readFileSync("dataStored").toString() 
    return JSON.parse(DataJson)
}
catch {
    return []
}
}

////////////////////////////////////////////////////////////////////

const saveAllData = (allData) => {
     const AllDataJson = JSON.stringify(allData)
     fs.writeFileSync("dataStored" , AllDataJson ) 
}

////////////////////////////////////////////////////////////////////

const deleteData = (id) => {
    const allData = loadData()
    const dataToKeep = allData.filter((obj) =>{
        return obj.id !== id
    })
    saveAllData(dataToKeep)
    console.log("User Deleted")
}

//////////////////////////////////////////////////////////////////

const readData = (id) => {
    const allData = loadData()
    const userReq = allData.find((user) => {
        return user.id == id
    })

    if (userReq){
        console.log(userReq)
    }else{
        console.log("USER NOT FOUND")
    }
}

//////////////////////////////////////////////////////////////////////////

const listData = () => {
    const allData = loadData()
    allData.forEach((user) => {
        console.log(user.fname, user.lname, user.age, user.city)
    })
}

////////////////////////////////////////////////////////////////////////////////

module.exports = {
    addUser,
    deleteData,
    readData,
    listData
}