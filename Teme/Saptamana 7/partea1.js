// Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
// raporta acest lucru in consola. (exemplu: “2 este numar par”);
// Scrieti functia in doua variante: while si for

// Varianta for
function iterationA () {
    for (var i=0; i<=20; i++) {
        if (i % 2 == 0){
        console.log(i + " este numar par");
    }
        else {
        console.log(i + " este numar impar");
    }
    }
}
    // iterationA();



// Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
// rezultatul. (exemplu: “3*9=27”).
// Scrieti functia in doua variante: while si for

function iterMulty (z) {
    var i = 0;
    while (i <= 10) { 
        var x = i*z;
        console.log(i + " x " + z + " = " + x);
        i++;
    }
}
// iterMulty(5);

function tableAdd (z) {
    for (var i = 1; i <= 10; i++) {
        if ( x = z*i)
        console.log(z + " x " + i + " = " + x);
    }
}
tableAdd(1)