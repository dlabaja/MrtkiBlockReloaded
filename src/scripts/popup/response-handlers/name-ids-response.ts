import {IMessageNameIdsResponse} from "../../interfaces/messages";
import {updateNameIds} from "../scripts/name-ids";

export async function handleNameIdsResponse(message: IMessageNameIdsResponse) {
    updateNameIds(message.nameIdsWithSources);
}