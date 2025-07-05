const bcrypt = require("bcryptjs");

(async ()=>{
    
    const hashedPassword = await bcrypt.hash("1234", 12);
    console.log(hashedPassword)
    const isMatch = await bcrypt.compare("12345", "$2b$12$SItEwLLn3.04H6PGw3/h5OyYzbxeQOpZpsD2dXDRdViBL2crb7CX");
    console.log(isMatch)
})()
 