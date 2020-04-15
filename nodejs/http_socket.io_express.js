var http = require('http');
var express = require('express');
var app = express();
//http.createServer gibt http-server mit callback-function zurück. request-, response-objects werden
//der callback-function bei jedem request übergeben. app ist die callback-function.
var http_server = http.createServer(app);

//bekommt http_server ein request mit switching-protocolls im header (101), dann sendet der http-server
//automatisch einen response mit einer bestätigung im response-header (Konstruktor verändert http_server).
//Der http-server holt nicht länger die Daten vom socket, sondern der websocket-server (io) holt sich diese.
var io = require('socket.io')(http_server);




//http_server.listen() erstellt einen serverSocket, der bei erfolgreichem tcp-aufbau
//dem Server-Programm die Adressen mitteilt. Das Server-Programm speichert die Adreesen
//in ein socket und teilt dem Betriebssystem mit, dass es ein socket erstellen soll,
//in dem die Adressen ebenfalls gespeichert werden. Bei einem request werden die Daten,
//von dem Betriebssystem-Socket per ipc an den Server-Programm-Socket gesendet.
//Das Server-Programm ließst die Daten aus dem socket und übergibt der callback-function
//ein request und response Objekt. Beim aufruf von bspw. res.send() wird ein respone Objekt
//in den Programm-Socket geschrieben und an den Betriebssystem-Socket gesendet und anschließend
//an dem tcp/ip stack übertragen.
http_server.listen(8000);
