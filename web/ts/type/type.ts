export type TSummonersInformations = {
    status: string,
    value: {
        id: string,
        accountId: string,
        puuid: string,
        name: string,
        profileIconId: number,
        revisionDate: number,
        summonerLevel: number
    },
}[] | PromiseSettledResult<unknown>[]

export type TSummonnersRanked = {
    status: string,
    value: {
        leagueId: string,
        queueType: string,
        tier: string,
        rank: string,
        summonerId: string,
        summonerName: string,
        leaguePoints: number,
        wins: number,
        losses: number,
        veteran: boolean,
        inactive: boolean,
        freshBlood: boolean,
        hotStreak: boolean
    }[]
}[] | PromiseSettledResult<unknown>[]

export type SummonerDTO = {
    /** Encrypted account ID. Max length 56 characters. */
    accountId: string,
    /** ID of the summoner icon associated with the summoner. */
    profileIconID: number,
    /** Date summoner was last modified specified as epoch milliseconds.
     *  The following events will update this timestamp:
     *  -profile icon change
     *  -playing the tutorial or advanced tutorial
     *  -finishing a game
     *  -summoner name change
     */
    revisionDate: number,
    /** Summoner name. */
    name: string,
    /** Encrypted summoner ID. Max length 63 characters. */
    id: string,
    /** Encrypted PUUID. Exact length of 78 characters. */
    puuid: string,
    /** Summoner level associated with the summoner. */
    summonerLevel: number
}
