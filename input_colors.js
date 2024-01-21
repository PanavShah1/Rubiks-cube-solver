let cube_colors = [['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '']];

let ctr1 = 1;
let ctr2 = 1;

function white(){

    if(ctr2>9){
        next_side();
    }

    tile_class = '.tile-'+ctr2.toString();
    let myDiv = document.querySelector(tile_class);
    myDiv.style.backgroundColor = 'white';

    cube_colors[ctr1-1][ctr2-1] = 'w';
    
    ctr2++;
    console.log(cube_colors);   
}
function yellow(){

    if(ctr2>9){
        next_side();
    }

    tile_class = '.tile-'+ctr2.toString();
    let myDiv = document.querySelector(tile_class);
    myDiv.style.backgroundColor = 'yellow';

    cube_colors[ctr1-1][ctr2-1] = 'y';
    
    ctr2++;
    console.log(cube_colors);   
}
function orange(){

    if(ctr2>9){
        next_side();
    }

    tile_class = '.tile-'+ctr2.toString();
    let myDiv = document.querySelector(tile_class);
    myDiv.style.backgroundColor = 'orange';

    cube_colors[ctr1-1][ctr2-1] = 'o';
    
    ctr2++;
    console.log(cube_colors);   
}
function red(){

    if(ctr2>9){
        next_side();
    }

    tile_class = '.tile-'+ctr2.toString();
    let myDiv = document.querySelector(tile_class);
    myDiv.style.backgroundColor = 'red';

    cube_colors[ctr1-1][ctr2-1] = 'r';
    
    ctr2++;
    console.log(cube_colors);   
}
function green(){

    if(ctr2>9){
        next_side();
    }

    tile_class = '.tile-'+ctr2.toString();
    let myDiv = document.querySelector(tile_class);
    myDiv.style.backgroundColor = 'green';

    cube_colors[ctr1-1][ctr2-1] = 'g';
    
    ctr2++;
    console.log(cube_colors);   
}
function blue(){

    if(ctr2>9){
        next_side();
    }

    tile_class = '.tile-'+ctr2.toString();
    let myDiv = document.querySelector(tile_class);
    myDiv.style.backgroundColor = 'blue';

    cube_colors[ctr1-1][ctr2-1] = 'b';
    
    ctr2++;
    console.log(cube_colors);   
}

function back(){
    if(ctr1==1 && ctr2==1){
        console.log('error');
    }

    if(ctr2==1){
        ctr2=9;
        ctr1--;
        for(let i=1; i<=9; i++){
            let color = cube_colors[ctr1-1][i-1];
            switch(color){
                case 'w':
                    color='white';
                    break;
                case 'y':
                    color='yellow';
                    break;
                case 'o':
                    color='orange';
                    break;
                case 'r':
                    color='red';
                    break;
                case 'g':
                    color='green';
                    break;
                case 'b':
                    color='blue';
                    break;

            }
            tile_class = '.tile-'+i.toString();
            let myDiv = document.querySelector(tile_class);
            myDiv.style.backgroundColor = color;
        }
        text();

    }
    else{
        ctr2--;
    }
    cube_colors[ctr1-1][ctr2-1]='';
    tile_class = '.tile-'+ctr2.toString();
    var myDiv = document.querySelector(tile_class);
    myDiv.style.backgroundColor = 'gray';
    console.log(cube_colors);
}

function next(){
    if(ctr2>9){
        next_side();
    }
}

function next_side(){
    if(ctr1==6){
        console.log('Done');
        done();
    }
    else{
        ctr2 = 1;
        ctr1++;
        for(let i=1; i<=9; i++){
            tile_class = '.tile-'+i.toString();
            let myDiv = document.querySelector(tile_class);
            myDiv.style.backgroundColor = 'gray';
        }
        tile_class = '.tile-'+'1';
        let myDiv = document.querySelector(tile_class);
        myDiv.style.backgroundColor = 'gray';
        text();
        
    }
    
}

function text(){
    switch(ctr1){
        case 1:
            document.querySelector('.face-no').innerHTML='Face : 1 (Top)';
            document.querySelector('.instruction').innerHTML='Once done: Rotate to the right side';
            document.querySelector('.center-color').innerHTML='(Center color : Yellow)';
            break;
        case 2:
            document.querySelector('.face-no').innerHTML='Face : 2 (Right)';
            document.querySelector('.instruction').innerHTML='Once done: Rotate left';
            document.querySelector('.center-color').innerHTML='(Center color : Red)';
            break;
        case 3:
            document.querySelector('.face-no').innerHTML='Face : 3 (Front)';
            document.querySelector('.instruction').innerHTML='Once done: Rotate to the bottom';
            document.querySelector('.center-color').innerHTML='(Center color : Blue)';
            break;
        case 4:
            document.querySelector('.face-no').innerHTML='Face : 4 (Bottom)';
            document.querySelector('.instruction').innerHTML='Once done: Rotate to the left side';
            document.querySelector('.center-color').innerHTML='(Center color : White)';
            break;
        case 5:
            document.querySelector('.face-no').innerHTML='Face : 5 (Left)';
            document.querySelector('.instruction').innerHTML='Once done: Rotate left';
            document.querySelector('.center-color').innerHTML='(Center color : Orange)';
            break;
        case 6:
            document.querySelector('.face-no').innerHTML='Face : 6 (Back)';
            document.querySelector('.instruction').innerHTML='';
            document.querySelector('.center-color').innerHTML='(Center color : Green)';
            break;
        
    }
}

let myVariable = 'a';

function done(){
    U = cube_colors[0][4];
    R = cube_colors[1][4];
    F = cube_colors[2][4];
    D = cube_colors[3][4];
    L = cube_colors[4][4];
    B = cube_colors[5][4];
    let scramble = '';
    for (let i = 0; i<6; i++){
        for (let j = 0; j<9; j++){
            switch(cube_colors[i][j]){
                case U: scramble+='u';
                break;
                case R: scramble+='r';
                break;
                case F: scramble+='f';
                break;
                case D: scramble+='d';
                break;
                case L: scramble+='l';
                break;
                case B: scramble+='b';
                break;
            }
        }
    }
    console.log(scramble);
    
    // Define a variable
    myVariable = 'Hello from file1!';

    // Export the variable

}
// export { myVariable };





