const fullDoc = await User.findOne();
fullDoc.domain; // 'gmail.com'

const leanDoc = await User.findOne().lean();
leanDoc.domain; // undefined