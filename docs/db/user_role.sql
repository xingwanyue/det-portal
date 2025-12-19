-- User-Role Association Table
-- Maps users to their assigned roles (many-to-many relationship)
-- RBAC0: User Assignment (UA) - assigns users to roles

CREATE TABLE IF NOT EXISTS `user_role` (
  `id` char(32) NOT NULL COMMENT 'Association unique identifier (UUID)',
  `userId` char(32) NOT NULL COMMENT 'User ID (foreign key to user table)',
  `roleId` char(32) NOT NULL COMMENT 'Role ID (foreign key to role table)',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Assignment creation time',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_user_role` (`userId`, `roleId`),
  KEY `idx_userId` (`userId`),
  KEY `idx_roleId` (`roleId`),
  KEY `idx_createTime` (`createTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='User-Role association table';
