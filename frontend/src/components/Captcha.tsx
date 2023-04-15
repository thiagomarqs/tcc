import Turnstile from "react-turnstile";

export type CaptchaProps = {
  onVerify: (token: string) => void;
  onError: (error: any) => void;
}

export const Captcha = (props: CaptchaProps) => {
  return (
    <Turnstile
      sitekey="0x4AAAAAAADD6m4_LYaAZ-bI"
      // sitekey="1x00000000000000000000AA"
      onVerify={props.onVerify}
      onError={props.onError}
    />
  )
}