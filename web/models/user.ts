import mongoose, {model} from "mongoose";

interface IUser {
    name: string;
}

const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true,
    }
});

export const User = mongoose.models.user || model("User", userSchema);