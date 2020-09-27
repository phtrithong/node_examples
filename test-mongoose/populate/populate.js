(async () =>  {
    const mongoose = require('mongoose');

    const userSchema = mongoose.Schema({ 
        _id: Number, 
        email: String 
    });

    const blogPostSchema = mongoose.Schema({
      title: String,
      authorId: Number
    });

    // When you `populate()` the `author` virtual, Mongoose will find the
    // first document in the User model whose `_id` matches this document's
    // `authorId` property.

    blogPostSchema.virtual('author', {
      ref: 'User',
      localField: 'authorId',
      foreignField: '_id',
      justOne: true
    });

    const User = mongoose.model('User', userSchema);
    const BlogPost = mongoose.model('BlogPost', blogPostSchema);


    await BlogPost.create({ 
        title: 'Introduction to Mongoose', 
        authorId: 1 
    });

    // const doc = new BlogPost({ 
    //     title: 'Introduction to Mongoose', 
    //     authorId: 1 
    // });

    await User.create({ 
        _id: 1, 
        email: 'test@gmail.com' 
    });

    // const users = new User({
    //     _id: 1,
    //     email: 'test@email.com'
    // })

    const doc = await BlogPost.findOne().populate('author');

    // console.log(doc) // 'test@gmail.com'
})();