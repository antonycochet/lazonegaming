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