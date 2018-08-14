// variable
let messages = [];
id++
// module.exports
module.exports = {
  create: (req, res) => {
    let message = {
      text: req.body.text,
      time: req.body.time,
      id: id
    }
    messages.push(message)
    id++
    res.status(200).send(messages);
  },

  read: (req, res) => {
    res.status(200).send(messages)
  },

  update: (req, res) => {
    let message = messages.filter(item => {
      if (item.id === +req.params.id) return true
      
    })
    message[0].text = req.body.text || message[0].text;
    message[0].time = req.body.time || message[0].time;
    res.status(200).send(messages);

  },

  delete: (req, res) => {
    let deleteId = req.params.id;
    messageId = messages.filter(item => item.id === deleteId);
    messages.splice(messageId, 1);
    res.status(200).send(messages);
  }

}

