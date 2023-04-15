const BASE_URL = 'https://api.github.com/search/';

type TLang = 'typescript' | 'javascript';
type TSort = 'help-wanted-issues' | 'updated' | 'forks' | 'stars';
type TOrder = 'asc' | 'desc';

export const searchRepos = (
	lang: TLang = 'typescript',
	sort: TSort = 'stars',
	order: TOrder = 'desc',
	perPage: number = 9,
	page: number = 1
): string => {
	return (
		BASE_URL +
		`repositories?q=language:${lang}&sort=${sort}&order=${order}&per_page=${perPage}&page=${page}`
	);
};
