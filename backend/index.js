const express = require('express');

const app = express();

app.get ('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStcak 11.0',
        aluno: 'Tálisson Bruno',
    });
});

app.listen(3333);

