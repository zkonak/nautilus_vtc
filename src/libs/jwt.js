import jwt_decode from 'jwt-decode';

class JwtService {
  constructor(jwt, secret) {
    this.jwt = jwt;
    this.secret = secret;
  }

  async decodeToken(token) {
    return await this.jwt.verify(token, this.secret);
  }

  async verifyExpireToken(token) {
    const decoded = jwt_decode(token);
    const { expiresIn } = decoded;
    if (expiresIn < (new Date().getTime() + 1) / 1000) {
      return false;
    }
    return true;
  }

  async generateRefreshToken(user) {
    return await this.jwt.sign(user, this.secret, { expiresIn: '1y' });
  }

  async generateToken(data) {
    return await this.jwt.sign(data, this.secret, { expiresIn: '2y' });
  }
}

export default JwtService;
