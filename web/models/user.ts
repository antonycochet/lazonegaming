import mongoose, {model, Schema, Types} from "mongoose";
import {IRiotAccount, RiotAccount} from "@/models/riot-account";

interface IUser extends Document {
    /** User name. */
    name: string;
    /** User accounts. */
    accounts: Types.Array<Types.ObjectId> | IRiotAccount[];
}

const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    accounts: [
        {
            type: Schema.Types.ObjectId, ref: "RiotAccount"
        }
    ]
});

export const User = mongoose.models.User || model("User", userSchema);
