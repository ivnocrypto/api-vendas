import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  user_id: string;
  name: string;
  email: string;
  password: string;
  old_password: string;
}

class UpdateProfileService {
  public async execute({ user_id }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UsersRepository);

    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found.');
    }

    return user;
  }
}

export default UpdateProfileService;
