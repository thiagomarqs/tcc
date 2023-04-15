import { Container } from "@mui/material";
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Message } from "src/components/Message";

export const SecretPage = () => {

  const { state } = useLocation();
  const navigate = useNavigate();

  const [isValidationPending, setIsValidationPending] = useState<boolean>(true);
  const [isCaptchaValid, setIsCaptchaValid] = useState<boolean>(false);

  useEffect(() => {
    const isCaptchaValid = state ? state.isCaptchaValid : '';

    setIsValidationPending(false);

    isCaptchaValid ? setIsCaptchaValid(true) : returnHomeRequiringCaptchaValidationWarning();

  }, []);

  const returnHomeRequiringCaptchaValidationWarning = () => {
    navigate("/", {
      state: {
        shouldShowValidateCaptchaFirstWarning: true
      }
    });
  }

  return (
    <Container maxWidth="sm">
      {
        !isValidationPending && isCaptchaValid &&
        <Message
          title="Sucesso!"
          message="Isto significa que o CAPTCHA foi validado corretamente e, assim, foi possível visualizar esta mensagem!"
          icon="success" />
      }
    </Container>
  )
}