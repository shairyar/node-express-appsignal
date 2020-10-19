const { Appsignal } = require("@appsignal/nodejs");

const appsignal = new Appsignal({
  name: 'Node Express Example',
  active: true,
  name: "KEY"
});