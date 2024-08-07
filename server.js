var express =require('express');
var bodyParser = require('body-parser');


var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextID = 1;


app.use(bodyParser.json());

app.get('/', function (req, res){
  res.send('Todo API Root')
});


//GET / todos
app.get('/todos', function(req, res){
  res.json(todos);
});

//GET /todos/:id-any request aparamet are always a strin if you need it to be a numbe the parseInt caonverts a string'2' into the javascript number 2!

app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;
//loop over arrray
//if it mathes the id then it set the valu of matchedTodo to todo.id
	todos.forEach(function (todo) {
		if (todoId === todo.id) {
			matchedTodo = todo;
		}
	});
//if the is no match.
	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
    //this is ther regular way to set a response on Express .json is handy shortcut.
		res.status(404).send();
	}
});

//GET/todos/:id  - basciclay express allows you to...colonid is used by Express to parse json!!!!
//Essentially what I'm asking Express to do is take whatever value is after the slash(/todos/vas) and let me access
//it inside of  request. params.kaaay
//Now they were armed with this information.
//We can make a request - where the person passes in the ID of the todo item
//and then we search the todo array, find the item and pass it to response.


//POST /todos

app.post('/todos', function (req, res) {
  var body = req.body;


  console.log('description: ' + body.description);

  res.json(body);

});

app.listen(PORT, function() {
  console.log('express listening on ' + PORT + ' yeah maan!');
});
