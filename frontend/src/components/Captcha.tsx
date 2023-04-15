import Turnstile from "react-turnstile";

export type CaptchaProps = {
  onVerify: (token: string) => void;
  onError: (error: any) => void;
}

const sitekey = import.meta.env.VITE_SITEKEY;

export const Captcha = (props: CaptchaProps) => {
  return (
    <Turnstile
      sitekey={sitekey}
      onVerify={props.onVerify}
      onError={props.onError}
    />
  )
}