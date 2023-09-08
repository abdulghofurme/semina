# API Specs

| Name       | Routes                     | Method | Description             | Made by | Test Result | Meddleware Auth |
| ---------- | -------------------------- | ------ | ----------------------- | ------- | ----------- | --------------- |
| CMS        |
| Categories |
|            | /api/v1/cms/categories     | GET    | Get all categories      |         |             | Yes             |
|            | /api/v1/cms/categories     | POST   | Create categories       |         |             | Yes             |
|            | /api/v1/cms/categories/:id | GET    | Get on categories by id |         |             | Yes             |
|            | /api/v1/cms/categories/:id | PUT    | Update categories       |         |             | Yes             |
|            | /api/v1/cms/categories/:id | DELETE | Delete categories       |         |             | Yes             |

## Get all categories

### Resource Specification

|                        |                                               |
| ---------------------- | --------------------------------------------- |
| **Description**        | API untuk mengambil data informasi categories |
| **Resource URL**       | `https://[host]:[port]/api/v1/cms/categories` |
| **Transport Protocol** | HTTP(S)                                       |
| **Method**             | GET                                           |

### Request Headers

| Header Field Name | Acceptable Value |
| ----------------- | ---------------- |
| Content-Type      | application/json |
| Authorization     | Bearer [token]   |

### Request Headers Example:

```
Content-Type: application/json
Athorization: Bearer 2kljdsfkasjdhqejkwfdsjv435jk43j5hk3j4h32j42
```

### Response Body Example:

```json
{
  "data": [
    {
      "_id": "64fb8dd9b33bd06185de1e72",
      "name": "Test",
      "createdAt": "2023-09-08T21:10:49.541Z",
      "updatedAt": "2023-09-08T21:10:49.541Z",
      "__v": 0
    },
    {
      "_id": "64fb8ddeb33bd06185de1e74",
      "name": "Test 2",
      "createdAt": "2023-09-08T21:10:54.289Z",
      "updatedAt": "2023-09-08T21:10:54.289Z",
      "__v": 0
    }
  ]
}
```

## Create categories

### Resource Specification

|                        |                                               |
| ---------------------- | --------------------------------------------- |
| **Description**        | API untuk membuat data baru categories        |
| **Resource URL**       | `https://[host]:[port]/api/v1/cms/categories` |
| **Transport Protocol** | HTTP(S)                                       |
| **Method**             | POST                                          |

### Request Headers

| Header Field Name | Acceptable Value |
| ----------------- | ---------------- |
| Content-Type      | application/json |
| Authorization     | Bearer [token]   |

### Request Headers Example:

```
Content-Type: application/json
Athorization: Bearer 2kljdsfkasjdhqejkwfdsjv435jk43j5hk3j4h32j42
```

### Request Body

| Element Name | Data Type | Unique | Length | Mandatory | Description         |
| ------------ | --------- | ------ | ------ | --------- | ------------------- |
| name         | string    | yes    | 20     | yes       | categories name     |
| organizer    | uuid      | yes    | 24     | yes       | User (organizer) ID |

> `id organizer` didapat dari token yang dikirim dari request headers

### Request Body Example:

```json
{
  "name": "Test"
}
```

### Response Body Example:

```json
{
  "data": {
    "name": "Test",
    "_id": "64fb8ddeb33bd06185de1e74",
    "createdAt": "2023-09-08T21:10:54.289Z",
    "updatedAt": "2023-09-08T21:10:54.289Z",
    "__v": 0
  }
}
```

## Get one categories

### Resource Specification

|                        |                                                              |
| ---------------------- | ------------------------------------------------------------ |
| **Description**        | API untuk mengambil data informasi categories berdasarkan id |
| **Resource URL**       | `https://[host]:[port]/api/v1/cms/categories/:id`            |
| **Transport Protocol** | HTTP(S)                                                      |
| **Method**             | GET                                                          |

### Request Headers

| Header Field Name | Acceptable Value |
| ----------------- | ---------------- |
| Content-Type      | application/json |
| Authorization     | Bearer [token]   |

### Request Headers Example:

```
Content-Type: application/json
Athorization: Bearer 2kljdsfkasjdhqejkwfdsjv435jk43j5hk3j4h32j42
```

### Request Query Parametes

| Element Name | Data Type | Length | Mandatory | Description   |
| ------------ | --------- | ------ | --------- | ------------- |
| id           | uuid      | 20     | yes       | categories id |

### Response Body Example:

```json
{
  "data": {
    "_id": "64fb8ddeb33bd06185de1e74",
    "name": "Test",
    "createdAt": "2023-09-08T21:10:54.289Z",
    "updatedAt": "2023-09-08T21:10:54.289Z",
    "__v": 0
  }
}
```

## Update one categories

### Resource Specification

|                        |                                                             |
| ---------------------- | ----------------------------------------------------------- |
| **Description**        | API untuk mengubah data informasi categories berdasarkan id |
| **Resource URL**       | `https://[host]:[port]/api/v1/cms/categories/:id`           |
| **Transport Protocol** | HTTP(S)                                                     |
| **Method**             | PUT                                                         |

### Request Headers

| Header Field Name | Acceptable Value |
| ----------------- | ---------------- |
| Content-Type      | application/json |
| Authorization     | Bearer [token]   |

### Request Headers Example:

```
Content-Type: application/json
Athorization: Bearer 2kljdsfkasjdhqejkwfdsjv435jk43j5hk3j4h32j42
```

### Request Query Parametes

| Element Name | Data Type | Length | Mandatory | Description   |
| ------------ | --------- | ------ | --------- | ------------- |
| id           | uuid      | 20     | yes       | categories id |

### Request Body

| Element Name | Data Type | Unique | Length | Mandatory | Description         |
| ------------ | --------- | ------ | ------ | --------- | ------------------- |
| name         | string    | yes    | 20     | yes       | categories name     |
| organizer    | uuid      | yes    | 24     | yes       | User (organizer) ID |

> `id organizer` didapat dari token yang dikirim dari request headers

### Request Body Example:

```json
{
  "name": "Seminar"
}
```

### Response Body Example:

```json
{
  "data": {
    "_id": "64fb8ddeb33bd06185de1e74",
    "name": "Seminar",
    "createdAt": "2023-09-08T21:10:54.289Z",
    "updatedAt": "2023-09-08T21:24:45.041Z",
    "__v": 0
  }
}
```

## Delete one categories

### Resource Specification

|                        |                                                              |
| ---------------------- | ------------------------------------------------------------ |
| **Description**        | API untuk menghapus data informasi categories berdasarkan id |
| **Resource URL**       | `https://[host]:[port]/api/v1/cms/categories/:id`            |
| **Transport Protocol** | HTTP(S)                                                      |
| **Method**             | DELETE                                                       |

### Request Headers

| Header Field Name | Acceptable Value |
| ----------------- | ---------------- |
| Content-Type      | application/json |
| Authorization     | Bearer [token]   |

### Request Headers Example:

```
Content-Type: application/json
Athorization: Bearer 2kljdsfkasjdhqejkwfdsjv435jk43j5hk3j4h32j42
```

### Request Query Parametes

| Element Name | Data Type | Length | Mandatory | Description   |
| ------------ | --------- | ------ | --------- | ------------- |
| id           | uuid      | 20     | yes       | categories id |

### Response Body Example:

```json
{
  "data": {
    "_id": "64fb91c81551b82cc4b0ef3d",
    "name": "Test 2",
    "createdAt": "2023-09-08T21:27:36.080Z",
    "updatedAt": "2023-09-08T21:27:36.080Z",
    "__v": 0
  }
}
```
