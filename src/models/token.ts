export type AccessTokenPayloadDTO = {
    exp: number,
    user_name: string,
    authorities: RoleDTO[]
}

export enum RoleDTO {
    "ROLE_CLIENT",
    "ROLE_ADMIN"
}