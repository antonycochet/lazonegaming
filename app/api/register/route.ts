import {NextRequest, NextResponse} from "next/server";

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

    //TODO: Store user in database
    console.log(res);
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
