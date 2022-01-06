 const express = require('express');
 const app = express();


 app.use(express.urlencoded({ extended: true}));
 app.use(express.json());

 app.get('/', (req, res) => {
     res.send( `
     <form method='POST' action='/'>
     <label for="any">Name</label>
     <input type='text' placeholder="Insira  uma string" name="nome"/>
     <button type='submit'>Enviar</button>
     </form>`);
 });
 app.post('/', (req, res) => {
     console.log(req.body);
     res.send(req.body);
 });


app.listen(3001, () => {
    console.log('O servidor está aberto na porta http://localhost:3001')
    console.log('Servidor sendo executado');
});