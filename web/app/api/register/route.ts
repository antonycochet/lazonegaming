import {NextRequest, NextResponse} from "next/server";
import connectDB from "@/services/mongodb/database"
import {User} from "@/models/user";

/**
 * Register a new user.
 * @api {post} /api/register
 *
 * @bodyParam {String} summoner - The Riot summoner name.
 *
 * @param {NextRequest} request - The http request.
 */
export async function POST(request: NextRequest) {
    const res = await request.json();
    const name = res.summoner;
    console.log(name)

    try {
        const database = await connectDB();
        const exists = await User.exists({name: name});

        const _user = new User({
            name: name
        })

        await _user.save();

        console.log(_user);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process with an error
    }

    return NextResponse.json({message: "Hello World"}, {status: 201});
}
