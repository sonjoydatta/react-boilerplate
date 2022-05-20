export type BaseResponse<T> = {
	success: boolean;
	data: T;
};

export type HttpOptions = {
	debug?: boolean;
};

export type IRequestInit = Omit<RequestInit, 'body'>;

export type DebugOptions<T> = {
	url: string;
	method: IRequestInit['method'];
	data?: T;
} & Partial<Pick<Response, 'status' | 'ok'>>;
