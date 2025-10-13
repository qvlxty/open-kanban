import { User } from '../user/user.entity';
import { Collection, Entity, ManyToMany, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Stage } from '../stage/stage.entity';

@Entity()
export class Task {
  @PrimaryKey()
  id: number;

  @Property()
  title: string;

  @Property({
    name: 'description',
    type: 'text',
    nullable: true
  })
  description: string;

  @Property({
    name: 'dueDate',
    type: 'timestamp',
    nullable: true,
    default: null
  })
  dueDate: Date;

  @Property({
    name: 'order',
    type: 'int',
    nullable: true,
    default: 0,
  })
  order: number;
     
  @Property({
    columnType: 'timestamptz',
    defaultRaw: 'CURRENT_TIMESTAMP',
  })
  createdDateAt: Date;
     
  @Property({
    columnType: 'timestamptz',
    defaultRaw: 'CURRENT_TIMESTAMP',
    onUpdate: () => new Date()
  })
  updateDate: Date;

  @ManyToOne({ entity: () => Stage, inversedBy: (v) => v.tasks })
  stage: Stage

  @ManyToOne({ entity: () => User, inversedBy: (v) => v.tasks })
  user: User

  @ManyToMany(() => User, )
  assigned = new Collection<User>(this)
}
