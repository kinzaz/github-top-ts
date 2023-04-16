export type TRequest = {
	lang: 'javascript' | 'typescript';
	sort: 'stars';
	order: 'desc' | 'asc';
	perPage: string;
	page: number;
};
