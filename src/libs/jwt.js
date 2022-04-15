class JwtService {
  constructor(jwt, secret) {
    this.jwt = jwt;
    this.secret = secret;
  }

  async decodeToken(token) {
    return await this.jwt.verify(token, this.secret);
  }

  async generateRefreshToken(user) {
    return await this.jwt.sign(user, this.secret, { expiresIn: '1y' });
  }

  async generateToken(data) {
    return await this.jwt.sign(data, this.secret, { expiresIn: '1800s' });
  }
}

export default JwtService;
