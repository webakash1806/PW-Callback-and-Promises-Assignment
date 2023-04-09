function maniString(inpStr, callback) {
    const manStr = inpStr.toUpperCase()
    callback(manStr)
}


function logStr(manStr) {
    console.log(manStr);
}

maniString("Hello World!", logStr)