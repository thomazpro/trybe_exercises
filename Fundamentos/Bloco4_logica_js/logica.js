//function geraQuadrado ( n ) {
//    let coletor = "";
//
//    if (n > 1) {
//        for (let j = 0; j < n; j++) {
//            for (let i = 0; i < n; i++){
//                coletor += "*";
//            }
//            console.log(coletor);
//            coletor = "";
//        }
//    }
//
//}
//
//geraQuadrado(3);
//
//function geraTriangulo1( n ) {
//    let coletor = "";
//
//    if (n > 1) {
//        for (let i = 0; i < n; i++){
//            coletor += "*";
//            console.log(coletor);
//        }
//
//    }
//
////}
////
////geraTriangulo1(5);
//
//function geraTriangulo2(n) {
//    let coletor = "";
//    let decremento = n;
//
//    if (n > 1) {
//        for (let j = 0; j < n; j++) {
//            for (let i = 0; i < n; i++){
//                if (i+1 <  decremento) {
//                    coletor += " ";
//                } else {
//                    coletor += "*";
//                }
//            }
//            console.log(coletor);
//            coletor = "";
//            decremento--;
//        }
//    }
//
//}
//
//geraTriangulo2(10);
//
function geraPiramede(n) {
    let piramede = "";
    let position = (n/2)+1;
    let asterisco = 1;
    let count = 0;
    
    if (n > 0) {
        for (let i = 0; i < (n/2); i++){
            for (let j = 0; j < n; j++){
                if (j < position - 2) {
                    piramede += " ";
                } else {
                    if ( count < asterisco){
                        piramede += "*";
                        count++;
                    } else {
                        break;
                    }
                }
            }
            console.log(piramede);
            piramede = "";
            position -= 1;
            asterisco += 2;
            count = 0;

        }
    }

}

geraPiramede(10);