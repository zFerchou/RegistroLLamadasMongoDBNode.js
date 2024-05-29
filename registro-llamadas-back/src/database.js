const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/llamadas', {
    
}).then(() => {
    console.log('Database is connected');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});
