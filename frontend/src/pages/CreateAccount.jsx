import heroImg from "../assets/heros/create-account-hero.svg";
import AuthLayout from "../features/authentication/AuthLayout";
import CreateAccountForm from "../features/authentication/CreateAccountForm";

export default function CreateAccount() {
  return (
    <AuthLayout
      heroImg={heroImg}
      heading="Create Account"
      subHeading="Give us some of your information for sign up."
    >
      <CreateAccountForm />
    </AuthLayout>
  );
}
