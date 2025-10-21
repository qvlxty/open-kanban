import { Collection, Entity, OneToMany, PrimaryKey, Property, Unique } from "@mikro-orm/core";
import { Task } from "../task/task.entity";

@Entity()
export class User {
  @PrimaryKey()
  id: number;

  @Property()
  login: string;

  @Property()
  name: string;

  @Property()
  password: string;

  @OneToMany(() => Task, (v) => v.user)
  tasks = new Collection<Task>(this)
}
