import {
  CreditCardOutlined,
  LocalShippingOutlined,
  PaidOutlined,
  SupportAgentOutlined,
} from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";

const services = [
  {
    title: "Free Shipping",
    description: "Free shipping for order above $150",
    icon: <LocalShippingOutlined color="primary" fontSize="large" />,
  },
  {
    title: "Money Guarantee",
    description: "Within 30 days for an exchange",
    icon: <PaidOutlined color="primary" fontSize="large" />,
  },
  {
    title: "Online Support",
    description: "24 hours a day, 7 days a week",
    icon: <SupportAgentOutlined color="primary" fontSize="large" />,
  },
  {
    title: "Flexible Payment",
    description: "Pay with multiple credit cards",
    icon: <CreditCardOutlined color="primary" fontSize="large" />,
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
        {services.map((service) => (
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
