-- Permission Table
-- Stores permission definitions
-- RBAC0: Core entity representing system permissions

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
