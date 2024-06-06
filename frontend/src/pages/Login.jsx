import heroImg from "../assets/heros/login-hero.svg";
import AuthLayout from "../features/authentication/AuthLayout";
import LoginForm from "../features/authentication/LoginForm";

export default function Login() {
  return (
    <AuthLayout
      heroImg={heroImg}
      heading="Welcome back!"
      subHeading="Please enter your details to login."
      style={{
        "@media (max-height: 600px)": {
          mt: 10,
        },
      }}
    >
      <LoginForm />
    </AuthLayout>
  );
}
