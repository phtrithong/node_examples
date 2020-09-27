const bcrypt = require('bcrypt');

// bcrypt.genSalt(10)
// .then(salt => {
//     return bcrypt.hash('phtrithong', salt)
// })
// .then(hashed => {
//     console.log(hashed);
// })
// .catch(err => {
//     console.log(err);
// })

bcrypt.compare('phtrithong', '$2b$10$3ELdasa7SVHMvnvFNuD63eIgDVQ90i0t7eO35VA8w8FcEaduj2u4u')
.then(result => {
    console.log(result)
})
.catch(err => {
    console.log(err);
})

bcrypt.compare('phtrithong', '$2b$10$Y9QiB/C60tYu35nND6ncCOurVqMvqUaGE8RTAsKK2Obz6k.4o4Ie2')
.then(result => {
    console.log(result)
})
.catch(err => {
    console.log(err);
})