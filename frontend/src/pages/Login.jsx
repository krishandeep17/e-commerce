import heroImg from "../assets/heros/login.svg";
import AuthLayout from "../features/authentication/AuthLayout";
import LoginForm from "../features/authentication/LoginForm";

export default function Login() {
  return (
    <AuthLayout
      heroImg={heroImg}
      heading="Welcome"
      subHeading="Please login here"
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
