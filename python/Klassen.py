class User:
    pass

user1 = User()

#bestehende Objekte können Felder und Methoden hinzugefügt werden
user1.name = "tomson"

#***********
#Konstruktor
#***********

#Bei jedem Funktionsaufruf wird automatisch eine Referenz mitgegeben.
#Es muss bei der Funktionsdefinition immer ein Parameter mit angegeben werden,
#damit die Referenz mitgegeben werden kann.
#Objekt wird erstellt -> im Objekt wird __init__ mit der Referenz zum Objekt aufgerufen ->
#Die zugehörige Klasse (auch im Heap als Objekt) erhält die Referenz und ruft, mit ihr,
#das richtige Objekt auf.

#Aufruf mit der init Methode __init__ (init steht für initialization).
#self ist der erste Parameter der init Methode.
#Ruft man eine Instanz-Methode auf, ruft man immer die Methode der Klasse auf
#(Klassen sind auch Objekte und befinden sich im Heap).
#Wurden 3 Objekte: o1, o2, o3 von dem Klassen-Objekt erstellt, haben alle bspw. die
#Funktion func1(self). ruft man von o1 die Funktion auf: o1.func1(), wird self durch die
#o1-Referenz ersetzt. Dadurch weiß Das Klassen-Objekt, von welchem Objekt die Funktion
#aufgerufen werden muss.
#o1.func1(o1) -> Klassen-Objekt -> o1.func1()
class User2:
    def __init__(self, full_name, birthday):
        self.name = full_name
        self.birthday = birthday

    def multiply(self, a, b):
        print(a*b)

#Erstelle neues Objekt
user2 = User2("tom tomson", "09.01.1984")

#Aufruf einer Objekt-Methode
user2.multiply(2, 2)
#Der Kompiler ersetzt den oberen Code in den Unteren
User2.multiplay(user2, 2, 2)
#  |               |
#  |               Referenz zu dem Objekt
#  |
#  Referenz zum Klassen-Objekt
