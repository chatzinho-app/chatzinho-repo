import { Role, User } from '@domain/entities'
import { RolesEnum, UserStatusEnum } from '@domain/enums'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class SeedUsers1687647526880 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Find roles
    const superAdminRole = await queryRunner.manager
      .getRepository(Role)
      .findOne({ where: { name: RolesEnum.SUPER_ADMIN } })

    const adminRole = await queryRunner.manager
      .getRepository(Role)
      .findOne({ where: { name: RolesEnum.ADMIN } })

    const userRole = await queryRunner.manager
      .getRepository(Role)
      .findOne({ where: { name: RolesEnum.USER } })

    // Seed admin users
    await queryRunner.manager.getRepository(User).save({
      name: 'Super Admin',
      email: 'superadmin@email.com',
      password: 'superadmin',
      cpf: '57274249096',
      status: UserStatusEnum.ACTIVE,
      roles: [superAdminRole],
    })

    await queryRunner.manager.getRepository(User).save({
      name: 'Admin',
      email: 'admin@email.com',
      password: 'admin',
      cpf: '40613444043',
      status: UserStatusEnum.ACTIVE,
      roles: [adminRole],
    })

    await queryRunner.manager.getRepository(User).save({
      name: 'User',
      email: 'user@email.com',
      password: 'user',
      cpf: '30195511026',
      status: UserStatusEnum.ACTIVE,
      roles: [userRole],
    })
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .getRepository(User)
      .createQueryBuilder()
      .where('email = superadmin@email.com')
      .orWhere('email = admin@email.com')
      .orWhere('email = user@email.com')
      .delete()
      .execute()
  }
}
