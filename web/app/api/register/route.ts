import {NextRequest, NextResponse} from "next/server";
import connectDB from "@/services/mongodb/database"
import {User} from "@/models/user";
import {getSummonerInformation} from "@/services/riot-api/summoners/riot-summoner-api";
import {IRiotAccount, RiotAccount} from "@/models/riot-account";
import {MongoError} from "mongodb";
import {SummonerDTO} from "@/ts/type/type";

/**
 * Register a new user.
 * @api {post} /api/register
 *
 * @bodyParam {String} summoner - The Riot summoner name.
 *
 * @param {NextRequest} request - The http request.
 */
export async function POST(request: NextRequest) {
    const {summoner, username} = await request.json();
    let user;

    try {
        await connectDB();
        user = await User.findOne({name: username}).populate('accounts');

        if (!user) {
            user = await User.create({name: username});
        }

        let riotSummoner: SummonerDTO;
        try {
            riotSummoner = await getSummonerInformation(summoner);
        } catch (error: any) {
            if (error.status === 404) {
                return NextResponse.json({message: "Summoner not found."}, {status: 404});
            }

            return;
        }

        const accountAlreadyRegistered = user.accounts.some((account: IRiotAccount) => account.puuid === riotSummoner.puuid);

        if (accountAlreadyRegistered) {
            return NextResponse.json({message: "Account already registered."}, {status: 409});
        }

        const account = await RiotAccount.create({name: riotSummoner.name, puuid: riotSummoner.puuid});
        user.accounts.push(account);

        await user.save();
    } catch (error: any) {
        if (error instanceof MongoError) {
            return NextResponse.json({message: error.message}, {status: 500});
        }

        return NextResponse.json({message: error.message}, {status: 400});
    }

    return NextResponse.json(user, {status: 201});
}
