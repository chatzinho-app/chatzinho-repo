import { Role } from '@domain/entities'
import { RolesEnum } from '@domain/enums'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class SeedRoles1694225542672 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .getRepository(Role)
      .save([
        { name: RolesEnum.SUPER_ADMIN },
        { name: RolesEnum.ADMIN },
        { name: RolesEnum.MANAGER },
        { name: RolesEnum.DOORMAN },
        { name: RolesEnum.RESIDENT },
      ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Role).delete({})
  }
}
