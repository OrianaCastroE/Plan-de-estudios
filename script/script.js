// Semestre 1
const TT1 = document.getElementById("TT1");
const P1 = document.getElementById("P1");
const AL = document.getElementById("AL");
const CV = document.getElementById("CV");

// Semestre 2
const FDC = document.getElementById("FC");
const P2 = document.getElementById("P2");
const MD = document.getElementById("MD");
const FSC = document.getElementById("FSC");

// Semestre 3
const LC = document.getElementById("LC");
const A1 = document.getElementById("A1");
const AS = document.getElementById("AS");
const PYE = document.getElementById("PYE");

// Semestre 4
const FIS = document.getElementById("FIS");
const A2 = document.getElementById("A2");
const BD1 = document.getElementById("BD1");
const SO = document.getElementById("SO");
const AL2 = document.getElementById("AL2");

// Semestre 5
const TDC = document.getElementById("TDC");
const DA1 = document.getElementById("DA1");
const BD2 = document.getElementById("BD2");
const R = document.getElementById("R");
const MCS = document.getElementById("MCS");

// Semestre 6
const ISA1 = document.getElementById("ISA1");
const DA2 = document.getElementById("DA2");
const TT2 = document.getElementById("TT2");
const PDR = document.getElementById("PDR");
const ML = document.getElementById("ML");

// TITULO INTERMEDIO
const AIS = document.getElementById("AIS");

// TALLER 1
const MCYN1 = document.getElementById("MCYN1");

// Semestre 7
const ISA2 = document.getElementById("ISA2");
const ADS = document.getElementById("ADS");
const MGI = document.getElementById("MGI");
const MSI = document.getElementById("MSI");
const IA = document.getElementById("IA");

// TALLER 2
const MIYE = document.getElementById("MIYE");

// Semestre 8
const MIPS = document.getElementById("MIPS");
const ADSP = document.getElementById("ADSP");
const MNT = document.getElementById("MNT");
const TI = document.getElementById("TI");
const MLP = document.getElementById("MLP");

// TITULO LICENCIADO
const TLIS = document.getElementById("TLIS");

// Semestre 9
const MCYN2 = document.getElementById("MCYN2");
const E1 = document.getElementById("E1");

// Semestre 10
const E2 = document.getElementById("E2");
const E3 = document.getElementById("E3");

// PROYECTO
const PROY = document.getElementById("PROY");

// TITULO FINAL
const TFI = document.getElementById("TFI");

// Créditos
const crP = document.getElementById("crP");
const crT = document.getElementById("crT");

// Colores
const cp = "#b6b6dc";
const ct = "#414178";
const base = "white";
const letra = "black"

const msjCP = "El crédito parcial de una materia se obtiene llegando a los 70 puntos en la misma. En muchos casos permite y otorga el derecho a exámen mientras que en otros significa la exoneración de la materia.";
const msjCT = "El crédito total de una materia se obtiene llegando como mínimo a los 86 puntos en la misma. El cuál supone la exoneración de la materia.";

crP.addEventListener("click", function(){
    resetearMaterias();
    mostrarMensaje(crP);
});

crT.addEventListener("click", function(){
    resetearMaterias();
    mostrarMensaje(crT);
});

let marcado = false;
function apagarMarcado(){
    if (marcado){
        resetearMaterias();
        marcado = false;
    }
    marcado = !marcado;
}

function mostrarMensaje(cr){
    eliminarTodo();
    var mensajeRef = document.createElement("div");
    if (cr === crP){
        mensajeRef.style.backgroundColor = cp;
        mensajeRef.textContent = msjCP;
        mensajeRef.style.color = "black";
    }
    else if (cr === crT){
        mensajeRef.style.backgroundColor = ct;
        mensajeRef.textContent = msjCT;
        mensajeRef.style.color = "white";
    }
    mensajeRef.classList.add("mensajeRef");
    
    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeRef);
    
    // Ocultar el mensaje después de unos segundos (2 segundos)
    setTimeout(function() {
        mensajeRef.style.display = "none";
    }, 7000);
}

function resetearMaterias() {
    eliminarTodo();
    var materias = document.querySelectorAll(".materias"); // Seleccionar todos los elementos con la clase "materias"
    for (var i = 0; i < materias.length; i++) {
        materias[i].style.backgroundColor = "";
        materias[i].style.color = "";
    }
    niveles = document.querySelectorAll(".titulo");
    for (var i = 0; i < niveles.length; i++) {
        niveles[i].style.backgroundColor = "";
        niveles[i].style.color = "";
    }
    nivelitos = document.querySelectorAll(".taller");
    for (var i = 0; i < nivelitos.length; i++) {
        nivelitos[i].style.backgroundColor = "";
        nivelitos[i].style.color = "";
    }
}

function eliminarTodo(){
    var mensajesAnteriores = document.querySelectorAll(".mensaje");
    mensajesAnteriores.forEach(function(mensaje) {
        mensaje.remove();
    });
    var mensajesAnteriores = document.querySelectorAll(".mensajeRef");
    mensajesAnteriores.forEach(function(mensaje) {
        mensaje.remove();
    });
}

function créditosTotales(cant) {
    eliminarTodo();
    var mensaje = document.createElement("div");
    mensaje.textContent = "Necesita " + cant + " créditos totales";
    mensaje.classList.add("mensaje");
    
    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensaje);
    
    // Ocultar el mensaje después de unos segundos (3 segundos)
    setTimeout(function() {
        mensaje.style.display = "none";
    }, 3000);
}

function sinPrevias(id){
    eliminarTodo();
    resetearMaterias();
    sinPreviasAux();
    id.style.backgroundColor = "#aba9ae";
    id.style.color = letra;
}

function sinPreviasAux() {
    var mensaje = document.createElement("div");
    mensaje.textContent = "Sin previas";
    mensaje.classList.add("mensaje");
    
    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensaje);
    
    // Ocultar el mensaje después de unos segundos (3 segundos)
    setTimeout(function() {
        mensaje.style.display = "none";
    }, 3000);
}

// Sin previas
TT1.addEventListener("click", function(){
    sinPrevias(TT1);
});
P1.addEventListener("click", function(){
    sinPrevias(P1);
});
AL.addEventListener("click", function(){
    sinPrevias(AL);
});
CV.addEventListener("click", function(){
    sinPrevias(CV);
});
FDC.addEventListener("click", function(){
    sinPrevias(FDC);
});
MD.addEventListener("click", function(){
    sinPrevias(MD);
});

function creditoParcial(id){
    id.style.backgroundColor = cp;
    id.style.color = letra;
}

function creditoTotal(id){
    id.style.backgroundColor = ct;
    id.style.color = "white";
}

function elegida(id){
    id.style.backgroundColor = base;
    id.style.color = letra;
}

// Semestre 2

FSC.addEventListener("click", function() {
    apagarMarcado()
    resetearMaterias();
    creditoParcial(CV);
    elegida(FSC);
});
 
P2.addEventListener("click", function() {
    resetearMaterias();
    creditoParcial(P1);
    elegida(P2);
});

// Semestre 3

LC.addEventListener("click", function() {
    resetearMaterias();
    creditoParcial(FDC);
    elegida(LC);
});

A1.addEventListener("click", function() {
    resetearMaterias();
    creditoParcial(P2);
    creditoParcial(FDC);
    elegida(A1);
});

AS.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(2);
    elegida(AS);
});

PYE.addEventListener("click", function() {
    resetearMaterias();
    creditoTotal(AL);
    creditoTotal(CV);
    elegida(PYE);
});

// Semestre 4

FIS.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(6);
    creditoParcial(P2);
    elegida(FIS);
});

A2.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(6);
    creditoParcial(A1);
    creditoParcial(MD);
    elegida(A2);
});

BD1.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(6);
    creditoParcial(P2);
    elegida(BD1);
});

SO.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(6);
    creditoParcial(AS);
    elegida(SO);
});

AL2.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(6);
    creditoTotal(AL);
    creditoTotal(CV);
    elegida(AL2);
});

// Semestre 5

TDC.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(9);
    creditoParcial(A2);
    creditoParcial(LC);
    elegida(TDC);
});

DA1.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(9);
    creditoTotal(A1);
    creditoParcial(BD1);
    creditoParcial(FIS);
    elegida(DA1);
}); 

BD2.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(9);
    creditoParcial(BD1);
    creditoParcial(LC);
    elegida(BD2);
});

R.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(9);
    creditoParcial(AS);
    elegida(R);
});

MCS.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(9);
    elegida(MCS);
});

// TITULO INTERMEDIO

AIS.addEventListener("click", function() {
    resetearMaterias();
    creditoTotal(TT1);
    creditoTotal(P1);
    creditoTotal(FDC);
    creditoTotal(P2);
    creditoTotal(MD);
    creditoTotal(LC);
    creditoTotal(A1);
    creditoTotal(AS);
    creditoTotal(FIS);
    creditoTotal(A2);
    creditoTotal(BD1);
    creditoTotal(SO);
    creditoTotal(DA1);
    creditoTotal(BD2);
    creditoTotal(R);
    elegida(AIS);
});

// TALLER

MCYN1.addEventListener("click", function(){
    resetearMaterias();
    créditosTotales(12);
    elegida(MCYN1);
});

// Semestre 6

ISA1.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(12);
    creditoParcial(MCS);
    creditoParcial(FIS);
    elegida(ISA1);
});

DA2.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(12);
    creditoParcial(DA1);
    creditoParcial(FIS);
    elegida(DA2);
});

TT2.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(12);
    creditoTotal(TT1);
    creditoTotal(A2);
    creditoTotal(BD1);
    creditoParcial(R);
    creditoParcial(DA1);
    creditoParcial(FSC);
    elegida(TT2);
});

PDR.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(12);
    creditoParcial(DA1);
    creditoParcial(SO);
    elegida(PDR);
});

ML.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(12);
    creditoTotal(A1);
    creditoTotal(PYE);
    elegida(ML);
});

// Semestre 7

ISA2.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(16);
    creditoTotal(DA1);
    creditoParcial(DA2);
    creditoParcial(PDR);
    creditoParcial(ISA1);
    elegida(ISA2);
});

ADS.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(16);
    creditoTotal(A2);
    creditoTotal(BD2);
    creditoParcial(DA2);
    creditoParcial(PDR);
    elegida(ADS);
});

MGI.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(16);
    creditoParcial(BD2);
    creditoTotal(DA1);
    creditoTotal(SO);
    elegida(MGI);
});

MSI.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(16);
    elegida(MSI);
}); 

IA.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(16);
    creditoParcial(A2);
    creditoParcial(PYE);
    creditoParcial(LC);
    elegida(IA);
}); 

// TALLER 2
MIYE.addEventListener("click", function(){
    resetearMaterias();
    créditosTotales(16);
    creditoTotal(MCYN1);
    elegida(MIYE);
});

// Semestre 8

MIPS.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(16);
    creditoParcial(DA2);
    creditoParcial(PDR);
    creditoParcial(ISA1);
    elegida(MIPS);
});

ADSP.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(20);
    creditoParcial(ADS);
    creditoParcial(PDR);
    creditoParcial(ISA2);
    creditoTotal(ML);
    elegida(ADSP);
}); 

MNT.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(16);
    creditoParcial(ML);
    creditoParcial(DA2);
    elegida(MNT);
}); 

TI.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(20);
    creditoTotal(BD2);
    creditoParcial(DA2);
    creditoParcial(TDC);
    creditoParcial(PDR);
    creditoParcial(ISA1);
    elegida(TI);
});

MLP.addEventListener("click", function() {
    resetearMaterias();
    creditoParcial(A1);
    creditoParcial(LC);
    elegida(MLP);
});

// TITULO LICENCIADO

TLIS.addEventListener("click", function() {
    resetearMaterias();
    creditoTotal(TT1);
    creditoTotal(P1);
    creditoTotal(AL);
    creditoTotal(CV);
    creditoTotal(FDC);
    creditoTotal(P2);
    creditoTotal(MD);
    creditoTotal(FSC);
    creditoTotal(LC);
    creditoTotal(A1);
    creditoTotal(AS);
    creditoTotal(PYE);
    creditoTotal(FIS);
    creditoTotal(A2);
    creditoTotal(BD1);
    creditoTotal(SO);
    creditoTotal(AL2);
    creditoTotal(TDC);
    creditoTotal(DA1);
    creditoTotal(BD2);
    creditoTotal(R);
    creditoTotal(MCS);
    creditoTotal(ISA1);
    creditoTotal(DA2);
    creditoTotal(TT2);
    creditoTotal(PDR);
    creditoTotal(ML);
    creditoTotal(AIS);
    creditoTotal(MCYN1);
    creditoTotal(ISA2);
    creditoTotal(ADS);
    creditoTotal(MGI);
    creditoTotal(MSI);
    creditoTotal(IA);
    creditoTotal(MIYE);
    creditoTotal(MIPS);
    creditoTotal(ADSP);
    creditoTotal(MNT);
    creditoTotal(TI);
    creditoTotal(MLP);
    elegida(TLIS);
});

// Semestre 9

MCYN2.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(16);
    creditoTotal(MCYN1);
    creditoParcial(ISA1);
    elegida(MCYN2);
});

E1.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(16);
    elegida(E1);
});

// Semestre 10

E2.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(16);
    elegida(E2);
});

E3.addEventListener("click", function() {
    resetearMaterias();
    créditosTotales(16);
    elegida(E3);
});

// PROYECTO

PROY.addEventListener("click", function() {
    resetearMaterias();
    creditoTotal(TT1);
    creditoTotal(P1);
    creditoTotal(AL);
    creditoTotal(CV);
    creditoTotal(FDC);
    creditoTotal(P2);
    creditoTotal(MD);
    creditoTotal(FSC);
    creditoTotal(LC);
    creditoTotal(A1);
    creditoTotal(AS);
    creditoTotal(PYE);
    creditoTotal(FIS);
    creditoTotal(A2);
    creditoTotal(BD1);
    creditoTotal(SO);
    creditoTotal(AL2);
    creditoTotal(TDC);
    creditoTotal(DA1);
    creditoTotal(BD2);
    creditoTotal(R);
    creditoTotal(MCS);
    creditoTotal(ISA1);
    creditoTotal(DA2);
    creditoTotal(TT2);
    creditoTotal(PDR);
    creditoTotal(ML);
    creditoTotal(AIS);
    creditoTotal(MCYN1);
    creditoTotal(ISA2);
    creditoTotal(ADS);
    creditoTotal(MGI);
    creditoTotal(MSI);
    creditoTotal(IA);
    creditoTotal(MIYE);
    creditoTotal(MIPS);
    creditoTotal(ADSP);
    creditoTotal(MNT);
    creditoTotal(TI);
    creditoTotal(MLP);
    creditoTotal(TLIS);
    elegida(PROY);
});

// TITULO FINAL

TFI.addEventListener("click", function() {
    resetearMaterias();
    creditoTotal(TT1);
    creditoTotal(P1);
    creditoTotal(AL);
    creditoTotal(CV);
    creditoTotal(FDC);
    creditoTotal(P2);
    creditoTotal(MD);
    creditoTotal(FSC);
    creditoTotal(LC);
    creditoTotal(A1);
    creditoTotal(AS);
    creditoTotal(PYE);
    creditoTotal(FIS);
    creditoTotal(A2);
    creditoTotal(BD1);
    creditoTotal(SO);
    creditoTotal(AL2);
    creditoTotal(TDC);
    creditoTotal(DA1);
    creditoTotal(BD2);
    creditoTotal(R);
    creditoTotal(MCS);
    creditoTotal(ISA1);
    creditoTotal(DA2);
    creditoTotal(TT2);
    creditoTotal(PDR);
    creditoTotal(ML);
    creditoTotal(AIS);
    creditoTotal(MCYN1);
    creditoTotal(ISA2);
    creditoTotal(ADS);
    creditoTotal(MGI);
    creditoTotal(MSI);
    creditoTotal(IA);
    creditoTotal(MIYE);
    creditoTotal(MIPS);
    creditoTotal(ADSP);
    creditoTotal(MNT);
    creditoTotal(TI);
    creditoTotal(MLP);
    creditoTotal(TLIS);
    creditoTotal(MCYN2);
    creditoTotal(E1);
    creditoTotal(E2);
    creditoTotal(E3);
    creditoTotal(PROY);
    elegida(TFI);
});

// fin :)