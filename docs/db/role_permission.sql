-- Role-Permission Association Table
-- Maps roles to their assigned permissions (many-to-many relationship)
-- RBAC0: Permission Assignment (PA) - assigns permissions to roles

CREATE TABLE IF NOT EXISTS `role_permission` (
  `id` char(32) NOT NULL COMMENT 'Association unique identifier (UUID)',
  `roleId` char(32) NOT NULL COMMENT 'Role ID (foreign key to role table)',
  `permissionId` char(32) NOT NULL COMMENT 'Permission ID (foreign key to permission table)',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Assignment creation time',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_role_permission` (`roleId`, `permissionId`),
  KEY `idx_roleId` (`roleId`),
  KEY `idx_permissionId` (`permissionId`),
  KEY `idx_createTime` (`createTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Role-Permission association table';
