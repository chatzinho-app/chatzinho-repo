import { Role, User } from '@domain/entities'
import { RolesEnum, UserStatusEnum } from '@domain/enums'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class SeedUsers1694225549533 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Find roles
    const superAdminRole = await queryRunner.manager
      .getRepository(Role)
      .findOne({ where: { name: RolesEnum.SUPER_ADMIN } })

    const adminRole = await queryRunner.manager
      .getRepository(Role)
      .findOne({ where: { name: RolesEnum.ADMIN } })

    const managerRole = await queryRunner.manager
      .getRepository(Role)
      .findOne({ where: { name: RolesEnum.MANAGER } })

    const doormanRole = await queryRunner.manager
      .getRepository(Role)
      .findOne({ where: { name: RolesEnum.DOORMAN } })

    const residentRole = await queryRunner.manager
      .getRepository(Role)
      .findOne({ where: { name: RolesEnum.RESIDENT } })

    const users = [
      {
        name: 'Super Admin',
        email: 'superadmin@email.com',
        password: 'superadmin',
        cpf: '57274249096',
        birthdate: new Date(),
        status: UserStatusEnum.ACTIVE,
        roles: [superAdminRole],
      },
      {
        name: 'Administradora',
        email: 'admin@email.com',
        password: 'admin',
        cpf: '40613444043',
        birthdate: new Date(),
        status: UserStatusEnum.ACTIVE,
        roles: [adminRole],
      },
      {
        name: 'Síndico',
        email: 'sindico@email.com',
        password: 'sindico',
        cpf: '30195511026',
        birthdate: new Date(),
        status: UserStatusEnum.ACTIVE,
        roles: [managerRole, residentRole],
      },
      {
        name: 'Porteiro',
        email: 'porteiro@email.com',
        password: 'porteiro',
        cpf: '85488526072',
        birthdate: new Date(),
        status: UserStatusEnum.ACTIVE,
        roles: [doormanRole],
      },
      {
        name: 'Morador',
        email: 'morador@email.com',
        password: 'morador',
        cpf: '07552214007',
        birthdate: new Date(),
        status: UserStatusEnum.ACTIVE,
        roles: [residentRole],
      },
    ]

    // Seed admin users
    await queryRunner.manager.getRepository(User).save(users)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .getRepository(User)
      .createQueryBuilder()
      .where('email IN (:emails)', {
        emails: [
          'superadmin@email.com',
          'admin@email.com',
          'sindico@email.com',
          'porteiro@email.com',
          'morador@email.com',
        ],
      })
      .delete()
      .execute()
  }
}
