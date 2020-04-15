//wurde die callbackfunction im Promise beendet, gibt Promise den Wert
//der callbackfunction zurück.
//Auf den Wert kann dann über result zugegriffen werden.
getAllArticles(Article).then((result)=>{
	res.render('articles', {articles: result});
});



//Ein Promis wird erst beendet, wenn resolve() aufgerufen wird.
//Im Promis wird find() in den stack geschoben, dabei wird find() im Hintergrund ausgeführt,
//und der stack wird wieder frei. 
//Hat find() die Daten geholt, werden die Daten der in find() definierten cb als Argument übergeben
//und die cb wird in den stack geladen.
//dann wird resolve() aufgerufen wodurch das Promis beendet wird.   	
function getAllArticles(Article){
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