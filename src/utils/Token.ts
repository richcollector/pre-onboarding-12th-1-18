function setToken(tokenValue: string) {
	localStorage.setItem('accessToken', tokenValue);
}

function getToken(): string | null {
	return localStorage.getItem('accessToken');
}

function removeToken(): void {
	localStorage.removeItem('accessToken');
}

export { setToken, getToken, removeToken };
