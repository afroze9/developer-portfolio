type IRepository = {
  name: string;
  description: string;
  owner: {
    login: string;
  },
  git_url: string;
}

const filterReposeByOwner = (repos: IRepository[], owner: string) => {
  if (repos.length > 0) {
    return repos.filter(repo => repo.owner.login === owner);
  } else {
    return [];
  }
}

const getStarredRepos = async (user: string, owner: string): Promise<IRepository[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${user}/starred`);
    const repos = await response.json() as IRepository[];
    return filterReposeByOwner(repos, owner);
  } catch (e) {
    console.log(e);
    return [] as IRepository[];
  }
}

export { getStarredRepos }