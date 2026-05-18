import {IMessageNameIdsResponse} from "../interfaces/messages";
import {setNameIdsTextArea} from "./popup";

export async function handleNameIdsResponse(message: IMessageNameIdsResponse) {
    setNameIdsTextArea(message.nameIds);
}
