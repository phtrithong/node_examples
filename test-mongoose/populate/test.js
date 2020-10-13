const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let count = 0;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false  
};
const connectWithRetry = () => {
    console.log('MongoDB connection with retry');
    
    mongoose.connect('mongodb://localhost:27017/test', options)
    .then(() => {
        console.log('MongoDB is connected')
    })
    .catch(err => {
        console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count);
        setTimeout(connectWithRetry, 5 * 1000)
    })
};

connectWithRetry();



const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

const Story = mongoose.model('Story', storySchema);
const Person = mongoose.model('Person', personSchema);

// const author = new Person({
//     _id: new mongoose.Types.ObjectId(),
//     name: 'Ian Fleming',
//     age: 50
// });
  
// author.save(function (err) {
//     if (err) throw err;

//     const story1 = new Story({
//         title: 'Casino Royale',
//         author: author._id    // gián giá trị _id cho person
//     });

//     story1.save(function (err) {
//         if (err) throw err;
//     });
// });

Story.
  findOne({ title: 'Casino Royale' }).
  populate('author').
  exec(function (err, story) {
    if (err) return handleError(err);
    console.log(story);
  });