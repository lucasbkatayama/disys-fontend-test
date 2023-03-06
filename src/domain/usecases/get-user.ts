import { 
  User
 } from '../models'

export type GetUserParams = {
  user: string
}

export interface GetUser {
  get: (params: GetUserParams) => Promise<User>
}
