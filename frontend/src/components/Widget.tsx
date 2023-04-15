import { Alert, Button, Card, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CaptchaService } from "src/service/CaptchaService";
import { Captcha } from "./Captcha";

export const Widget = () => {

  const { state } = useLocation();
  const navigate = useNavigate();

  const [isCaptchaValid, setIsCaptchaValid] = useState<boolean>(false);
  const [shouldShowValidateCaptchaFirstWarning, setShowValidateCaptchaFirstWarning] = useState<boolean>(false);
  const [shouldShowSnackbar, setShowSnackbar] = useState<boolean>(false);
  const [shouldShowForgotPasswordDialog, setShowForgotPasswordDialog] = useState<boolean>(false);

  useEffect(() => {
    const shouldShowValidateCaptchaFirstWarning = state ? state.shouldShowValidateCaptchaFirstWarning : false;
    setShowValidateCaptchaFirstWarning(shouldShowValidateCaptchaFirstWarning);
  }, [])

  const handleCaptchaSuccess = async (token: string) => {
    const { isTokenValid } = await CaptchaService.verify(token);
    setIsCaptchaValid(isTokenValid);
  }

  const handleCaptchaError = (error: any) => {
    console.log(error);
    setShowSnackbar(true);
  }

  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    navigate("/paginaProtegida", {
      state: {
        isCaptchaValid: isCaptchaValid
      }
    });
  }

  return (
    <Container maxWidth="sm">

      <Dialog open={shouldShowForgotPasswordDialog}>
        <DialogTitle>Preciso de Ajuda</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Azar o seu.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowForgotPasswordDialog(false)}>:(</Button>
        </DialogActions>
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

      <Snackbar open={shouldShowSnackbar} autoHideDuration={1000}>
        <Alert severity="error" sx={{ width: '100%' }}>
          Um erro ocorreu ao validar o CAPTCHA!
        </Alert>
      </Snackbar>

      <Card className="p-5">
        <div className="my-4">
          <Captcha
            onVerify={handleCaptchaSuccess}
            onError={handleCaptchaError}
          />
        </div>
        <div>
          <span className="text-sky-600 cursor-pointer hover:underline" onClick={() => setShowForgotPasswordDialog(true)}>Preciso de ajuda</span>
        </div>
        <div className="my-4 text-right">
          <Button disabled={!isCaptchaValid} onClick={handleNext} variant="contained">Avançar</Button>
        </div>
      </Card>
    </Container>
  )
}