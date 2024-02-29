interface ApiResponse {
    ok: boolean,
    msg: string
}

interface TokenResponse extends ApiResponse {
    token: string
}

interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
}

interface UserResponse extends ApiResponse {
    user: User
}

interface Data {
    [k: string]: any
}

interface Alert {
    msg: string,
    success: boolean
}