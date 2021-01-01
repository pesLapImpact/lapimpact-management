const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
        'id': 1,
        'image': 'http://placeimg.com/64/64/1',
        'name': 'oh',
        'birthday': '820521',
        'gender': 'male',
        'job': 'student'
        },
        {
          'id': 2,
          'image': 'http://placeimg.com/64/64/2',
          'name': 'nao',
          'birthday': '860918',
          'gender': 'female',
          'job': 'nurse'
        },
        {
          'id': 3,
          'image': 'http://placeimg.com/64/64/3',
          'name': 'lee',
          'birthday': '860101',
          'gender': 'male',
          'job': 'student'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));