import { EntityRepository, Repository } from 'typeorm';
import UserToken from '../entities/UserToken';

@EntityRepository(UserToken)
class UserTokensRepository extends Repository<UserToken> {
  public async findByToken(token: string): Promise<UserToken | undefined> {
    const user = await this.findOne({
      where: {
        token,
      },
    });

    return user;
  }

  public async findById(id: string): Promise<UserToken | undefined> {
    const userToken = await this.findOne({
      where: {
        id,
      },
    });

    return userToken;
  }

  public async findByEmail(email: string): Promise<UserToken | undefined> {
    const user = await this.findOne({
      where: {
        email,
      },
    });

    return user;
  }
}

export default UserTokensRepository;
