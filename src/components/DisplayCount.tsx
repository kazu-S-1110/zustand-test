import { Button, Stack, Typography } from "@mui/material";
import React, { FC } from "react";

type DisplayCountProps = {
  label?: string;
  count: number;
  onUpdate: () => void;
};

export const DisplayCount: FC<DisplayCountProps> = ({
  label,
  count,
  onUpdate,
}) => {
  return (
    <Stack spacing={3}>
      {label && (
        <Typography variant="h4" component="h2">
          {label}
        </Typography>
      )}
      {count}
      <Button variant="contained" onClick={() => onUpdate()}>
        update
      </Button>
    </Stack>
  );
};
