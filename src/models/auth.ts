export type AccessTokenPayloadDTO = {
    exp: number,
    user_name: string,
    authorities: RoleDTO[]
}

export type RoleDTO = 
    "ROLE_CLIENT" | "ROLE_ADMIN";

export type CredentialsDTO = {
 username: string,
 password: string
}