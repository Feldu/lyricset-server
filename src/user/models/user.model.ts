import { BaseModel, schemaOptions } from '../../shared/base.model';
import { UserRole } from './user-role.enum';
import { ModelType, prop } from 'typegoose';

export class User extends BaseModel<User>{
  @prop({required: [true, 'Username is required'], minlength: [6, 'Must be at least 6 characters'], unique: true})
  username: string;
  @prop({required: [true, 'Password is required'], minlength: [6, 'Must be at least 6 characters']})
  password: string;
  @prop({enum: UserRole, default: UserRole.User})
  role?: UserRole;
  @prop({required: [true, 'Email is required']})
  email: string;
  @prop({default: []})
  setlist: string[];
  @prop()
  displayname:string;
  @prop({default: ''})
  bio: string;
  @prop({default: ''})
  url: string;
  @prop({default:''})
  avatarId: string;
  @prop({default: []})
  bands: string[];




  static get model() : ModelType<User>{
    return new User().getModelForClass(User,{ schemaOptions })
  }

  static get modelName(): string{
    return this.model.modelName;
  }

}
