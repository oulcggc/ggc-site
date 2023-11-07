// Modified from Newt-Inc/newt-client-js, original license below:

// MIT License

// Copyright (c) 2021 - 2022 Newt, Inc.

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import { PRIVATE_NEWT_CDN_TOKEN, PRIVATE_NEWT_SPACE_UID } from '$env/static/private';
import { fetchWithRetry } from '$lib/util/fetch';
import qs from 'qs';

const parseAndQuery = (andQuery: FilterQuery[]) => {
	if (!andQuery) throw new Error('invalid query');
	const rawAndConditions: string[] = [];
	const encodedAndConditions: string[] = [];

	andQuery.forEach((query: FilterQuery) => {
		const { raw, encoded } = parseQuery(query);
		rawAndConditions.push(raw);
		encodedAndConditions.push(encoded);
	});
	const rawQ = rawAndConditions.join('&');
	const encodedQ = encodedAndConditions.join('&');
	return { raw: rawQ, encoded: encodedQ };
};

const parseOrQuery = (orQuery: FilterQuery[]) => {
	if (!orQuery) throw new Error('invalid query');
	const rawOrConditions: string[] = [];

	orQuery.forEach((query: FilterQuery) => {
		const { raw } = parseQuery(query);
		rawOrConditions.push(raw);
	});
	const params = new URLSearchParams();
	params.set('[or]', `(${rawOrConditions.join(';')})`);
	const rawQ = `[or]=(${rawOrConditions.join(';')})`;
	return { raw: rawQ, encoded: params.toString() };
};

export const parseQuery = (query: Query) => {
	let andQuery = { raw: '', encoded: '' };
	if (query.and) {
		andQuery = parseAndQuery(query.and);
		delete query.and;
	}

	let orQuery = { raw: '', encoded: '' };
	if (query.or) {
		orQuery = parseOrQuery(query.or);
		delete query.or;
	}

	const rawQuery = qs.stringify(query, { encode: false, arrayFormat: 'comma' });
	const encodedQuery = qs.stringify(query, { arrayFormat: 'comma' });
	const raw = [rawQuery, orQuery.raw, andQuery.raw].filter((queryString) => queryString).join('&');
	const encoded = [encodedQuery, orQuery.encoded, andQuery.encoded]
		.filter((queryString) => queryString)
		.join('&');
	return { raw, encoded };
};

export interface CreateClientParams {
	spaceUid: string;
	token: string;
	apiType?: 'cdn' | 'api';
	retryOnError?: boolean;
	retryLimit?: number;
}
export interface GetContentsParams {
	appUid: string;
	modelUid: string;
	query?: GetContentsQuery;
}
export interface GetContentParams {
	appUid: string;
	modelUid: string;
	contentId: string;
	query?: GetContentQuery;
}
export interface GetFirstContentParams {
	appUid: string;
	modelUid: string;
	query?: GetFirstContentQuery;
}
declare type OperatorValue = {
	ne?: string | number | boolean;
	match?: string;
	in?: string[] | number[];
	nin?: string[] | number[];
	all?: string[] | number[];
	exists?: boolean;
	lt?: string | number;
	lte?: string | number;
	gt?: string | number;
	gte?: string | number;
	fmt?: 'text';
};
declare type QueryValue = string | number | boolean | OperatorValue;
export declare type FilterQuery = {
	or?: Array<FilterQuery>;
	and?: Array<FilterQuery>;
	[key: string]: QueryValue | Array<FilterQuery> | undefined;
};
export declare type Query = {
	select?: string[];
	order?: string[];
	limit?: number;
	skip?: number;
	depth?: number;
	or?: Array<FilterQuery>;
	and?: Array<FilterQuery>;
	[key: string]: QueryValue | string[] | Array<FilterQuery> | undefined;
};
export declare type GetContentsQuery = Query;
declare type ExceptFormat = {
	select?: string[];
	depth?: number;
};
declare type Format = {
	[key: string]: {
		fmt: 'text';
	};
};
export declare type GetContentQuery = ExceptFormat | Format;
export declare type GetFirstContentQuery = Omit<Query, 'limit'>;
export interface Contents<T> {
	skip: number;
	limit: number;
	total: number;
	items: Array<T>;
}
export interface Content {
	_id: string;
	_sys: {
		createdAt: string;
		updatedAt: string;
		customOrder: number;
		raw: {
			createdAt: string;
			updatedAt: string;
			firstPublishedAt: string;
			publishedAt: string;
		};
	};
}
export interface Image {
	_id: string;
	src: string;
	fileName: string;
	fileType: string;
	fileSize: number;
	width: number;
	height: number;
	title: string;
	description: string;
	altText: string;
	metadata: Record<string, string | number | boolean>;
}
export interface File {
	_id: string;
	src: string;
	fileName: string;
	fileType: string;
	fileSize: number;
	width: number | null;
	height: number | null;
	title: string;
	description: string;
	altText: string;
	metadata: Record<string, string | number | boolean>;
}
export interface Media {
	_id: string;
	src: string;
	fileName: string;
	fileType: string;
	fileSize: number;
	width: number | null;
	height: number | null;
	title: string;
	description: string;
	altText: string;
	metadata: Record<string, string | number | boolean>;
}
export declare type AppIcon = {
	type: string;
	value: string;
};
export declare type AppCover = {
	type: string;
	value: string;
};
export interface AppMeta {
	name: string;
	uid: string;
	icon?: AppIcon;
	cover?: AppCover;
}
export interface GetAppParams {
	appUid: string;
}
export {};

export interface Content {
	_id: string;
	_sys: {
		createdAt: string;
		updatedAt: string;
		customOrder: number;
		raw: {
			createdAt: string;
			updatedAt: string;
			firstPublishedAt: string;
			publishedAt: string;
		};
	};
}

export interface Contents<T extends Content> {
	skip: number;
	limit: number;
	total: number;
	items: Array<T>;
}

interface FileBase {
	_id: string;
	src: string;
	fileName: string;
	fileType: string;
	fileSize: number;
	title: string;
	description: string;
	altText: string;
	metadata: Record<string, string | number | boolean>;
}

export interface File extends FileBase {
	width: number | null;
	height: number | null;
}

export interface Image extends FileBase {
	width: number;
	height: number;
}

export interface Post extends Content {
	title: string;
	body: string;
	coverImage: Image;
	slug: string;
	author: {
		fullName: string;
		slug: string;
		biography: string;
		profileImage: Image | null;
	};
	tags: string[];
}

export interface GetContentParams {
	appUid: string;
	modelUid: string;
	contentId: string;
	query?: GetContentQuery;
}

class NewtClient {
	private baseUrl: string;
	private headers: Headers;
	private retryOnError: boolean;
	private retryLimit: number;

	constructor({
		spaceUid,
		token,
		apiType = 'cdn',
		retryOnError = true,
		retryLimit = 3
	}: CreateClientParams) {
		if (!spaceUid) throw new Error('spaceUid parameter is required.');
		if (!token) throw new Error('token parameter is required.');
		if (!['cdn', 'api'].includes(apiType))
			throw new Error(`apiType parameter should be set to "cdn" or "api". apiType: ${apiType}`);
		if (retryLimit > 10) throw new Error('retryLimit should be a value less than or equal to 10.');

		this.baseUrl = `https://${spaceUid}.${apiType}.newt.so`;
		this.headers = new Headers({
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		});
		this.retryOnError = retryOnError;
		this.retryLimit = retryLimit;
	}

	public async getContents<T extends Content>({
		appUid,
		modelUid,
		query
	}: GetContentsParams): Promise<Contents<T>> {
		if (!appUid) throw new Error('appUid parameter is required.');
		if (!modelUid) throw new Error('modelUid parameter is required.');

		let url = new URL(`/v1/${appUid}/${modelUid}`, this.baseUrl);
		if (query && Object.keys(query).length) {
			const { encoded } = parseQuery(query);
			url.search = encoded;
		}

		return await fetchWithRetry(
			url.toString(),
			{ headers: this.headers },
			this.retryOnError ? this.retryLimit : 0
		);
	}

	public async getContent<T>({ appUid, modelUid, contentId, query }: GetContentParams): Promise<T> {
		if (!appUid) throw new Error('appUid parameter is required.');
		if (!modelUid) throw new Error('modelUid parameter is required.');
		if (!contentId) throw new Error('contentId parameter is required.');

		let url = new URL(`/v1/${appUid}/${modelUid}/${contentId}`, this.baseUrl);
		if (query && Object.keys(query).length) {
			const { encoded } = parseQuery(query);
			url.search = encoded;
		}

		return await fetchWithRetry(
			url.toString(),
			{ headers: this.headers },
			this.retryOnError ? this.retryLimit : 0
		);
	}

	public async getFirstContent<T extends Content>({
		appUid,
		modelUid,
		query
	}: GetFirstContentParams): Promise<T | null> {
		if (query && query.limit) {
			throw new Error('query.limit parameter cannot have a value.');
		}
		const q = { ...query, limit: 1 };

		const contents = await this.getContents<T>({ appUid, modelUid, query: q });
		if (contents.items.length === 0) return null;
		return contents.items[0];
	}

	public async getApp({ appUid }: GetAppParams): Promise<AppMeta> {
		if (!appUid) throw new Error('appUid parameter is required.');
		let url = new URL(`/v1/space/apps/${appUid}`, this.baseUrl);

		return await fetchWithRetry(
			url.toString(),
			{ headers: this.headers },
			this.retryOnError ? this.retryLimit : 0
		);
	}
}

export const client = new NewtClient({
	spaceUid: PRIVATE_NEWT_SPACE_UID,
	token: PRIVATE_NEWT_CDN_TOKEN
});
