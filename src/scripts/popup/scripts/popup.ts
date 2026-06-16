import {getPopupContext} from "../../contexts/popup-context";
import {Message} from "../../interfaces/messages";
import {processResponse} from "../router";

import "./config-handler";
import "./error";
import "./name-ids";
import "./subtitle";

getPopupContext().then(async (context) => {
    context.connectionManager.establishConnection(async (m) => {
        await processResponse(m as Message)
    })
});