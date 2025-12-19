-- User Table
-- Stores user account information
-- RBAC0: Core entity representing system users

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
