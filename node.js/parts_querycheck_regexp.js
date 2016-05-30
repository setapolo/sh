var request ={};
request['query'] =  
{ 'q': '/html5/sample.html',
'req.a': 'hello',
'pt.a': 'konnichiwa',
'op.a': 'g',
'req.b': 'world',
'pt.b': 'sekai',
'op.b': 'g' };
///	
	var aa=[];
	for(var key in request.query){
  		if (key.match(/^req[.]/i)){
  			var k = key.replace(/^req[.]/,"");
	  		var pt = (request.query["pt."+k])?(request.query["pt."+k]):"";
	  		var op = (request.query["op."+k])?(request.query["op."+k]):"";
	  		var a = [request.query[key],pt,op];
	  		aa.push(a);
	  		String.prototype.proc =function(aa){
				var ss = this;
				aa.forEach(function(c,i,a){
					var r = new RegExp(c[0],c[2].replace(/[^gimuy]/g,""));
					ss = ss.replace(r,c[1]);
					console.log(c,i,a);
					console.log(ss);
				});
				return ss;
	  		}
	  		console.log(a);
  		}
	}
//	
	"hello.world".proc(aa)