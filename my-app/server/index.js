const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const twilio = require("twilio");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const accountSid = 'AC7c4c20a5b1c3f6c32a42462b861e0a5a';
const authToken = '6e613ce682dd23aca896dd13de085b36';
const client = twilio(accountSid, authToken);

app.post("/send-message", (req, res) => {
      const { message } = req.body;

      client.messages.create({
            body: message,
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+21655331742'
      })
            .then((msg) => res.status(200).json({ success: true, sid: msg.sid }))
            .catch((error) => res.status(500).json({ success: false, error }));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
});
