import {IMessageErrors} from "../../interfaces/messages";
import {updateErrors} from "../scripts/error";

export async function handleErrorsResponse(message: IMessageErrors) {
    updateErrors(message.errors)
}