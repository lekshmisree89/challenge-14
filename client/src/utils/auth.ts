import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {

    // TODO: return the decoded token
    return jwtDecode<JwtPayload>(this.getToken());

    
  }

  loggedIn() {

    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return token ? !this.isTokenExpired(token) : false;

  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    const payload = jwtDecode<JwtPayload>(token);
    return payload.exp < Date.now() / 1000;
  }

  getToken(): string {

    // TODO: return the token
    return localStorage.getItem('id_token') || '';
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page


  }

  logout() {

    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
  }
}

export default new AuthService();
