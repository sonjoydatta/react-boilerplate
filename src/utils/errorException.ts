/**
 * This is custom error class for handling error in application
 * level. You can pass any type of `arguments` to this class and
 * it will be handled by itself.
 * @example
 * ```
 * const error = {
 *  message: {
 *    email: [
 *      'A account with this email already exists.',
 *      'Email address is required.'
 *    ],
 *    password: 'Password must be at least 6 characters long.',
 *  }
 * }
 * throw new ErrorException(error);
 * ```
 */
export class ErrorException extends Error {
	constructor(message: unknown) {
		super();
		this.name = this.constructor.name;

		/**
		 * Find a string recursively in an object
		 */
		function getErrorStr(obj: Record<string, unknown>): string {
			const key = Object.keys(obj)[0];
			const value = obj[key];
			if (typeof value === 'string') {
				return value;
			}

			if (typeof value === 'object') {
				return getErrorStr(value as Record<string, unknown>);
			}

			if (Array.isArray(value)) {
				const firstValue = value[0];
				if (typeof firstValue === 'string') {
					return firstValue;
				}

				if (typeof firstValue === 'object') {
					return getErrorStr(firstValue as Record<string, unknown>);
				}
			}

			return 'Something went wrong!';
		}

		if (typeof message === 'string') {
			this.message = message;
		} else if (typeof message === 'object') {
			const error = getErrorStr(message as Record<string, unknown>);
			this.message = error;
		} else {
			this.message = 'Something went wrong!';
		}
	}
}
