var http = require("http");
const mailer = require("nodemailer");

http
  .createServer(function (request, response) {
    //node mailer configuration
    const transporter = mailer.createTransport({
      host: "smtp.gmail.com",
      port: "587",
      auth: {
        user: "",// insert your email,
        pass: ""// create a application password to your email and put it here,
      },
    });

    // Read data from the request
    let body = "";
    let data = "";

    request.on("data", (chunk) => {
      console.log(chunk);
      body += chunk.toString();
    });

    // Process data when the request ends
    request.on("end", () => {
      // Parse the body, assuming it's in URL-encoded format

      data = JSON.parse(body);
      console.log(body);
      const email  = data.email
      console.log(email)
      console.log(data);
      const mailOptions = {
        from: "chaima app",
        to: data.email,
        Subject: "Node chepoint",
        Text:data.message,
        html: '<html><style>body {font-family: Arial, Helvetica, sans-serif;}.container {padding: 20px; background-color: #f1f1f1;}</style><body><h2>Node mailer app</h2><div class="container"><h2><p>Message : '+ data.message+'</div></body></html>',
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          response.writeHead(500, { "Content-Type": "text/html" });

          response.end("<h1>Error while sending the email try later </h1>\n");
        }

        
    });
    response.writeHead(200, { "Content-Type": "text/html" });

    response.end(`Email sent succefully to ${data.email}  \n`);
      // Your logic to handle the POST data goes here
    });

  })
  .listen(3000);

// Console will print the message
console.log("Server running at http://127.0.0.1:3000/");
