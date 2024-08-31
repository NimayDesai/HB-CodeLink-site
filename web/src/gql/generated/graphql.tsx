import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Comment = {
  __typename?: 'Comment';
  commenter: User;
  commenterId: Scalars['Int']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  post: Post;
  postId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithRelationInput = {
  commenter?: InputMaybe<UserOrderByWithRelationInput>;
  commenterId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CommentScalarFieldEnum =
  | 'commenterId'
  | 'content'
  | 'createdAt'
  | 'id'
  | 'postId'
  | 'updatedAt'
  | '%future added value';

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  commenter?: InputMaybe<UserRelationFilter>;
  commenterId?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CommentWhereUniqueInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  commenter?: InputMaybe<UserRelationFilter>;
  commenterId?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changeInfo: UserResponse;
  changePassword: UserResponse;
  createAnnouncement: Post;
  createComment: Comment;
  createPost: Post;
  deleteComment: Scalars['Boolean']['output'];
  deleteCommentAdmin: Scalars['Boolean']['output'];
  deletePost: Scalars['Boolean']['output'];
  deletePostAdmin: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  forgotPassword: Scalars['Boolean']['output'];
  login: UserResponse;
  logout: Scalars['Boolean']['output'];
  register: UserResponse;
  registerAdmin: UserResponse;
  sendVerifyEmail: Scalars['Boolean']['output'];
  uploadImg: UserResponse;
  vefifyUser: UserResponse;
  vote: Scalars['Boolean']['output'];
};


export type MutationChangeInfoArgs = {
  input: UsernamePasswordEmailOptInput;
  password: Scalars['String']['input'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationCreateAnnouncementArgs = {
  input: PostInput;
};


export type MutationCreateCommentArgs = {
  content: Scalars['String']['input'];
  postId: Scalars['Int']['input'];
};


export type MutationCreatePostArgs = {
  input: PostInput;
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['Int']['input'];
  postId: Scalars['Int']['input'];
};


export type MutationDeleteCommentAdminArgs = {
  id: Scalars['Int']['input'];
  postId: Scalars['Int']['input'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['Int']['input'];
};


export type MutationDeletePostAdminArgs = {
  id: Scalars['Int']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  usernameOrEmail: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordEmailInput;
};


export type MutationRegisterAdminArgs = {
  adminPass: Scalars['String']['input'];
  options: UsernamePasswordEmailInput;
};


export type MutationSendVerifyEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationUploadImgArgs = {
  imageUri: Scalars['String']['input'];
};


export type MutationVefifyUserArgs = {
  token: Scalars['String']['input'];
};


export type MutationVoteArgs = {
  postId: Scalars['Int']['input'];
  value: Scalars['Int']['input'];
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullsOrder =
  | 'first'
  | 'last'
  | '%future added value';

export type PaginatedComments = {
  __typename?: 'PaginatedComments';
  comments: Array<Comment>;
  hasMore: Scalars['Boolean']['output'];
};

export type PaginatedPosts = {
  __typename?: 'PaginatedPosts';
  hasMore: Scalars['Boolean']['output'];
  posts: Array<Post>;
};

export type Post = {
  __typename?: 'Post';
  _count?: Maybe<PostCount>;
  author: User;
  authorId: Scalars['Int']['output'];
  comments: Array<Comment>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  points: Scalars['Int']['output'];
  star: Array<Star>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};


export type PostCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type PostStarArgs = {
  cursor?: InputMaybe<StarWhereUniqueInput>;
  distinct?: InputMaybe<Array<StarScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StarOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StarWhereInput>;
};

export type PostCount = {
  __typename?: 'PostCount';
  comments: Scalars['Int']['output'];
  star: Scalars['Int']['output'];
};


export type PostCountCommentsArgs = {
  where?: InputMaybe<CommentWhereInput>;
};


export type PostCountStarArgs = {
  where?: InputMaybe<StarWhereInput>;
};

export type PostInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type PostListRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PostOrderByWithRelationInput = {
  author?: InputMaybe<UserOrderByWithRelationInput>;
  authorId?: InputMaybe<SortOrder>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  star?: InputMaybe<StarOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostRelationFilter = {
  is?: InputMaybe<PostWhereInput>;
  isNot?: InputMaybe<PostWhereInput>;
};

export type PostScalarFieldEnum =
  | 'authorId'
  | 'content'
  | 'createdAt'
  | 'id'
  | 'points'
  | 'title'
  | 'type'
  | 'updatedAt'
  | '%future added value';

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<IntFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  points?: InputMaybe<IntFilter>;
  star?: InputMaybe<StarListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PostWhereUniqueInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<IntFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  points?: InputMaybe<IntFilter>;
  star?: InputMaybe<StarListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Query = {
  __typename?: 'Query';
  comment: Comment;
  commentCount: Scalars['Int']['output'];
  comments: PaginatedComments;
  hello: Scalars['String']['output'];
  me?: Maybe<User>;
  post?: Maybe<Post>;
  postAnnouncementCount: Scalars['Int']['output'];
  postGeneralCount: Scalars['Int']['output'];
  posts: PaginatedPosts;
};


export type QueryCommentArgs = {
  commentId: Scalars['Int']['input'];
};


export type QueryCommentCountArgs = {
  postId: Scalars['Int']['input'];
};


export type QueryCommentsArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  limit: Scalars['Int']['input'];
  postId: Scalars['Int']['input'];
};


export type QueryPostArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPostsArgs = {
  limit: Scalars['Float']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
};

export type QueryMode =
  | 'default'
  | 'insensitive'
  | '%future added value';

export type SortOrder =
  | 'asc'
  | 'desc'
  | '%future added value';

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type Star = {
  __typename?: 'Star';
  postId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type StarListRelationFilter = {
  every?: InputMaybe<StarWhereInput>;
  none?: InputMaybe<StarWhereInput>;
  some?: InputMaybe<StarWhereInput>;
};

export type StarOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type StarOrderByWithRelationInput = {
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type StarScalarFieldEnum =
  | 'postId'
  | 'userId'
  | 'value'
  | '%future added value';

export type StarUserIdPostIdCompoundUniqueInput = {
  postId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type StarWhereInput = {
  AND?: InputMaybe<Array<StarWhereInput>>;
  NOT?: InputMaybe<Array<StarWhereInput>>;
  OR?: InputMaybe<Array<StarWhereInput>>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
  value?: InputMaybe<IntFilter>;
};

export type StarWhereUniqueInput = {
  AND?: InputMaybe<Array<StarWhereInput>>;
  NOT?: InputMaybe<Array<StarWhereInput>>;
  OR?: InputMaybe<Array<StarWhereInput>>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
  userId_postId?: InputMaybe<StarUserIdPostIdCompoundUniqueInput>;
  value?: InputMaybe<IntFilter>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  comments: Array<Comment>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imageUri?: Maybe<Scalars['String']['output']>;
  isAdmin: Scalars['Boolean']['output'];
  lastPosted?: Maybe<Scalars['DateTimeISO']['output']>;
  name: Scalars['String']['output'];
  posts: Array<Post>;
  star: Array<Star>;
  updatedAt: Scalars['DateTimeISO']['output'];
  username: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};


export type UserCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type UserPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type UserStarArgs = {
  cursor?: InputMaybe<StarWhereUniqueInput>;
  distinct?: InputMaybe<Array<StarScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StarOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StarWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  comments: Scalars['Int']['output'];
  posts: Scalars['Int']['output'];
  star: Scalars['Int']['output'];
};


export type UserCountCommentsArgs = {
  where?: InputMaybe<CommentWhereInput>;
};


export type UserCountPostsArgs = {
  where?: InputMaybe<PostWhereInput>;
};


export type UserCountStarArgs = {
  where?: InputMaybe<StarWhereInput>;
};

export type UserOrderByWithRelationInput = {
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageUri?: InputMaybe<SortOrderInput>;
  isAdmin?: InputMaybe<SortOrder>;
  lastPosted?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  posts?: InputMaybe<PostOrderByRelationAggregateInput>;
  star?: InputMaybe<StarOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  verified?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  imageUri?: InputMaybe<StringNullableFilter>;
  isAdmin?: InputMaybe<BoolFilter>;
  lastPosted?: InputMaybe<DateTimeNullableFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
  star?: InputMaybe<StarListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
  verified?: InputMaybe<BoolFilter>;
};

export type UsernamePasswordEmailInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsernamePasswordEmailOptInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type RegularCommentFragment = { __typename?: 'Comment', id: number, content: string, commenter: { __typename?: 'User', id: number, username: string, name: string, imageUri?: string | null, email: string, verified: boolean, isAdmin: boolean }, post: { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, content: string, points: number, type: string, author: { __typename?: 'User', id: number, username: string, name: string, imageUri?: string | null, email: string, verified: boolean, isAdmin: boolean } } };

export type RegularErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type RegularPostFragment = { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, content: string, points: number, type: string, author: { __typename?: 'User', id: number, username: string, name: string, imageUri?: string | null, email: string, verified: boolean, isAdmin: boolean } };

export type RegularUserFragment = { __typename?: 'User', id: number, username: string, name: string, imageUri?: string | null, email: string, verified: boolean, isAdmin: boolean };

export type RegularUserResponseFragment = { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string, name: string, imageUri?: string | null, email: string, verified: boolean, isAdmin: boolean } | null };

export type ChangeInfoMutationVariables = Exact<{
  username?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
}>;


export type ChangeInfoMutation = { __typename?: 'Mutation', changeInfo: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string, name: string, imageUri?: string | null, email: string, verified: boolean, isAdmin: boolean } | null } };

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string, name: string, imageUri?: string | null, email: string, verified: boolean, isAdmin: boolean } | null } };

export type CreateAnnouncementMutationVariables = Exact<{
  input: PostInput;
}>;


export type CreateAnnouncementMutation = { __typename?: 'Mutation', createAnnouncement: { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, content: string, points: number, type: string, author: { __typename?: 'User', id: number, username: string, name: string, imageUri?: string | null, email: string, verified: boolean, isAdmin: boolean } } };

export type CreateCommentMutationVariables = Exact<{
  postId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', id: number, postId: number, content: string, commenter: { __typename?: 'User', id: number, username: string } } };

export type CreatePostMutationVariables = Exact<{
  input: PostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, content: string, points: number, type: string, author: { __typename?: 'User', id: number, username: string, name: string, imageUri?: string | null, email: string, verified: boolean, isAdmin: boolean } } };

export type DeletePostMutationVariables = Exact<{
  postId: Scalars['Int']['input'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: boolean };

export type DeletePostAdminMutationVariables = Exact<{
  deletePostAdminId: Scalars['Int']['input'];
}>;


export type DeletePostAdminMutation = { __typename?: 'Mutation', deletePostAdmin: boolean };

export type DeleteUserMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string, name: string, imageUri?: string | null, email: string, verified: boolean, isAdmin: boolean } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string, name: string, imageUri?: string | null, email: string, verified: boolean, isAdmin: boolean } | null } };

export type RegisterAdminMutationVariables = Exact<{
  adminPass: Scalars['String']['input'];
  options: UsernamePasswordEmailInput;
}>;


export type RegisterAdminMutation = { __typename?: 'Mutation', registerAdmin: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string, name: string, imageUri?: string | null, email: string, verified: boolean, isAdmin: boolean } | null } };

export type SendVerifyEmailMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type SendVerifyEmailMutation = { __typename?: 'Mutation', sendVerifyEmail: boolean };

export type UploadImgMutationVariables = Exact<{
  imageUri: Scalars['String']['input'];
}>;


export type UploadImgMutation = { __typename?: 'Mutation', uploadImg: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string, name: string, imageUri?: string | null, email: string, verified: boolean, isAdmin: boolean } | null } };

export type VerifyUserMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type VerifyUserMutation = { __typename?: 'Mutation', vefifyUser: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', verified: boolean, id: number, username: string } | null } };

export type CommentsQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  cursor?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['Int']['input'];
}>;


export type CommentsQuery = { __typename?: 'Query', comments: { __typename?: 'PaginatedComments', hasMore: boolean, comments: Array<{ __typename?: 'Comment', id: number, content: string, commenter: { __typename?: 'User', id: number, username: string, name: string, imageUri?: string | null, email: string, verified: boolean, isAdmin: boolean }, post: { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, content: string, points: number, type: string, author: { __typename?: 'User', id: number, username: string, name: string, imageUri?: string | null, email: string, verified: boolean, isAdmin: boolean } } }> } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string, name: string, imageUri?: string | null, email: string, verified: boolean, isAdmin: boolean } | null };

export type PostQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type PostQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, content: string, points: number, type: string, author: { __typename?: 'User', id: number, username: string, name: string, imageUri?: string | null, email: string, verified: boolean, isAdmin: boolean } } | null };

export type PostAnnouncementCountQueryVariables = Exact<{ [key: string]: never; }>;


export type PostAnnouncementCountQuery = { __typename?: 'Query', postAnnouncementCount: number };

export type PostGeneralCountQueryVariables = Exact<{ [key: string]: never; }>;


export type PostGeneralCountQuery = { __typename?: 'Query', postGeneralCount: number };

export type PostsQueryVariables = Exact<{
  limit: Scalars['Float']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
}>;


export type PostsQuery = { __typename?: 'Query', posts: { __typename?: 'PaginatedPosts', hasMore: boolean, posts: Array<{ __typename?: 'Post', id: number, createdAt: any, updatedAt: any, title: string, content: string, points: number, type: string, author: { __typename?: 'User', id: number, username: string, name: string, imageUri?: string | null, email: string, verified: boolean, isAdmin: boolean } }> } };

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
  name
  imageUri
  email
  verified
  isAdmin
}
    `;
export const RegularPostFragmentDoc = gql`
    fragment RegularPost on Post {
  id
  createdAt
  updatedAt
  title
  content
  points
  type
  author {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export const RegularCommentFragmentDoc = gql`
    fragment RegularComment on Comment {
  id
  content
  commenter {
    ...RegularUser
  }
  post {
    ...RegularPost
  }
}
    ${RegularUserFragmentDoc}
${RegularPostFragmentDoc}`;
export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const ChangeInfoDocument = gql`
    mutation ChangeInfo($username: String, $newPassword: String, $email: String, $name: String, $password: String!) {
  changeInfo(
    input: {username: $username, email: $email, password: $newPassword, name: $name}
    password: $password
  ) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type ChangeInfoMutationFn = Apollo.MutationFunction<ChangeInfoMutation, ChangeInfoMutationVariables>;

/**
 * __useChangeInfoMutation__
 *
 * To run a mutation, you first call `useChangeInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeInfoMutation, { data, loading, error }] = useChangeInfoMutation({
 *   variables: {
 *      username: // value for 'username'
 *      newPassword: // value for 'newPassword'
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useChangeInfoMutation(baseOptions?: Apollo.MutationHookOptions<ChangeInfoMutation, ChangeInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeInfoMutation, ChangeInfoMutationVariables>(ChangeInfoDocument, options);
      }
export type ChangeInfoMutationHookResult = ReturnType<typeof useChangeInfoMutation>;
export type ChangeInfoMutationResult = Apollo.MutationResult<ChangeInfoMutation>;
export type ChangeInfoMutationOptions = Apollo.BaseMutationOptions<ChangeInfoMutation, ChangeInfoMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateAnnouncementDocument = gql`
    mutation CreateAnnouncement($input: PostInput!) {
  createAnnouncement(input: $input) {
    ...RegularPost
  }
}
    ${RegularPostFragmentDoc}`;
export type CreateAnnouncementMutationFn = Apollo.MutationFunction<CreateAnnouncementMutation, CreateAnnouncementMutationVariables>;

/**
 * __useCreateAnnouncementMutation__
 *
 * To run a mutation, you first call `useCreateAnnouncementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnnouncementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnnouncementMutation, { data, loading, error }] = useCreateAnnouncementMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAnnouncementMutation(baseOptions?: Apollo.MutationHookOptions<CreateAnnouncementMutation, CreateAnnouncementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAnnouncementMutation, CreateAnnouncementMutationVariables>(CreateAnnouncementDocument, options);
      }
export type CreateAnnouncementMutationHookResult = ReturnType<typeof useCreateAnnouncementMutation>;
export type CreateAnnouncementMutationResult = Apollo.MutationResult<CreateAnnouncementMutation>;
export type CreateAnnouncementMutationOptions = Apollo.BaseMutationOptions<CreateAnnouncementMutation, CreateAnnouncementMutationVariables>;
export const CreateCommentDocument = gql`
    mutation CreateComment($postId: Int!, $content: String!) {
  createComment(postId: $postId, content: $content) {
    id
    postId
    content
    commenter {
      id
      username
    }
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($input: PostInput!) {
  createPost(input: $input) {
    ...RegularPost
  }
}
    ${RegularPostFragmentDoc}`;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const DeletePostDocument = gql`
    mutation DeletePost($postId: Int!) {
  deletePost(postId: $postId)
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const DeletePostAdminDocument = gql`
    mutation DeletePostAdmin($deletePostAdminId: Int!) {
  deletePostAdmin(id: $deletePostAdminId)
}
    `;
export type DeletePostAdminMutationFn = Apollo.MutationFunction<DeletePostAdminMutation, DeletePostAdminMutationVariables>;

/**
 * __useDeletePostAdminMutation__
 *
 * To run a mutation, you first call `useDeletePostAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostAdminMutation, { data, loading, error }] = useDeletePostAdminMutation({
 *   variables: {
 *      deletePostAdminId: // value for 'deletePostAdminId'
 *   },
 * });
 */
export function useDeletePostAdminMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostAdminMutation, DeletePostAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostAdminMutation, DeletePostAdminMutationVariables>(DeletePostAdminDocument, options);
      }
export type DeletePostAdminMutationHookResult = ReturnType<typeof useDeletePostAdminMutation>;
export type DeletePostAdminMutationResult = Apollo.MutationResult<DeletePostAdminMutation>;
export type DeletePostAdminMutationOptions = Apollo.BaseMutationOptions<DeletePostAdminMutation, DeletePostAdminMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser {
  deleteUser
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $name: String!, $password: String!, $email: String!) {
  register(
    options: {username: $username, name: $name, email: $email, password: $password}
  ) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      name: // value for 'name'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const RegisterAdminDocument = gql`
    mutation RegisterAdmin($adminPass: String!, $options: UsernamePasswordEmailInput!) {
  registerAdmin(adminPass: $adminPass, options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type RegisterAdminMutationFn = Apollo.MutationFunction<RegisterAdminMutation, RegisterAdminMutationVariables>;

/**
 * __useRegisterAdminMutation__
 *
 * To run a mutation, you first call `useRegisterAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerAdminMutation, { data, loading, error }] = useRegisterAdminMutation({
 *   variables: {
 *      adminPass: // value for 'adminPass'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterAdminMutation(baseOptions?: Apollo.MutationHookOptions<RegisterAdminMutation, RegisterAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterAdminMutation, RegisterAdminMutationVariables>(RegisterAdminDocument, options);
      }
export type RegisterAdminMutationHookResult = ReturnType<typeof useRegisterAdminMutation>;
export type RegisterAdminMutationResult = Apollo.MutationResult<RegisterAdminMutation>;
export type RegisterAdminMutationOptions = Apollo.BaseMutationOptions<RegisterAdminMutation, RegisterAdminMutationVariables>;
export const SendVerifyEmailDocument = gql`
    mutation SendVerifyEmail($email: String!) {
  sendVerifyEmail(email: $email)
}
    `;
export type SendVerifyEmailMutationFn = Apollo.MutationFunction<SendVerifyEmailMutation, SendVerifyEmailMutationVariables>;

/**
 * __useSendVerifyEmailMutation__
 *
 * To run a mutation, you first call `useSendVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendVerifyEmailMutation, { data, loading, error }] = useSendVerifyEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendVerifyEmailMutation(baseOptions?: Apollo.MutationHookOptions<SendVerifyEmailMutation, SendVerifyEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendVerifyEmailMutation, SendVerifyEmailMutationVariables>(SendVerifyEmailDocument, options);
      }
export type SendVerifyEmailMutationHookResult = ReturnType<typeof useSendVerifyEmailMutation>;
export type SendVerifyEmailMutationResult = Apollo.MutationResult<SendVerifyEmailMutation>;
export type SendVerifyEmailMutationOptions = Apollo.BaseMutationOptions<SendVerifyEmailMutation, SendVerifyEmailMutationVariables>;
export const UploadImgDocument = gql`
    mutation UploadImg($imageUri: String!) {
  uploadImg(imageUri: $imageUri) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;
export type UploadImgMutationFn = Apollo.MutationFunction<UploadImgMutation, UploadImgMutationVariables>;

/**
 * __useUploadImgMutation__
 *
 * To run a mutation, you first call `useUploadImgMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadImgMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadImgMutation, { data, loading, error }] = useUploadImgMutation({
 *   variables: {
 *      imageUri: // value for 'imageUri'
 *   },
 * });
 */
export function useUploadImgMutation(baseOptions?: Apollo.MutationHookOptions<UploadImgMutation, UploadImgMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadImgMutation, UploadImgMutationVariables>(UploadImgDocument, options);
      }
export type UploadImgMutationHookResult = ReturnType<typeof useUploadImgMutation>;
export type UploadImgMutationResult = Apollo.MutationResult<UploadImgMutation>;
export type UploadImgMutationOptions = Apollo.BaseMutationOptions<UploadImgMutation, UploadImgMutationVariables>;
export const VerifyUserDocument = gql`
    mutation VerifyUser($token: String!) {
  vefifyUser(token: $token) {
    errors {
      field
      message
    }
    user {
      verified
      id
      username
    }
  }
}
    `;
export type VerifyUserMutationFn = Apollo.MutationFunction<VerifyUserMutation, VerifyUserMutationVariables>;

/**
 * __useVerifyUserMutation__
 *
 * To run a mutation, you first call `useVerifyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyUserMutation, { data, loading, error }] = useVerifyUserMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyUserMutation(baseOptions?: Apollo.MutationHookOptions<VerifyUserMutation, VerifyUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyUserMutation, VerifyUserMutationVariables>(VerifyUserDocument, options);
      }
export type VerifyUserMutationHookResult = ReturnType<typeof useVerifyUserMutation>;
export type VerifyUserMutationResult = Apollo.MutationResult<VerifyUserMutation>;
export type VerifyUserMutationOptions = Apollo.BaseMutationOptions<VerifyUserMutation, VerifyUserMutationVariables>;
export const CommentsDocument = gql`
    query Comments($limit: Int!, $cursor: Int, $postId: Int!) {
  comments(limit: $limit, cursor: $cursor, postId: $postId) {
    comments {
      ...RegularComment
    }
    hasMore
  }
}
    ${RegularCommentFragmentDoc}`;

/**
 * __useCommentsQuery__
 *
 * To run a query within a React component, call `useCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useCommentsQuery(baseOptions: Apollo.QueryHookOptions<CommentsQuery, CommentsQueryVariables> & ({ variables: CommentsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
      }
export function useCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
        }
export function useCommentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
        }
export type CommentsQueryHookResult = ReturnType<typeof useCommentsQuery>;
export type CommentsLazyQueryHookResult = ReturnType<typeof useCommentsLazyQuery>;
export type CommentsSuspenseQueryHookResult = ReturnType<typeof useCommentsSuspenseQuery>;
export type CommentsQueryResult = Apollo.QueryResult<CommentsQuery, CommentsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const PostDocument = gql`
    query Post($id: Int!) {
  post(id: $id) {
    ...RegularPost
  }
}
    ${RegularPostFragmentDoc}`;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostQuery(baseOptions: Apollo.QueryHookOptions<PostQuery, PostQueryVariables> & ({ variables: PostQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, options);
        }
export function usePostSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PostQuery, PostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PostQuery, PostQueryVariables>(PostDocument, options);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostSuspenseQueryHookResult = ReturnType<typeof usePostSuspenseQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export const PostAnnouncementCountDocument = gql`
    query PostAnnouncementCount {
  postAnnouncementCount
}
    `;

/**
 * __usePostAnnouncementCountQuery__
 *
 * To run a query within a React component, call `usePostAnnouncementCountQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostAnnouncementCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostAnnouncementCountQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostAnnouncementCountQuery(baseOptions?: Apollo.QueryHookOptions<PostAnnouncementCountQuery, PostAnnouncementCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostAnnouncementCountQuery, PostAnnouncementCountQueryVariables>(PostAnnouncementCountDocument, options);
      }
export function usePostAnnouncementCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostAnnouncementCountQuery, PostAnnouncementCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostAnnouncementCountQuery, PostAnnouncementCountQueryVariables>(PostAnnouncementCountDocument, options);
        }
export function usePostAnnouncementCountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PostAnnouncementCountQuery, PostAnnouncementCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PostAnnouncementCountQuery, PostAnnouncementCountQueryVariables>(PostAnnouncementCountDocument, options);
        }
export type PostAnnouncementCountQueryHookResult = ReturnType<typeof usePostAnnouncementCountQuery>;
export type PostAnnouncementCountLazyQueryHookResult = ReturnType<typeof usePostAnnouncementCountLazyQuery>;
export type PostAnnouncementCountSuspenseQueryHookResult = ReturnType<typeof usePostAnnouncementCountSuspenseQuery>;
export type PostAnnouncementCountQueryResult = Apollo.QueryResult<PostAnnouncementCountQuery, PostAnnouncementCountQueryVariables>;
export const PostGeneralCountDocument = gql`
    query PostGeneralCount {
  postGeneralCount
}
    `;

/**
 * __usePostGeneralCountQuery__
 *
 * To run a query within a React component, call `usePostGeneralCountQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostGeneralCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostGeneralCountQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostGeneralCountQuery(baseOptions?: Apollo.QueryHookOptions<PostGeneralCountQuery, PostGeneralCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostGeneralCountQuery, PostGeneralCountQueryVariables>(PostGeneralCountDocument, options);
      }
export function usePostGeneralCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostGeneralCountQuery, PostGeneralCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostGeneralCountQuery, PostGeneralCountQueryVariables>(PostGeneralCountDocument, options);
        }
export function usePostGeneralCountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PostGeneralCountQuery, PostGeneralCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PostGeneralCountQuery, PostGeneralCountQueryVariables>(PostGeneralCountDocument, options);
        }
export type PostGeneralCountQueryHookResult = ReturnType<typeof usePostGeneralCountQuery>;
export type PostGeneralCountLazyQueryHookResult = ReturnType<typeof usePostGeneralCountLazyQuery>;
export type PostGeneralCountSuspenseQueryHookResult = ReturnType<typeof usePostGeneralCountSuspenseQuery>;
export type PostGeneralCountQueryResult = Apollo.QueryResult<PostGeneralCountQuery, PostGeneralCountQueryVariables>;
export const PostsDocument = gql`
    query Posts($limit: Float!, $offset: Int, $type: String!) {
  posts(limit: $limit, offset: $offset, type: $type) {
    hasMore
    posts {
      ...RegularPost
    }
  }
}
    ${RegularPostFragmentDoc}`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      type: // value for 'type'
 *   },
 * });
 */
export function usePostsQuery(baseOptions: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables> & ({ variables: PostsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export function usePostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsSuspenseQueryHookResult = ReturnType<typeof usePostsSuspenseQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;