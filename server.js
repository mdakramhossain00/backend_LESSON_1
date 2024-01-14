const http = require("http");

const server = http.createServer((req,res, next) => {
    if(req.url === '/about'){

        res.end("<h1>about page</h1>");

    } else if(req.url === '/'){

        res.end("<h1>home</h1>");

    }else if(req.url === '/contact'){

        res.end("<h1>nice</h1>");

    }else{

        res.end("<h1>page not fond</h1>");
    }
});

server.listen(5000,()=>{
    console.log("server is running");
});






// http.createServer(function(){
//     console.log("server is running");
// });
























