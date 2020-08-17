import mongoose from 'mongoose';

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@gaang.c36xk.mongodb.net/test?retryWrites=true&w=majority`;

const db = mongoose.connect(uri, { useNewUrlParser: true });

export default db;
