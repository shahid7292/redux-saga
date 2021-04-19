const increament=(num=1)=>{
    return{
        type:'INCREAMENT',
        payload:num
    }
}
const decreament=(num=1)=>{
    return{
        type:'DECREAMENT',
        payload:num
    }
}
const reset=()=>{
    return{
        type:'RESET'
    }
}

const increamentClick=()=>{
    return{
        type:'INCREAMENT_CLICK'
    }
}

const onlyIncreamen=()=>{
    return{
        type:'ONLY_INCREAMENT'
    }
}


export {increament, decreament, reset, increamentClick,onlyIncreamen}