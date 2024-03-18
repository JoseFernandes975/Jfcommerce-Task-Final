import { createContext } from "react"
import { AccessTokenPayloadDTO } from "../models/token"

export type ContextTokenType = {
    contextTokenPayload: AccessTokenPayloadDTO | undefined,
    setContextTokenPayload: (accessTokenPayloadDTO: AccessTokenPayloadDTO | undefined) => void
}

export const ContextToken = createContext<ContextTokenType>({
 contextTokenPayload: undefined,
 setContextTokenPayload: () => {}
})