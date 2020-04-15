/*
Damit der Compiler weiß, von welchem Type
die Funktionsparameter sind, muss die Deklaration
durch Header-Dateien in die zu kompilierene DateiA
hinzugefügt werden.
Anschließend kann der Linker die benötigten Funktionen,
aus der kompilierten DateiB, der DateiA hinzu linken.
*/

//DateiA
#include "DateiB.h"

int main(){
  fktB(23, 23);
}

//Damit der Linker
