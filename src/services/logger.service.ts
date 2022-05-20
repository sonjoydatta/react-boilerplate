type Level = 'log' | 'warn' | 'error';

/* eslint-disable @typescript-eslint/no-explicit-any */
export class LoggerService {
	constructor(private prefix: string, private isDebug?: boolean) {
		this.isDebug = isDebug || false;
	}

	setIsDebug(isDebug: boolean) {
		this.isDebug = isDebug;
	}

	log(...args: any[]) {
		this.logger(args);
	}

	error(...args: any[]) {
		this.logger(args, 'error');
	}

	warn(...args: any[]) {
		this.logger(args, 'warn');
	}

	debug(level: Level, ...args: any[]) {
		if (this.isDebug) {
			this.logger(args, level);
		}
	}

	private logger(args: any[], level: Level = 'log') {
		const styleStr = 'color: #ffffff; font-weight: bold; padding: 2px 4px; border-radius: 2px';
		const style = {
			log: `${styleStr}; background: #00a8ff`,
			error: `${styleStr}; background: #ff0000`,
			warn: `${styleStr}; background: #ffc107`,
		};
		console[level](`%c[${this.prefix}]`, style[level], ...args);
	}
}
