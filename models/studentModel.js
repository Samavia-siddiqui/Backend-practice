
import {Model,Schema} from 'mongoose';

const studentSchema = new Schema({
    studentName: String,
    course: String,
    age: Number,
});
    const Student = mongoose.model('Student', studentSchema);

    export default Student