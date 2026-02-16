import { BaseEntity } from "src/shared/database/postgres/entities/base.entity";
import { Column } from "typeorm";

export class User extends BaseEntity {
      @Column()
      name: string;

      @Column()
      email: string;

      @Column()
      password: string;
      @Column({ nullable: true })
      avatar: string;

      @Column({ unique: true, nullable: true })
      githubId: string;

      @Column({ unique: true, nullable: true })
      googleId: string;

      @Column({ nullable: true })
      githubAccessToken: string;
}
