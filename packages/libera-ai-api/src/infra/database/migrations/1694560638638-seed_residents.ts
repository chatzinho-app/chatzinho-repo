import { Role, User } from '@domain/entities'
import { RolesEnum, UserStatusEnum } from '@domain/enums'
import { MigrationInterface, QueryRunner } from 'typeorm'

import residentsJson from './seeders/residents_seed.json'

export class SeedResidents1694560638638 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const residentRole = await queryRunner.manager
      .getRepository(Role)
      .findOne({ where: { name: RolesEnum.RESIDENT } })

    const residents = residentsJson.map((resident) => ({
      ...resident,
      roles: [residentRole],
      status: UserStatusEnum.INACTIVE,
    }))

    await queryRunner.manager.getRepository(User).save(residents)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const createdCpfs = residentsJson.map((resident) => resident.cpf)

    await queryRunner.manager
      .getRepository(User)
      .createQueryBuilder()
      .where('cpf IN (:cpfs)', {
        cpfs: createdCpfs,
      })
      .delete()
      .execute()
  }
}
