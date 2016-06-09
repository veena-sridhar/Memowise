import mongoose from '../db';

const CourseSchema = new mongoose.Schema({
  name: String,
  teacherId: String,
  studentIds:[],
  deckIds:[]
}, { timestamps: true });

export default mongoose.model('Course', CourseSchema);
