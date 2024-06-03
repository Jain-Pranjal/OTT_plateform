// here we will collect the data from the form and send it to the database
// here all the server code will be written that will hit the backend and will send the data to the database and will also fetch the data from the database
import Contact from "@/models/contact";
import dbConn from "@/utils/dbConn";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await dbConn();
        const {username,email,subject,message} = await request.body;
        const newContact = new Contact({
            username,
            email,
            subject,
            message
        });
        await newContact.save();
      


        return NextResponse.json({message:"Data received"},{status:200});
    } catch (error) {
        return NextResponse.json({message:"Data not received"},{status:400},{error:error.message});
        
    }
}

//   Contact is the model just like the usermodel that is use for the CRUD operations

