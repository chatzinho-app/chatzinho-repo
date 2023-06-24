import { Role } from '@domain/entities'
import { RolesEnum } from '@domain/enums'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class SeedRoles1687647512188 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .getRepository(Role)
      .save([
        { name: RolesEnum.SUPER_ADMIN },
        { name: RolesEnum.ADMIN },
        { name: RolesEnum.USER },
      ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Role).delete({})
  }
}
