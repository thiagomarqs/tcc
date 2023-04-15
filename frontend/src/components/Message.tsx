import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { Card } from "@mui/material";

export const Message = (props: {
  title: string,
  message: string,
  icon: 'wait' | 'success' | 'error'
}) => {
  const { title, message, icon } = props;

  return (
    <Card className="p-5 text-center">
      {icon === "wait" && <AccessTimeIcon className="my-5" color="warning" fontSize="large" />}
      {icon === "success" && <CheckCircleIcon className="my-5" color="primary" fontSize="large" />}
      {icon === "error" && <ErrorIcon className="my-5" color="error" fontSize="large" />}
      
      <h2 className="text-2xl">{title}</h2>
      <div className="my-5">
        <p>{message}</p>
      </div>
    </Card>
  )
}