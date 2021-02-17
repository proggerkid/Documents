//callback-function des Promise  führt find() aus und wird dann beendet.
//find() führt dann die Datenbankabfrage, auf einem libuv-thread durch. Ist diese fertig, wird der cb von find() das 
//Ergebnis mit gegeben. Die cb von find() wird auf den Stack geschoben und ausgeführt. 
//Dabei wird resolve() daten übergeben und ausgeführt. 
//Durch das ausführen von resolve() wird das Promise erfüllt und die Daten werden zurückgegeben (an die cb von then()).

function getAllArticles(Article){
	//Die Funktion Promise ist erst dann beendet, wenn resolve() oder reject aufgerufen werden,
	//die dann Daten zurück geben.
	return new Promise((resolve, reject)=>{
		Article.find({}, (err, data)=>{
			if(err){
			}
			else{
				resolve(data);
			}
		});
	});
}







getAllArticles(Article).then((result)=>{
	res.render('articles', {articles: result});
});


   	

