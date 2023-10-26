const http = require("http");

const server = http.createServer((req, res) => {
    const dataToLog = { method: req.method, url: req.url };
    console.group(">>>");
    console.log(dataToLog);

    console.log(req.headers);

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cookies-Type", "text/plain");
    res.setHeader("Local-Storage", "text/plain");
    console.log(res.getHeaders());
    console.log(res.getHeaderNames());
    // req.getHeaders(); // This req.getHeaders() is workable when the we hit the api of other servers.

    const ip = res.socket.remoteAddress;
    const port = res.socket.remotePort; // The port that connects to the main server.
    console.log("IP ", ip, "PORT ", port);

    // server.setTimeout(3000, () => {
    //     console.log("Callback ran after 3 secs"); //Prints twice and the server does not close. After refreshing => prints four times and then server closes.
    //     // server.close();
    //     server.timeout
    // });


    const tmp = setTimeout(() => {
        console.log("After 3 secs"); //Prints twice and the server does not close. After refreshing => again prints twice and then server closes.
        server.close();
        clearTimeout(tmp); // always clear the timeout, otherwise the previous timeouts also run.
    }, 3000);

    res.writeHead(200, { "Content-Type": "application/json" }); // this content type matters. By changing the content type, the data is displayed differently in the browser. Try => text/html
    res.write("Hello World");
    console.log("<<<")
    console.groupEnd();
    res.end();
});

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.end("Welcome to Home Page");
//     }
//     if (req.url === "/about") {
//         res.end("Welcome to About Page");
//     }
//     res.end("Page Not Found");
// });

server.listen(3000);
console.log("Server strating on port 3000");