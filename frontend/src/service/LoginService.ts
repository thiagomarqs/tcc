import axios from 'axios';

const endpoint = 'https://dummyjson.com/auth/login';

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  message: string;
}

export class LoginService {

  /**
   * Calls the dummyJSON login API
   */
  public static async login(data: {username: string, password: string}): Promise<LoginResponse> {

    const result = await axios.post<LoginResponse>(endpoint, data);

    return result.data;
  }

}