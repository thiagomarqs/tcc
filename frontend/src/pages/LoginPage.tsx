import { Alert, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Captcha } from "src/components/Captcha"
import { Login } from "src/components/Login"
import { CaptchaService } from "src/service/CaptchaService";
import { LoginService } from "src/service/LoginService";

export const LoginPage = () => {

  const [isCaptchaValid, setIsCaptchaValid] = useState<boolean>(false);
  const [didValidateCaptcha, setDidValidateCaptcha] = useState<boolean>(false);
  const [shouldShowValidateCaptchaFirstWarning, setShowValidateCaptchaFirstWarning] = useState<boolean>(false);
  const [shouldShowSnackbar, setShowSnackbar] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleCaptchaVerification = async (token: string) => {
    const { isValid } = await CaptchaService.validate(token);
    setDidValidateCaptcha(true);
    setIsCaptchaValid(isValid);
  }

  const handleCaptchaError = (error: any) => {
    console.log(error);
    setShowSnackbar(true);
  }

  const onLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const form = new FormData(event.currentTarget);
    const email = form.get('email') as string;
    const senha = form.get('senha') as string;
    
    const response = await LoginService.login({username: email, password: senha});

    if(response.message) {
      alert("Erro no login.")
      return;
    }

    navigate("/paginaProtegida", {
      state: {
        isCaptchaValid: isCaptchaValid
      }
    });
  };

  return (
    <>
      <Container maxWidth="sm">
        <Snackbar open={shouldShowSnackbar} autoHideDuration={1000}>
          <Alert severity="error" sx={{ width: '100%' }}>
            Um erro ocorreu ao validar o CAPTCHA. Por favor, recarregue a página e tente novamente.
          </Alert>
        </Snackbar>

        <Dialog open={didValidateCaptcha && !isCaptchaValid}>
          <DialogTitle>Erro</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p>O CAPTCHA não passou na validação.</p>
              <p>Por favor, recarregue a página e tente novamente.</p>
            </DialogContentText>
          </DialogContent>
        </Dialog>

        <Dialog open={shouldShowValidateCaptchaFirstWarning}>
          <DialogTitle>CAPTCHA Não Validado</DialogTitle>
          <DialogContent>
            <DialogContentText>
              O CAPTCHA deve ser validado antes de prosseguir para a próxima página. Por favor, aguarde o término da validação e tente novamente.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowValidateCaptchaFirstWarning(false)}>Ok</Button>
          </DialogActions>
        </Dialog>

        <Login 
          disableButton={ !didValidateCaptcha || !isCaptchaValid }
          onLogin={onLogin}
        />

        <div className="flex justify-center">
          <Captcha
            onVerify={handleCaptchaVerification}
            onError={handleCaptchaError}
          />
        </div>

      </Container>
    </>
  )
}