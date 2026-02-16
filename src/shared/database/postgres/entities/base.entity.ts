import { Column, PrimaryGeneratedColumn } from "typeorm";

export class BaseEntity {
      @PrimaryGeneratedColumn("uuid")
      id: string;

      @Column({ default: () => 'CURRENT_TIMESTAMP' })
      createdAt: Date;

      @Column({ default: () => 'CURRENT_TIMESTAMP' })
      updatedAt: Date;
}
