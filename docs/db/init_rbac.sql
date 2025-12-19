-- RBAC0 Database Initialization Script
-- Complete database schema for Role-Based Access Control (Basic Model)
-- Execute this script to create all tables and initialize with default data

-- =============================================================================
-- 1. User Table
-- =============================================================================

CREATE TABLE IF NOT EXISTS `user` (
  `id` char(32) NOT NULL COMMENT 'User unique identifier (UUID)',
  `email` varchar(255) NOT NULL COMMENT 'User email address (login)',
  `password` varchar(255) DEFAULT NULL COMMENT 'Encrypted password',
  `salt` varchar(64) DEFAULT NULL COMMENT 'Password salt for encryption',
  `nickname` varchar(100) DEFAULT NULL COMMENT 'User display name',
  `avatar` varchar(500) DEFAULT NULL COMMENT 'Avatar image URL',
  `status` char(1) NOT NULL DEFAULT '1' COMMENT 'User status: 1=active, 0=disabled, 2=locked',
  `type` char(1) NOT NULL DEFAULT '1' COMMENT 'User type: 1=regular, 2=admin',
  `ip` varchar(45) DEFAULT NULL COMMENT 'Last login IP address',
  `activeTime` datetime DEFAULT NULL COMMENT 'Last active time',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Account creation time',
  `updateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last update time',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_email` (`email`),
  KEY `idx_status` (`status`),
  KEY `idx_type` (`type`),
  KEY `idx_createTime` (`createTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='User account table';

-- =============================================================================
-- 2. Role Table
-- =============================================================================

CREATE TABLE IF NOT EXISTS `role` (
  `id` char(32) NOT NULL COMMENT 'Role unique identifier (UUID)',
  `name` varchar(100) NOT NULL COMMENT 'Role name (e.g., Admin, User, Manager)',
  `code` varchar(100) NOT NULL COMMENT 'Role code (e.g., ROLE_ADMIN, ROLE_USER)',
  `description` varchar(500) DEFAULT NULL COMMENT 'Role description',
  `status` char(1) NOT NULL DEFAULT '1' COMMENT 'Role status: 1=active, 0=disabled',
  `sort` int NOT NULL DEFAULT 0 COMMENT 'Display sort order',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Role creation time',
  `updateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last update time',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_code` (`code`),
  KEY `idx_name` (`name`),
  KEY `idx_status` (`status`),
  KEY `idx_sort` (`sort`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Role definition table';

-- =============================================================================
-- 3. Permission Table
-- =============================================================================

CREATE TABLE IF NOT EXISTS `permission` (
  `id` char(32) NOT NULL COMMENT 'Permission unique identifier (UUID)',
  `name` varchar(100) NOT NULL COMMENT 'Permission name (e.g., Create User, Delete Post)',
  `code` varchar(100) NOT NULL COMMENT 'Permission code (e.g., user:create, post:delete)',
  `type` char(1) NOT NULL DEFAULT '1' COMMENT 'Permission type: 1=menu, 2=button, 3=api',
  `resource` varchar(255) DEFAULT NULL COMMENT 'Resource path or identifier',
  `method` varchar(10) DEFAULT NULL COMMENT 'HTTP method (GET, POST, PUT, DELETE) for API type',
  `description` varchar(500) DEFAULT NULL COMMENT 'Permission description',
  `parentId` char(32) DEFAULT NULL COMMENT 'Parent permission ID (for hierarchical structure)',
  `status` char(1) NOT NULL DEFAULT '1' COMMENT 'Permission status: 1=active, 0=disabled',
  `sort` int NOT NULL DEFAULT 0 COMMENT 'Display sort order',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Permission creation time',
  `updateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last update time',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_code` (`code`),
  KEY `idx_name` (`name`),
  KEY `idx_type` (`type`),
  KEY `idx_status` (`status`),
  KEY `idx_parentId` (`parentId`),
  KEY `idx_sort` (`sort`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Permission definition table';

-- =============================================================================
-- 4. User-Role Association Table
-- =============================================================================

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

-- =============================================================================
-- 5. Role-Permission Association Table
-- =============================================================================

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

-- =============================================================================
-- 6. Initialize Default Roles
-- =============================================================================

INSERT INTO `role` (`id`, `name`, `code`, `description`, `status`, `sort`) VALUES
('00000000000000000000000000000001', 'Super Admin', 'ROLE_SUPER_ADMIN', 'System super administrator with full access to all features', '1', 1),
('00000000000000000000000000000002', 'Admin', 'ROLE_ADMIN', 'Administrator with most system access', '1', 2),
('00000000000000000000000000000003', 'User', 'ROLE_USER', 'Regular user with basic access', '1', 3),
('00000000000000000000000000000004', 'Guest', 'ROLE_GUEST', 'Guest user with read-only access', '1', 4);

-- =============================================================================
-- 7. Initialize Default Permissions
-- =============================================================================

-- System Management Permissions
INSERT INTO `permission` (`id`, `name`, `code`, `type`, `resource`, `method`, `description`, `parentId`, `status`, `sort`) VALUES
-- Menu Permissions
('10000000000000000000000000000001', 'System Management', 'system:menu', '1', '/system', NULL, 'System management menu', NULL, '1', 1),
('10000000000000000000000000000002', 'User Management', 'user:menu', '1', '/system/user', NULL, 'User management menu', '10000000000000000000000000000001', '1', 1),
('10000000000000000000000000000003', 'Role Management', 'role:menu', '1', '/system/role', NULL, 'Role management menu', '10000000000000000000000000000001', '1', 2),
('10000000000000000000000000000004', 'Permission Management', 'permission:menu', '1', '/system/permission', NULL, 'Permission management menu', '10000000000000000000000000000001', '1', 3);

-- User Management API Permissions
INSERT INTO `permission` (`id`, `name`, `code`, `type`, `resource`, `method`, `description`, `parentId`, `status`, `sort`) VALUES
('20000000000000000000000000000001', 'List Users', 'user:list', '3', '/api/user/list', 'GET', 'View user list', '10000000000000000000000000000002', '1', 1),
('20000000000000000000000000000002', 'Create User', 'user:create', '3', '/api/user', 'POST', 'Create new user', '10000000000000000000000000000002', '1', 2),
('20000000000000000000000000000003', 'Update User', 'user:update', '3', '/api/user/:id', 'PUT', 'Update user information', '10000000000000000000000000000002', '1', 3),
('20000000000000000000000000000004', 'Delete User', 'user:delete', '3', '/api/user/:id', 'DELETE', 'Delete user', '10000000000000000000000000000002', '1', 4),
('20000000000000000000000000000005', 'View User Detail', 'user:detail', '3', '/api/user/:id', 'GET', 'View user details', '10000000000000000000000000000002', '1', 5);

-- Role Management API Permissions
INSERT INTO `permission` (`id`, `name`, `code`, `type`, `resource`, `method`, `description`, `parentId`, `status`, `sort`) VALUES
('30000000000000000000000000000001', 'List Roles', 'role:list', '3', '/api/role/list', 'GET', 'View role list', '10000000000000000000000000000003', '1', 1),
('30000000000000000000000000000002', 'Create Role', 'role:create', '3', '/api/role', 'POST', 'Create new role', '10000000000000000000000000000003', '1', 2),
('30000000000000000000000000000003', 'Update Role', 'role:update', '3', '/api/role/:id', 'PUT', 'Update role information', '10000000000000000000000000000003', '1', 3),
('30000000000000000000000000000004', 'Delete Role', 'role:delete', '3', '/api/role/:id', 'DELETE', 'Delete role', '10000000000000000000000000000003', '1', 4),
('30000000000000000000000000000005', 'Assign Permissions', 'role:assign_permission', '3', '/api/role/:id/permissions', 'POST', 'Assign permissions to role', '10000000000000000000000000000003', '1', 5);

-- Permission Management API Permissions
INSERT INTO `permission` (`id`, `name`, `code`, `type`, `resource`, `method`, `description`, `parentId`, `status`, `sort`) VALUES
('40000000000000000000000000000001', 'List Permissions', 'permission:list', '3', '/api/permission/list', 'GET', 'View permission list', '10000000000000000000000000000004', '1', 1),
('40000000000000000000000000000002', 'Create Permission', 'permission:create', '3', '/api/permission', 'POST', 'Create new permission', '10000000000000000000000000000004', '1', 2),
('40000000000000000000000000000003', 'Update Permission', 'permission:update', '3', '/api/permission/:id', 'PUT', 'Update permission information', '10000000000000000000000000000004', '1', 3),
('40000000000000000000000000000004', 'Delete Permission', 'permission:delete', '3', '/api/permission/:id', 'DELETE', 'Delete permission', '10000000000000000000000000000004', '1', 4);

-- =============================================================================
-- 8. Assign All Permissions to Super Admin Role
-- =============================================================================

INSERT INTO `role_permission` (`id`, `roleId`, `permissionId`)
SELECT
  CONCAT('rp', LPAD((@row_number:=@row_number + 1), 28, '0')) as id,
  '00000000000000000000000000000001' as roleId,
  p.id as permissionId
FROM `permission` p, (SELECT @row_number:=0) r
WHERE p.status = '1';

-- =============================================================================
-- 9. Assign Basic Permissions to Admin Role
-- =============================================================================

INSERT INTO `role_permission` (`id`, `roleId`, `permissionId`)
SELECT
  CONCAT('ra', LPAD((@row_number2:=@row_number2 + 1), 28, '0')) as id,
  '00000000000000000000000000000002' as roleId,
  p.id as permissionId
FROM `permission` p, (SELECT @row_number2:=0) r
WHERE p.status = '1'
  AND p.code NOT IN ('permission:create', 'permission:update', 'permission:delete', 'user:delete');

-- =============================================================================
-- 10. Assign Read-Only Permissions to User Role
-- =============================================================================

INSERT INTO `role_permission` (`id`, `roleId`, `permissionId`)
SELECT
  CONCAT('ru', LPAD((@row_number3:=@row_number3 + 1), 28, '0')) as id,
  '00000000000000000000000000000003' as roleId,
  p.id as permissionId
FROM `permission` p, (SELECT @row_number3:=0) r
WHERE p.status = '1'
  AND p.code IN ('user:list', 'user:detail', 'role:list');

-- =============================================================================
-- Initialization Complete
-- =============================================================================
-- Tables created:
--   1. user - User account information
--   2. role - Role definitions
--   3. permission - Permission definitions
--   4. user_role - User-Role associations
--   5. role_permission - Role-Permission associations
--
-- Default data inserted:
--   - 4 roles (Super Admin, Admin, User, Guest)
--   - 18 permissions (menu, button, and API permissions)
--   - Role-Permission assignments
--
-- Next steps:
--   1. Create users in the 'user' table
--   2. Assign roles to users via 'user_role' table
--   3. Customize permissions as needed
-- =============================================================================
