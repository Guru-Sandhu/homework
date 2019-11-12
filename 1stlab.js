function shape(rows) {
    let space = 0; 
    let string = "";
    let column = 1;
    while (column <= rows) { 
        let indent = rows *4 - column *4 ;  //assign the number of spaces we need before the star
        for (let i = 0; i < indent; i++) { 
            string+=' '; //added spaces equal to the indent 
        }
        for (let j = 0; j < column; j++) { // number of stars per row
            string+="*"; // added the star after the spaces
            for (let k = 0; k < space; k++) {  //spaces after the star
                string+=' ';                
            }
            space = 3; // spaces between the stars
        }
        string += '\n'; // changed to the new line
        column++; 
    }
    return string;
}
console.log(shape(9));