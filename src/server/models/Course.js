import mongoose from '../db';

const CourseSchema = new mongoose.Schema({
  name: String,
  studentIds:[],
  deckIds:[]
}, { timestamps: true });

export default mongoose.model('Deck', DeckSchema);
