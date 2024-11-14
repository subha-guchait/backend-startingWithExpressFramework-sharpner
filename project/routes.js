const fs = require("fs");

const reqHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/form") {
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write(
      `<body><form action="/message" method="POST"><label for="msg">Leave your message</label><input name="msg" type= "text" placeholder="good" /><button type= "submit" >Send</button></form></body>`
    );
    res.write("</html>");
    return res.end();
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      console.log(body);
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];

      fs.writeFile("msg.txt", message, (err) => {
        if (err) {
          console.log(err);
        }
        res.statusCode = 302;
        res.setHeader("Location", "/form");
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Backend page</title></head>");
    res.write("<body><h1>Welcome to my node Js project</h1></body>");
    res.write("</html>");
    res.end();
  }
};

module.exports = reqHandler;
