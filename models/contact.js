// here i will make the scehma for the contact us page in the database
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamp: true,
    })

    // checking if the model is already created or not
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)

export default  Contact;

//  as i have make a model name Contact then at the mongodb it will make a connection with the collection name contacts (small letter and in plural form)