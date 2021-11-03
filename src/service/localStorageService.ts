export class LocalStorageService {
  protected get(key: string): unknown {
    const value = localStorage.getItem(key);
    if (value === null) {
      return null;
    }
    return JSON.parse(value);
  }

  protected getAll(): Record<string, unknown> {
    const result: Record<string, unknown> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key !== null) {
        result[key] = this.get(key);
      }
    }
    return result;
  }

  protected set(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  protected remove(key: string): void {
    localStorage.removeItem(key);
  }

  protected clear(): void {
    localStorage.clear();
  }
}
