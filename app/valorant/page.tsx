import {api} from "@/services/riot-api/riot-api";

const getData = async () => {
    return await api("riot/account/v1/accounts/by-riot-id/jesaispasqui%20INT/EUW");
}

export default async function ValorantPage() {
    const data = await getData()

    return <h1 className="text-5xl text-white">Valorant</h1>
}