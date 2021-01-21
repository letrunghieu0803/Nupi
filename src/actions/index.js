export const homePage =()=>{
    return {
        type :  'HOME'
    }
}
export const bxhPage =()=>{
    return {
        type :  'BXH'
    }
}
export const playPage =()=>{
    return {
        type :  'PLAY'
    }
}
export const loginPage =()=>{
    return {
        type :  'LOGIN'
    }
}

export const libraryPage =()=>{
    return {
        type :  'LIB'
    }
}

export const historyPage =()=>{
    return {
        type :  'HIS'
    }
}

export const stage1Page =()=>{
    return {
        type :  'S1'
    }
}

export const stage2Page =()=>{
    return {
        type :  'S2'
    }
}

export const gameOverPage =()=>{
    return {
        type :  'GOVER'
    }
}

export const increLevel =()=>{
    return {
        type :  'INCRE'
    }
}

export const setDataReduce =(data)=>{
    return {
        type :  'SET',
        value : data
    }
}
export const setDataLevel =(data)=>{
    return {
        type :  'SET',
        value : data
    }
}

export const loginSuccsess =()=>{
    return {
        type :  'LOGINSUC'
    }
}

export const logoutSuccsess =()=>{
    return {
        type :  'LOGOUTSUC'
    }
}