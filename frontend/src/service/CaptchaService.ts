import axios from 'axios';

export interface CaptchaValidationResponse {
  isValid: boolean;
}

const endpoint = import.meta.env.VITE_CAPTCHA_VALIDATION_ENDPOINT;

export class CaptchaService {
  
  /**
   * Calls the backend and returns whether the CAPTCHA is valid or not.
   */
  public static async validate(token: string): Promise<CaptchaValidationResponse> {

    const result = await axios.post<CaptchaValidationResponse>(endpoint, {token: token});
    
    return result.data;
  }

}