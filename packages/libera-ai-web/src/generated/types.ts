/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/": {
    get: operations["AppController_getHello"];
  };
  "/v1/auth/me": {
    /** @description Get user authenticated using token */
    get: operations["AuthV1Api_me"];
  };
  "/v1/auth/login": {
    /** @description Generates a token based on email and password */
    post: operations["AuthV1Api_login"];
  };
  "/v1/auth/verify": {
    /** @description Verify indentifier */
    post: operations["AuthV1Api_verifyUser"];
  };
  "/v1/auth/register": {
    /** @description Register the user */
    post: operations["AuthV1Api_register"];
  };
  "/v1/users/statistics": {
    /** @description Get all users stats */
    get: operations["UserV1Api_getStatistics"];
  };
  "/v1/users": {
    /** @description List all users */
    get: operations["UserV1Api_getAll"];
    /** @description Update one user */
    put: operations["UserV1Api_update"];
    /** @description Create user */
    post: operations["UserV1Api_create"];
  };
  "/v1/users/{id}": {
    /** @description List one user */
    get: operations["UserV1Api_getOne"];
    /** @description Delete one user */
    delete: operations["UserV1Api_delete"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    MeV1Output: {
      /**
       * @description UUID Identifier
       * @example 1d01eb3c-0cb8-11ee-be56-0242ac120002
       */
      id: string;
      /**
       * Format: date-time
       * @description Date the record was created in the database
       * @example 2023-06-17T02:39:30.901Z
       */
      createdAt: string;
      /**
       * Format: date-time
       * @description Date of the last change of the record in the database
       * @example 2023-06-17T02:39:30.901Z
       */
      updatedAt: string | null;
      /**
       * User name
       * @example Example User
       */
      name: string;
      /**
       * Email
       * @description This property must be unique
       * @example example@email.com
       */
      email: string;
      /**
       * Document
       * @description Brazilian CPF
       * @example 00000000000
       */
      cpf: string;
      /**
       * Format: date-time
       * @description The date the user was born
       * @example 2001-09-02T03:20:10.500Z
       */
      birthdate: string;
      /**
       * User status
       * @description Property to know if the user's enabled
       * @default INACTIVE
       * @example ACTIVE
       * @enum {string}
       */
      status: "ACTIVE" | "INACTIVE";
      /**
       * User roles
       * @description A list of user's roles
       * @example [
       *   "ADMIN"
       * ]
       */
      roles: ("SUPER_ADMIN" | "ADMIN" | "MANAGER" | "DOORMAN" | "RESIDENT")[];
    };
    LoginV1Input: {
      /**
       * Email
       * @description This property must be unique
       * @example example@email.com
       */
      email: string;
      /**
       * Password
       * @description This property will be used to authenticate the user and will be encrypted in the database.
       * @example 123456
       */
      password: string;
    };
    LoginV1Output: {
      /**
       * Access token
       * @description This string must be used to access the application
       * @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0N...
       */
      token: string;
    };
    VerifyV1Input: {
      /**
       * Email
       * @description This property must be unique
       * @example example@email.com
       */
      email: string;
      /**
       * Document
       * @description Brazilian CPF
       * @example 00000000000
       */
      cpf: string;
    };
    VerifyV1Output: {
      /**
       * @description UUID Identifier
       * @example 1d01eb3c-0cb8-11ee-be56-0242ac120002
       */
      id: string;
      /**
       * Format: date-time
       * @description Date the record was created in the database
       * @example 2023-06-17T02:39:30.901Z
       */
      createdAt: string;
      /**
       * Format: date-time
       * @description Date of the last change of the record in the database
       * @example 2023-06-17T02:39:30.901Z
       */
      updatedAt: string | null;
      /**
       * User name
       * @example Example User
       */
      name: string;
      /**
       * Email
       * @description This property must be unique
       * @example example@email.com
       */
      email: string;
      /**
       * Document
       * @description Brazilian CPF
       * @example 00000000000
       */
      cpf: string;
      /**
       * Format: date-time
       * @description The date the user was born
       * @example 2001-09-02T03:20:10.500Z
       */
      birthdate: string;
      /**
       * User status
       * @description Property to know if the user's enabled
       * @default INACTIVE
       * @example ACTIVE
       * @enum {string}
       */
      status: "ACTIVE" | "INACTIVE";
      /**
       * User roles
       * @description A list of user's roles
       * @example [
       *   "ADMIN"
       * ]
       */
      roles: ("SUPER_ADMIN" | "ADMIN" | "MANAGER" | "DOORMAN" | "RESIDENT")[];
    };
    RegisterV1Input: {
      /**
       * Email
       * @description This property must be unique
       * @example example@email.com
       */
      email: string;
      /**
       * Document
       * @description Brazilian CPF
       * @example 00000000000
       */
      cpf: string;
      /**
       * Password
       * @description This property will be used to authenticate the user and will be encrypted in the database.
       * @example 123456
       */
      password: string;
    };
    RegisterV1Output: Record<string, never>;
    StatisticsCount: {
      /**
       * Resident Count
       * @example 5
       */
      resident: number;
      /**
       * Doorman Count
       * @example 5
       */
      doorman: number;
      /**
       * Admin Count
       * @example 5
       */
      admin: number;
    };
    GetStatisticsV1Output: {
      /** Count object */
      count: components["schemas"]["StatisticsCount"];
    };
    OffsetPaginationMetaDto: {
      /**
       * Defines what page to display
       * @description must be higher than zero
       * @default 1
       * @example 2
       */
      offset?: number;
      /**
       * Define number of elements per page
       * @default 0
       * @example 15
       */
      limit?: number;
      /**
       * The total number of items
       * @default 0
       * @example 100
       */
      count: number;
    };
    UserV1OutputDto: {
      /**
       * @description UUID Identifier
       * @example 1d01eb3c-0cb8-11ee-be56-0242ac120002
       */
      id: string;
      /**
       * Format: date-time
       * @description Date the record was created in the database
       * @example 2023-06-17T02:39:30.901Z
       */
      createdAt: string;
      /**
       * Format: date-time
       * @description Date of the last change of the record in the database
       * @example 2023-06-17T02:39:30.901Z
       */
      updatedAt: string | null;
      /**
       * User name
       * @example Example User
       */
      name: string;
      /**
       * Email
       * @description This property must be unique
       * @example example@email.com
       */
      email: string;
      /**
       * Document
       * @description Brazilian CPF
       * @example 00000000000
       */
      cpf: string;
      /**
       * Format: date-time
       * @description The date the user was born
       * @example 2001-09-02T03:20:10.500Z
       */
      birthdate: string;
      /**
       * User status
       * @description Property to know if the user's enabled
       * @default INACTIVE
       * @example ACTIVE
       * @enum {string}
       */
      status: "ACTIVE" | "INACTIVE";
      /**
       * User roles
       * @description A list of user's roles
       * @example [
       *   "ADMIN"
       * ]
       */
      roles: ("SUPER_ADMIN" | "ADMIN" | "MANAGER" | "DOORMAN" | "RESIDENT")[];
    };
    FindOneUserV1OutputDto: {
      /**
       * @description UUID Identifier
       * @example 1d01eb3c-0cb8-11ee-be56-0242ac120002
       */
      id: string;
      /**
       * Format: date-time
       * @description Date the record was created in the database
       * @example 2023-06-17T02:39:30.901Z
       */
      createdAt: string;
      /**
       * Format: date-time
       * @description Date of the last change of the record in the database
       * @example 2023-06-17T02:39:30.901Z
       */
      updatedAt: string | null;
      /**
       * User name
       * @example Example User
       */
      name: string;
      /**
       * Email
       * @description This property must be unique
       * @example example@email.com
       */
      email: string;
      /**
       * Document
       * @description Brazilian CPF
       * @example 00000000000
       */
      cpf: string;
      /**
       * Format: date-time
       * @description The date the user was born
       * @example 2001-09-02T03:20:10.500Z
       */
      birthdate: string;
      /**
       * User status
       * @description Property to know if the user's enabled
       * @default INACTIVE
       * @example ACTIVE
       * @enum {string}
       */
      status: "ACTIVE" | "INACTIVE";
      /**
       * User roles
       * @description A list of user's roles
       * @example [
       *   "ADMIN"
       * ]
       */
      roles: ("SUPER_ADMIN" | "ADMIN" | "MANAGER" | "DOORMAN" | "RESIDENT")[];
    };
    CreateUserV1InputDto: {
      /**
       * User name
       * @example Example User
       */
      name: string;
      /**
       * Email
       * @description This property must be unique
       * @example example@email.com
       */
      email: string;
      /**
       * Document
       * @description Brazilian CPF
       * @example 00000000000
       */
      cpf: string;
      /**
       * Format: date-time
       * @description The date the user was born
       * @example 2001-09-02T03:20:10.500Z
       */
      birthdate: string;
      /**
       * User status
       * @description Property to know if the user's enabled
       * @default INACTIVE
       * @example ACTIVE
       * @enum {string}
       */
      status: "ACTIVE" | "INACTIVE";
      /**
       * User role
       * @description User's roles
       * @example ADMIN
       * @enum {string}
       */
      role: "SUPER_ADMIN" | "ADMIN" | "MANAGER" | "DOORMAN" | "RESIDENT";
      /**
       * Password
       * @description This property will be used to authenticate the user and will be encrypted in the database.
       * @example 123456
       */
      password: string;
    };
    UpdateUserV1InputDto: {
      /**
       * User name
       * @example Example User
       */
      name?: string;
      /**
       * Email
       * @description This property must be unique
       * @example example@email.com
       */
      email?: string;
      /**
       * Document
       * @description Brazilian CPF
       * @example 00000000000
       */
      cpf?: string;
      /**
       * Format: date-time
       * @description The date the user was born
       * @example 2001-09-02T03:20:10.500Z
       */
      birthdate?: string;
      /**
       * User status
       * @description Property to know if the user's enabled
       * @default INACTIVE
       * @example ACTIVE
       * @enum {string}
       */
      status?: "ACTIVE" | "INACTIVE";
      /**
       * User role
       * @description User's roles
       * @example ADMIN
       * @enum {string}
       */
      role?: "SUPER_ADMIN" | "ADMIN" | "MANAGER" | "DOORMAN" | "RESIDENT";
      /**
       * Password
       * @description This property will be used to authenticate the user and will be encrypted in the database.
       * @example 123456
       */
      password?: string;
    };
    UpdateUserV1OutputDto: {
      /**
       * @description UUID Identifier
       * @example 1d01eb3c-0cb8-11ee-be56-0242ac120002
       */
      id: string;
      /**
       * Format: date-time
       * @description Date the record was created in the database
       * @example 2023-06-17T02:39:30.901Z
       */
      createdAt: string;
      /**
       * Format: date-time
       * @description Date of the last change of the record in the database
       * @example 2023-06-17T02:39:30.901Z
       */
      updatedAt: string | null;
      /**
       * User name
       * @example Example User
       */
      name: string;
      /**
       * Email
       * @description This property must be unique
       * @example example@email.com
       */
      email: string;
      /**
       * Document
       * @description Brazilian CPF
       * @example 00000000000
       */
      cpf: string;
      /**
       * Format: date-time
       * @description The date the user was born
       * @example 2001-09-02T03:20:10.500Z
       */
      birthdate: string;
      /**
       * User status
       * @description Property to know if the user's enabled
       * @default INACTIVE
       * @example ACTIVE
       * @enum {string}
       */
      status: "ACTIVE" | "INACTIVE";
      /**
       * User roles
       * @description A list of user's roles
       * @example [
       *   "ADMIN"
       * ]
       */
      roles: ("SUPER_ADMIN" | "ADMIN" | "MANAGER" | "DOORMAN" | "RESIDENT")[];
    };
    DeleteOneUserV1InputDto: {
      /**
       * @description UUID Identifier
       * @example 1d01eb3c-0cb8-11ee-be56-0242ac120002
       */
      id: string;
    };
    DeleteOneUserV1OutputDto: {
      /**
       * Status
       * @description Query status
       * @example success
       */
      status: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  AppController_getHello: {
    responses: {
      200: {
        content: never;
      };
    };
  };
  /** @description Get user authenticated using token */
  AuthV1Api_me: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["MeV1Output"];
        };
      };
    };
  };
  /** @description Generates a token based on email and password */
  AuthV1Api_login: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginV1Input"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["LoginV1Output"];
        };
      };
    };
  };
  /** @description Verify indentifier */
  AuthV1Api_verifyUser: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["VerifyV1Input"];
      };
    };
    responses: {
      default: {
        content: {
          "application/json": components["schemas"]["VerifyV1Output"];
        };
      };
    };
  };
  /** @description Register the user */
  AuthV1Api_register: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["RegisterV1Input"];
      };
    };
    responses: {
      default: {
        content: {
          "application/json": components["schemas"]["RegisterV1Output"];
        };
      };
    };
  };
  /** @description Get all users stats */
  UserV1Api_getStatistics: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["GetStatisticsV1Output"];
        };
      };
    };
  };
  /** @description List all users */
  UserV1Api_getAll: {
    parameters: {
      query?: {
        /**
         * @description must be higher than zero
         * @example 2
         */
        offset?: number;
        /** @example 15 */
        limit?: number;
        /** @example Lucas */
        search?: string;
      };
    };
    responses: {
      /** @description Successfully received model list */
      200: {
        content: {
          "application/json": {
            meta?: components["schemas"]["OffsetPaginationMetaDto"];
          } & {
            data?: components["schemas"]["UserV1OutputDto"][];
          };
        };
      };
    };
  };
  /** @description Update one user */
  UserV1Api_update: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateUserV1InputDto"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["UpdateUserV1OutputDto"];
        };
      };
    };
  };
  /** @description Create user */
  UserV1Api_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateUserV1InputDto"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["CreateUserV1InputDto"];
        };
      };
    };
  };
  /** @description List one user */
  UserV1Api_getOne: {
    parameters: {
      path: {
        /**
         * @description UUID Identifier
         * @example 1d01eb3c-0cb8-11ee-be56-0242ac120002
         */
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["FindOneUserV1OutputDto"];
        };
      };
    };
  };
  /** @description Delete one user */
  UserV1Api_delete: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["DeleteOneUserV1InputDto"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["DeleteOneUserV1OutputDto"];
        };
      };
    };
  };
}
