import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  StarIcon,
  StarOutlineIcon,
} from "../../components/icons";
import { formatRelativeDate } from "../../utils/helpers";

export default function ProductReviews({ reviews }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  if (!reviews.length > 0) return null;

  const displayReviews = isCollapsed ? reviews.slice(0, 4) : reviews;

  return (
    <Container maxWidth="lg" component="section" sx={{ mt: 8 }}>
      <Typography component="h2" variant="h3" mb={5}>
        Reviews
      </Typography>

      <Grid container columnSpacing={4}>
        {displayReviews.map((review, index) => (
          <Grid key={index} item xs={12} md={6}>
            <Stack direction="row" spacing={2}>
              <Avatar />

              <Box>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Typography variant="h6" mb={0.5}>
                    {review.user}
                  </Typography>

                  <Typography color="text.secondary">
                    {formatRelativeDate(review.createdAt)}
                  </Typography>
                </Stack>

                <Rating
                  value={review.rating}
                  precision={0.5}
                  readOnly
                  size="small"
                  icon={<StarIcon fontSize="inherit" />}
                  emptyIcon={<StarOutlineIcon fontSize="inherit" />}
                />

                <Typography mt={1}>&ldquo;{review.comment}&rdquo;</Typography>
              </Box>
            </Stack>

            <Box
              component="hr"
              border="none"
              bgcolor="brand.gray_200"
              height="1px"
              my={4}
            />
          </Grid>
        ))}
      </Grid>

      {reviews.length > 4 && (
        <Button
          variant="outlined"
          endIcon={isCollapsed ? <ArrowDownIcon /> : <ArrowUpIcon />}
          onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}
          sx={{ borderRadius: 7, textTransform: "uppercase" }}
        >
          {isCollapsed ? "Show more" : "Show less"}
        </Button>
      )}
    </Container>
  );
}
