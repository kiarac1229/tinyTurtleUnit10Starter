TinyTurtle.apply(window, [undefined, 400, 400]);

function square(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
}

function triangle(){
right(30);
forward(50);
right(120);
forward(50);
right(120);
forward(50);
}


function house(){
triangle();
right(180);
square();
right(360);
}



function rectangle(){
forward(50);
right(90);
forward(100);
right(90);
forward(50);
right(90);
forward(100);
right(90);
forward(50);
stamp();
}

function polygon(){
forward(60);
right(45);
forward(50);
right(45);
forward(50);
right(45);
forward(60);
right(90);
forward(60);
right(45);
forward(60);
right(65);
forward(55)


}

triangle();
square(50);
rectangle();
polygon();


    

