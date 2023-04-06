import { ICreateUser } from '../../models/ICreateUser';
import { IUsersRepository } from '../IUsersRepository';
import User from '../../../infra/typeorm/entities/User';
import { IUser } from '../../models/IUser';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async user({ name, email, password }: ICreateUser): Promise<User> {
    const user = {
      id: '123456',
      name,
      email,
      password,
      avatar: 'avatar',
      getAvatarUrl: function () {
        if (!this.avatar) {
          return null;
        }

        return `${process.env.APP_API_URL}/files/${this.avatar}`;
      },
      created_at: new Date(),
      updated_at: new Date(),
    };

    return user;
  }

  public async findAll(): Promise<IUser[]> {
    const user = {
      id: '123456',
      name: 'João',
      email: 'joao@example.com',
      password: '123456',
      avatar: 'avatar_url',
      created_at: new Date(),
      updated_at: new Date(),
    };

    const users = [user];

    return users;
  }

  public async findByName(name: string): Promise<IUser | undefined> {
    if (name === 'notFound') {
      return undefined;
    }

    const user = {
      id: '123456',
      name: 'notFound',
      email: 'example@example.com',
      password: 'password',
      avatar: 'avatar_url',
      created_at: new Date(),
      updated_at: new Date(),
    };

    return user;
  }

  public async findById(id: string): Promise<IUser | undefined> {
    if (id === 'notFound') {
      return undefined;
    }

    const user = {
      id: '123456',
      name: 'notFound',
      email: 'example@example.com',
      password: 'password',
      avatar: 'avatar_url',
      created_at: new Date(),
      updated_at: new Date(),
    };

    return user;
  }

  public async findByEmail(email: string): Promise<IUser | undefined> {
    if (email === 'notFound') {
      return undefined;
    }

    const user = {
      id: '123456',
      name: 'notFound',
      email: 'example@example.com',
      password: 'password',
      avatar: 'avatar_url',
      created_at: new Date(),
      updated_at: new Date(),
    };

    return user;
  }

  public async create(data: ICreateUser): Promise<IUser> {
    const user = new User();

    Object.assign(user, { id: '123456' }, data);

    this.users.push(user);

    return user;
  }

  public async save(user: IUser): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
}

export default FakeUsersRepository;
