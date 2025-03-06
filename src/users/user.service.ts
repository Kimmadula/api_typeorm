import { AppDataSource } from '../_helpers/db';
import { User } from './user.entity';

export const userRepository = AppDataSource.getRepository(User);

export const userService = {
    create,
    getAll,
    getById,
    update,
    delete: _delete
};

async function create(params: Partial<User>) {
    const user = userRepository.create(params);
    await userRepository.save(user);
    return user;
}

async function getAll() {
    return await userRepository.find();
}

async function getById(id: number) {
    return await userRepository.findOneBy({ id });
}

async function update(id: number, params: Partial<User>) {
    const user = await getById(id);
    if (!user) throw new Error('User not found');

    Object.assign(user, params);
    await userRepository.save(user);
}

async function _delete(id: number) {
    const user = await getById(id);
    if (!user) throw new Error('User not found');

    await userRepository.remove(user);
}
