const mongoose = require('mongoose')
const Schema = mongoose.Schema



const TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of task'
    },
    Creted_Date: {
        type: Date,
        default: Date.now()
    },
    Status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'complete']
        }],
        default: ['pending']
    },
})

module.export = mongoose.model('Task', TaskSchema)