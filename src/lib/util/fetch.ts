export class FetchError extends Error {
	status: number;
	constructor(message: string, status: number) {
		super(message);
		this.status = status;
	}
}

export async function fetchWithRetry<T>(
	url: string,
	options: RequestInit,
	retryLimit: number
): Promise<T> {
	let error;
	for (let i = 0; i < retryLimit; i++) {
		try {
			const response = await fetch(url, options);
			if (!response.ok) {
				error = new FetchError('Fetch failed', response.status);
				if (response.status !== 429 && response.status !== 500) {
					throw error;
				}
			} else {
				return response.json();
			}
		} catch (err) {
			error = err;
			if (i === retryLimit - 1) throw error;
		}
		await new Promise((resolve) => setTimeout(resolve, (i + 1) * 1000));
	}
	throw error;
}
