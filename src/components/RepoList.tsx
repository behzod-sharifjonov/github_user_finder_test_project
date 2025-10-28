import { List, ListItem, ListItemText, Typography, Card } from "@mui/material";
import type { Repo } from "../types/github";

const RepoList = ({ repos, loading }: { repos: Repo[]; loading: boolean }) => {
  if (loading) return <Typography>Loading repositories...</Typography>;

  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>Repositories ({repos.length})</Typography>
      <List>
        {repos.map((repo) => (
          <ListItem key={repo.id} divider>
            <ListItemText
              primary={
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              }
              secondary={`${repo.description || "No description"} ⭐ ${repo.stargazers_count}`}
            />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default RepoList;
