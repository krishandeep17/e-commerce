import { SvgIcon } from "@mui/material";

export default function PurchasesIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 7C2 4.79086 3.79086 3 6 3H18C20.2091 3 22 4.79086 22 7V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V7Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 7H22V11H2V7Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8 17H6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
}
