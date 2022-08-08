import {db} from '../tools/db'

export const GetItem = (test)=>{
    const object = db.find(obj => obj.name === test.name);
    return(object)
}

