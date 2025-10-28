import { useAppSelector } from "../../app/hooks";
import ProfileCard from "../../components/ProfileCard";
import RepoList from "../../components/RepoList";
import SearchBar from "../../components/SearchBar";
import { useGetReposQuery, useGetUserQuery } from "../../features/github/githubApi";


const HomePage = () => {
  const username = useAppSelector((state) => state.github.username);
  const { data: user, isLoading: userLoading, error: userError } = useGetUserQuery(username, { skip: !username });
  const { data: repos, isLoading: reposLoading } = useGetReposQuery(username, { skip: !username });

  return (
    <>
      <SearchBar />
      {userLoading && <p>Loading user...</p>}
      {userError && <p>User not found 😢</p>}
      {user && <ProfileCard user={user} />}
      {repos && <RepoList repos={repos} loading={reposLoading} />}
    </>
  );
};

export default HomePage;
