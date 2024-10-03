export const incCount =(value)=>{
    return {
        type : "increment",
        payload : value       
    }
}
export const decCount =()=>{
    return {
        type : "decrement",
        payload : null
    }
}
export const resetCount =()=>{
    return {
        type : "reset",
        payload : null
    }
}