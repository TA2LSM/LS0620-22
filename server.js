const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

//burası yukardaki satırdan sonra gelmeli ki config.env işledikten sonra o değişkenlerle
//beraber bu dosyaya gelinebilsin.
const app = require('./app');

//node.js'in çok daha fazla environment variable seçeneği var
console.log(process.env);

//console.log(app.get('env')); //development mode activated by express

const port = process.env.PORT || 8000; //process.env.PORT varsa o değeri yoksa 8000'i alır.

app.listen(port, () => {
  console.log(`App running on port ${port}...`); //buradaki tırnak işaretleri Alt Gr ile basılan ;'den geliyor
});
