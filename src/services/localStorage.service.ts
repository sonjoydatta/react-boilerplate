export class LocalStorageService {
	private storage: Storage;

	constructor() {
		this.storage = window.localStorage;
	}

	get<T>(key: string): T | null {
		const value = this.storage.getItem(key);
		return value ? JSON.parse(value) : null;
	}

	set(key: string, value: unknown) {
		this.storage.setItem(key, JSON.stringify(value));
	}

	remove(key: string) {
		this.storage.removeItem(key);
	}
}
