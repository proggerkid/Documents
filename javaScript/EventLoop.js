/*
-> javaScript ist single threaded und asynchron.
-> wird eine Funktion im thread ausgeführt, muss eine andere Funktion warten,
 	bis die erste Funktion beendet ist. Der thread ist für die nächste Funktion blockiert.
-> Lösung: Die Funktion an anderer Stelle ausführen, damit der thread frei ist und nicht blockiert.
-> Möglichkeiten: callbacks, promises, async/await

-> callbacks im Browser: In setTimeout definierte callbackfunctions werde, wenn sie im thread aufgerufen werden, 
	in den web-apis geschoben (durch event-loop) dort verbleibt sie gemäß der angegebenen zeit. 
	Dadurch ist der thread nicht länger blockiert.
	Nach ablauf der Zeit, schiebt der event-loop die callbackfunction in die task-queue.
	Dort können sich viele cbs und events befinden.
	Ist der stack frei, schiebt der event-loop die cb in den stack (stack = thread). 
*/