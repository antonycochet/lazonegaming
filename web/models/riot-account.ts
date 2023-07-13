import mongoose, {model, Document} from "mongoose";

export interface IRiotAccount extends Document {
    /** Unique identifier for the Riot Account. */
    puuid: string;
    /** Account name. */
    name: string;
}

export const riotAccountSchema = new mongoose.Schema<IRiotAccount>({
    puuid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    }
});

export const RiotAccount = mongoose.models.RiotAccount || model("RiotAccount", riotAccountSchema);
