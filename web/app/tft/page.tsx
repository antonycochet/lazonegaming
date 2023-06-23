
import { apiRiot } from "@/services/riot-api/riot-api";
import { endpoints } from "@/constants";
import { users } from "@/constants";
import { TSummonersInformations, TSummonnersRanked } from "@/ts/type/type";

const listSummonersInformations = async () => {
    const promises = users.tftPlayers.map(user => {
       return () => apiRiot(`${endpoints.getSummonerInformations}/${user}`)
    });

    return await Promise.allSettled(promises.map((promise) => promise()))
}

const listSummonersRanked = async (informations: TSummonersInformations) => {
    const promises = informations.map(information => {
       return () => apiRiot(`${endpoints.getSummonerRanked}/${information.value.id}`)
    });

    return await Promise.allSettled(promises.map((promise) => promise()))
}

const leaderBoardHeads = ["Nom d'invocateur", "Division", "Rang", "Wins", "Losses"]

export default async function TftPage() {
    const summonersInformations: TSummonersInformations = await listSummonersInformations();
    const summonnersRanked: TSummonnersRanked = await listSummonersRanked(summonersInformations)
    
    return (
        <>
            <h1 className="text-8xl text-white font-bold text-center p-16">TFT Leaderboard</h1>
            <table className="mx-auto max-w-5xl w-full border-collapse bg-white text-left text-sm text-gray-700">
                <thead className="bg-gray-50">
                    <tr>
                        {leaderBoardHeads.map(leaderBoardHead => {
                            return(
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">{leaderBoardHead}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {summonnersRanked.map((summoner: any) => {
                        let ranked = summoner.value[0]
                        //TODO DIVISION IMAGE 
                        return(
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-bold">{ranked.summonerName}</td>
                                <td className="px-6 py-4">{ranked.tier}</td>
                                <td className="px-6 py-4">{ranked.rank}</td>
                                <td className="px-6 py-4">{ranked.wins}</td>
                                <td className="px-6 py-4">{ranked.losses}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}