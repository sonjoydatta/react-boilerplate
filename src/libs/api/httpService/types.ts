export type HttpResponse<T> =
	| { success: true; data: T; message?: string }
	| { success: false; data?: T; message: string };

export type RequestOptions = {
	headers?: Record<string, string>;
};

export type RequestBody = string | FormData | null;

export type HttpServiceConfig = {
	getToken?: () => string | null;
	getRefreshToken?: () => string | null;
	onUpdateToken?: (token: string) => void;
	onUnauthorised?: () => void;
};

export type RefreshTokenResponse = {
	access_token: string;
};
