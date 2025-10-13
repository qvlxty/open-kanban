import { Entity, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { Stage } from '../stage/stage.entity';

@Entity()
export class Project {
  @PrimaryKey()
  id: number;

  @Property()
  title: string;

  @OneToMany(() => Stage, (t) => t.project)
  stages: Stage[]

}
