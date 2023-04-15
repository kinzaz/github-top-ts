import { searchRepos } from "./config";

export const getReposTS = async () => {
	const response = await fetch(searchRepos());
	const data = await response.json();
	return data;
};
