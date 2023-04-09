import { IUserToken } from '../../models/IUserToken';
import { IUserTokensRepository } from '../IUserTokensRepository';

class FakeUserTokensRepository implements IUserTokensRepository {
  public async findByToken(token: string): Promise<IUserToken | undefined> {
    if (token === 'notFound') {
      return undefined;
    }

    const userToken = {
      id: '123456',
      token,
      user_id: 'string',
      created_at: new Date(),
      updated_at: new Date(),
    };

    return userToken;
  }

  public async generate(user_id: string): Promise<IUserToken> {
    const userToken = {
      id: '123456',
      token: '123456',
      user_id,
      created_at: new Date(),
      updated_at: new Date(),
    };

    return userToken;
  }
}

export default FakeUserTokensRepository;
