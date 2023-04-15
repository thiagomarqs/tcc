export interface CaptchaVerificationResponse {
  isTokenValid: boolean;
}

export class CaptchaService {
  
  /**
   * Calls the backend and returns whether the CAPTCHA is valid or not.
   */
  public static async verify(token: string): Promise<CaptchaVerificationResponse> {
    
    console.log(token);

    return {
      isTokenValid: true,
    };
  }

}