// URL base da API - altere para seu backend
const API_URL = 'https://api.seubackend.com';

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface RegisterData extends LoginCredentials {
    name: string;
    email: string;
}

export interface AuthResponse {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
        username: string;
    };
}

export const authService = {
    async login(credentials: LoginCredentials): Promise<AuthResponse> {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Erro ao fazer login');
        }

        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        return data;
    },

    async register(data: RegisterData): Promise<AuthResponse> {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Erro ao cadastrar');
        }

        const responseData = await response.json();
        localStorage.setItem('token', responseData.token);
        localStorage.setItem('user', JSON.stringify(responseData.user));
        return responseData;
    },

    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    isAuthenticated(): boolean {
        return !!localStorage.getItem('token');
    },

    getToken(): string | null {
        return localStorage.getItem('token');
    },

    getUser(): AuthResponse['user'] | null {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },
};