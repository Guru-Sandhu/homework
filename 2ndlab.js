function shape(rows) {
    let string = '';
    for (let i = 0; i<rows; i++) {
        let indent = rows *2- i*2 ;
        for(let j =0; j<indent; j++) {
            string +=' ';
        }
        for (let k = 0; k < rows; k++) {
            string+='*' + '  ';
        }
        string+='\n'
    }
    return string;
}
console.log(shape(15));

function shapeStretch(rows) {
    let string = '';
    for (let i = 0; i<rows; i++) {
        let indent = rows *2- i*2 ;
        string+= ' '.repeat(indent);
        string+=('*'+'  ').repeat(rows);
        string+='\n'
    }
    return string;
}
console.log(shapeStretch(15));