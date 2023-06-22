//Eventloop is the mechanism which uses pre defined api's of JS to give us nonblocking system of execution
//EventLoop : all those calls which are expected to have delays due to 
//transactions taking time like settimeout, setinterval, server calls (XHR) or file read (async) 
//or any registered callback using Promises
//server - (XHR) XMLHttpRequest api used to make server call

console.log("Starts");

setTimeout(function(){
    console.log("First - Call back")
    setTimeout(function(){
        console.log("Inner - Call back - 0 secs")
    }, 0);    
}, 1000);//1000

setTimeout(function(){
    console.log("Second - Call back")
}, 1000);//2000

setTimeout(function(){
    console.log("Third - Call back")
}, 1000); //At least should be waiting for 3 secs //3000

console.log("Execution Ends");  