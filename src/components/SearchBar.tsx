import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { useAppDispatch } from "../app/hooks";
import { setUsername } from "../features/github/githubSlice";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (input.trim()) dispatch(setUsername(input.trim()));
  };

  return (
    <Stack direction="row" spacing={2} mb={3}>
      <TextField
        fullWidth
        label="Enter GitHub username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Stack>
  );
};

export default SearchBar;
