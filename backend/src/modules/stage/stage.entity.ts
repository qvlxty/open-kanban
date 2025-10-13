import { Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { Task } from "../task/task.entity";
import { Project } from "../project/project.entity";

@Entity()
export class Stage {
  @PrimaryKey()
  id: number;

  @Property()
  title: string;

  @Property({
    name: 'description',
    type: 'text',
  })
  description: string;

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

  @ManyToOne({ entity: () => Project, inversedBy: (p) => p.stages})
  project: Project

  @OneToMany(() => Task, (v) => v.stage)
  tasks = new Collection<Task>(this)
}
