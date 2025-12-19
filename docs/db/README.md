# RBAC0 数据库设计

本目录包含 RBAC0（基础角色权限模型）的数据库结构定义与初始化脚本。

## 模型概览

RBAC0 包含四类核心对象：

1. **用户（user）**：系统登录与资源使用者
2. **角色（role）**：权限集合，用于分配给用户
3. **权限（permission）**：对系统资源的访问能力
4. **关系表**：
   - 用户-角色（user_role）
   - 角色-权限（role_permission）

关系示意：

```
user ←→ user_role ←→ role ←→ role_permission ←→ permission
```

- 一个用户可以拥有多个角色
- 一个角色可以分配给多个用户
- 一个角色可以拥有多个权限
- 一个权限可以分配给多个角色

## 表结构说明

### 1. user
用户账号表。

**主要字段：**
- `id`：用户 ID（char(32)，UUID）
- `email`：登录邮箱（唯一）
- `password`：加密密码
- `salt`：密码盐值
- `nickname`：昵称
- `avatar`：头像 URL
- `status`：状态（1=启用，0=禁用，2=锁定）
- `type`：类型（1=普通用户，2=管理员）
- `ip`：最近登录 IP
- `activeTime`：最近活跃时间
- `createTime` / `updateTime`：创建/更新时间

**索引：**
- 主键：`id`
- 唯一索引：`email`
- 普通索引：`status`、`type`、`createTime`

### 2. role
角色定义表。

**主要字段：**
- `id`：角色 ID（char(32)，UUID）
- `name`：角色名称
- `code`：角色编码（唯一，例如 ROLE_ADMIN）
- `description`：描述
- `status`：状态（1=启用，0=禁用）
- `sort`：排序
- `createTime` / `updateTime`：创建/更新时间

**索引：**
- 主键：`id`
- 唯一索引：`code`
- 普通索引：`name`、`status`、`sort`

### 3. permission
权限定义表。

**主要字段：**
- `id`：权限 ID（char(32)，UUID）
- `name`：权限名称
- `code`：权限编码（唯一，例如 user:create）
- `type`：权限类型（1=菜单，2=按钮，3=接口）
- `resource`：资源路径或标识
- `method`：HTTP 方法（仅接口权限）
- `description`：描述
- `parentId`：父级权限 ID（用于树形结构）
- `status`：状态（1=启用，0=禁用）
- `sort`：排序
- `createTime` / `updateTime`：创建/更新时间

**索引：**
- 主键：`id`
- 唯一索引：`code`
- 普通索引：`name`、`type`、`status`、`parentId`、`sort`

### 4. user_role
用户-角色关联表（多对多）。

**主要字段：**
- `id`：关联 ID（char(32)，UUID）
- `userId`：用户 ID
- `roleId`：角色 ID
- `createTime`：创建时间

**索引：**
- 主键：`id`
- 唯一索引：`(userId, roleId)`
- 普通索引：`userId`、`roleId`、`createTime`

### 5. role_permission
角色-权限关联表（多对多）。

**主要字段：**
- `id`：关联 ID（char(32)，UUID）
- `roleId`：角色 ID
- `permissionId`：权限 ID
- `createTime`：创建时间

**索引：**
- 主键：`id`
- 唯一索引：`(roleId, permissionId)`
- 普通索引：`roleId`、`permissionId`、`createTime`

## 初始化方式

### 方式一：单表创建
```bash
mysql -u root -p your_database < docs/db/user.sql
mysql -u root -p your_database < docs/db/role.sql
mysql -u root -p your_database < docs/db/permission.sql
mysql -u root -p your_database < docs/db/user_role.sql
mysql -u root -p your_database < docs/db/role_permission.sql
```

### 方式二：一次性初始化
```bash
mysql -u root -p your_database < docs/db/init_rbac.sql
```

## 使用示例

### 1. 创建角色
```sql
INSERT INTO role (id, name, code, description, status)
VALUES (UUID(), '管理员', 'ROLE_ADMIN', '系统管理员', '1');
```

### 2. 创建权限
```sql
INSERT INTO permission (id, name, code, type, resource, method, status)
VALUES (UUID(), '创建用户', 'user:create', '3', '/api/user', 'POST', '1');
```

### 3. 角色绑定权限
```sql
INSERT INTO role_permission (id, roleId, permissionId)
SELECT UUID(), r.id, p.id
FROM role r, permission p
WHERE r.code = 'ROLE_ADMIN' AND p.code = 'user:create';
```

### 4. 用户绑定角色
```sql
INSERT INTO user_role (id, userId, roleId)
SELECT UUID(), u.id, r.id
FROM user u, role r
WHERE u.email = 'admin@example.com' AND r.code = 'ROLE_ADMIN';
```

### 5. 查询用户权限
```sql
SELECT DISTINCT p.*
FROM user u
JOIN user_role ur ON u.id = ur.userId
JOIN role r ON ur.roleId = r.id
JOIN role_permission rp ON r.id = rp.roleId
JOIN permission p ON rp.permissionId = p.id
WHERE u.email = 'admin@example.com'
  AND u.status = '1'
  AND r.status = '1'
  AND p.status = '1';
```

## 权限类型说明

1. **菜单（type='1'）**：导航菜单
2. **按钮（type='2'）**：页面操作按钮
3. **接口（type='3'）**：后端 API 接口

## 设计约束

- 关联表的唯一索引避免重复绑定
- 外键列索引提升联表查询效率
- `status` 字段用于软禁用，避免硬删除

