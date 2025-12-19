-- User Table
-- Stores user account information
-- RBAC0: Core entity representing system users

CREATE TABLE `user` (
  `id` char(32) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'User unique identifier (UUID)',
  `username` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Username (login)',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Encrypted password',
  `salt` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Password salt for encryption',
  `nickname` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'User display name',
  `avatar` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Avatar image URL',
  `status` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1' COMMENT 'User status: 1=active, 0=disabled, 2=locked',
  `type` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1' COMMENT 'User type: 1=regular, 2=admin',
  `ip` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Last login IP address',
  `activeTime` datetime DEFAULT NULL COMMENT 'Last active time',
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Account creation time',
  `updateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last update time',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_username` (`username`),
  KEY `idx_status` (`status`),
  KEY `idx_type` (`type`),
  KEY `idx_createTime` (`createTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='User account table';
