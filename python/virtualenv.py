#-> in der virtuellen Umgebung werden über Umgebungsvariablen die Pfade für die zu verwendenden 
	#Bibliotheken verstellt, so dass die virtuelle Umgebung unabhängig von den Pythonbibliotheken 
	#des Betriebssystems ist.
#-> Installationen von packages aus dem Python Package Index (pip) werden direkt im Verzeichnis des
	#Virtual Environments installiert. Dadurch sind keine Administratorrechte erforderlich.
#-> Jedes Virtual Environment hat seine eigenen site-packages sowie pip- und python-Kommandos.
#-> virtualenv nutzt den standard-Interpreter des Systems.



#virtualenv anlegen
$ virtualenv -p python3 test

#virtual environment im root-Verzeichnis im Projekt-Ordner Aktiviren
$ source bin/activate

#virtualenv verlassen
$ deactivate 

#requirements aus textfile installieren (in der virtualenv)
pip3 install -r requirements.txt