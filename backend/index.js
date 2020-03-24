const express = require('express');

const app = express();

app.use(express.json());

app.post('/users', (request, response) => {
    const body = resqust.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmniStcak 11.0',
        aluno: 'Tálisson Bruno2',
    });
});

app.listen(3333);

