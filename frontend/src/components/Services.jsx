import { Container, Grid, Typography } from "@mui/material";

import {
  DollarSignIcon,
  PurchasesIcon,
  ShippingIcon,
  SupportIcon,
} from "./icons";

const servicesArray = [
  {
    title: "Free Shipping",
    description: "Free shipping for orders above $150",
    icon: <ShippingIcon fontSize="large" />,
  },
  {
    title: "Money Guarantee",
    description: "Within 30 days for an exchange",
    icon: <DollarSignIcon fontSize="large" />,
  },
  {
    title: "Online Support",
    description: "24 hours a day, 7 days a week",
    icon: <SupportIcon fontSize="large" />,
  },
  {
    title: "Flexible Payment",
    description: "Pay with multiple credit cards",
    icon: <PurchasesIcon fontSize="large" />,
  },
];

export default function Services() {
  return (
    <Container maxWidth="lg" component="section">
      <Grid
        container
        justifyContent="space-between"
        spacing={5}
        my={{ xs: 7, md: 12 }}
      >
        {servicesArray.map((service) => (
          <Grid item key={service.title} xs={12} sm={6} md={3}>
            {service.icon}
            <Typography component="h5" variant="h6" fontWeight="700" mt={0.5}>
              {service.title}
            </Typography>
            <Typography>{service.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
