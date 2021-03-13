const express = require('express')
const app = express()

app.use(require('cors')())
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/element-admin', {
  useNewUrlParser: true,
  useCreateIndexs: true,
  useFindAndModify: true
});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("connected!");
})
const Article = mongoose.model('Article', new mongoose.Schema({
  title: { type: String },
  body: { type: String }
}))

app.get('/', async(req, res)=>{
  res.send('server started')
})

//新增文章
app.post('/api/articles', async (req, res)=>{
  const article = await Article.create(req.body)
  res.send(article)
})

//文章列表
app.get('/api/articles', async (req, res)=>{
  const articles = await Article.find();
  res.send(articles);
})

//删除文章
app.delete('/api/articles/:id', async (req, res)=>{
  await Article.findByIdAndDelete(req.params.id);
  res.send({
    status: true
  })
})

//文章详情
app.get('/api/articles/:id', async (req, res)=>{
  const article = await Article.findById(req.params.id);
  res.send(article);
})

//修改文章
app.put('/api/articles/:id', async (req, res)=>{
  const article = await Article.findByIdAndUpdate(req.params.id, req.body);
  res.send(article);
})



app.listen(8081, ()=>{
  console.log('http://localhost:8081');
})