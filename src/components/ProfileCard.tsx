import { Card, CardContent, Avatar, Typography, Stack, Link } from "@mui/material";
import type { User } from "../types/github";

const ProfileCard = ({ user }: { user: User }) => {
  return (
    <Card sx={{ mb: 3, p: 2 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar src={user.avatar_url} sx={{ width: 80, height: 80 }} />
        <CardContent>
          <Typography variant="h6">{user.name}</Typography>
          <Typography color="text.secondary">@{user.login}</Typography>
          <Typography sx={{ mt: 1 }}>{user.bio}</Typography>
          <Stack direction="row" spacing={3} mt={2}>
            <Typography>👥 Followers: {user.followers}</Typography>
            <Typography>Following: {user.following}</Typography>
          </Stack>
          <Link href={user.html_url} target="_blank" sx={{ display: "block", mt: 1 }}>
            View on GitHub
          </Link>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default ProfileCard;
