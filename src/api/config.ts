const BASE_URL = 'https://api.github.com/search/';

type TLang = 'typescript' | 'javascript';
type TSort = 'help-wanted-issues' | 'updated' | 'forks' | 'stars';
type TOrder = 'asc' | 'desc';

export const searchRepos = (
	lang: TLang = 'typescript',
	sort: TSort = 'stars',
	order: TOrder = 'desc'
): string => {
	return (
		BASE_URL + `repositories?q=language:${lang}&sort=${sort}&order=${order}`
	);
};
