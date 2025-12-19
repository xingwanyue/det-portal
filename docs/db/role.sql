-- Role Table
-- Stores role definitions
-- RBAC0: Core entity representing system roles

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
