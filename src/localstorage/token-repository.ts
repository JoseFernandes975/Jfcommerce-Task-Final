import { TOKEN_KEY } from "../utils/system";

export function saveToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
}

export function get() {
    return localStorage.getItem(TOKEN_KEY);
}