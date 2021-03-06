const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath)); // program pośredniczący - np. jeśli coś wyśle żądanie do serwera, będziemy chcieli wykonać pewien kod, który coś „loguje” do ekranu

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
}); // żeby serwer odwoływał się do index.html po przejściu do innego route'a niż „/”

app.listen(port, () => {
    console.log('Server is up!');
});