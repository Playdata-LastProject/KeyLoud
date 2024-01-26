# 폴더

## POST

{% swagger method="post" path="" baseUrl="/folder-service/upload" summary="폴더 생성" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="name" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="owner" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="parent" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="parentList" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```
{
    "parentList": [
        "/"
    ],
    "_id": "65aa2a3b8cd59c16d4af9a57",
    "name": "1",
    "parent": "/",
    "owner": "65a63dfa83005137e85bacfd",
    "createdAt": "2024-01-19T07:52:27.302Z",
    "updatedAt": "2024-01-19T07:52:27.302Z",
    "__v": 0
}
```
{% endswagger-response %}
{% endswagger %}

## **GET**

{% swagger method="get" path="" baseUrl="/folder-service/list?parent=/&sortby=date_desc&search=&storageType=DEFAULT" summary="home화면 Folders" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="parent" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="sortby" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="search" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="storageType" %}

{% endswagger-parameter %}

{% swagger-response status="304: Not Modified" description="" %}
```
{
    "parentList": [
        "/"
    ],
    "_id": "65aa314f8cd59c16d4af9a5e",
    "name": "2",
    "parent": "/",
    "owner": "65a63dfa83005137e85bacfd",
    "createdAt": "2024-01-19T08:22:39.075Z",
    "updatedAt": "2024-01-19T08:22:39.075Z",
    "__v": 0,
    "parentName": "Home",
    "folderName": "2"
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="get" path="" baseUrl="/folder-service/info/[폴더 id]" summary="폴더 info(폴더 클릭시)" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="200: OK" description="" %}
```
{
    "parentList": [
        "/"
    ],
    "_id": "65aa2a3b8cd59c16d4af9a57",
    "name": "1",
    "parent": "/",
    "owner": "65a63dfa83005137e85bacfd",
    "createdAt": "2024-01-19T07:52:27.302Z",
    "updatedAt": "2024-01-19T07:52:27.302Z",
    "__v": 0,
    "parentName": "Home",
    "folderName": "1"
}
```
{% endswagger-response %}

{% swagger-response status="304: Not Modified" description="" %}
```
{
    "parentList": [
        "/"
    ],
    "_id": "65aa314f8cd59c16d4af9a5e",
    "name": "2",
    "parent": "/",
    "owner": "65a63dfa83005137e85bacfd",
    "createdAt": "2024-01-19T08:22:39.075Z",
    "updatedAt": "2024-01-19T08:22:39.075Z",
    "__v": 0,
    "parentName": "Home",
    "folderName": "2"
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="get" path="" baseUrl="/folder-service/list?parent=65aa2a3b8cd59c16d4af9a57&sortby=date_desc&search=&storageType=DEFAULT" summary="폴더 클릭시 info -> Folders(폴더 리스트)" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="parent" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="sortby" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="search" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="storage Type" %}

{% endswagger-parameter %}

{% swagger-response status="304: Not Modified" description="" %}
```
[
    {
        "parentList": [
            "/",
            "65aa2a3b8cd59c16d4af9a57"
        ],
        "_id": "65aa2ab88cd59c16d4af9a58",
        "name": "1-2",
        "parent": "65aa2a3b8cd59c16d4af9a57",
        "owner": "65a63dfa83005137e85bacfd",
        "createdAt": "2024-01-19T07:54:32.125Z",
        "updatedAt": "2024-01-19T07:56:24.044Z",
        "__v": 0
    }
]
```
{% endswagger-response %}
{% endswagger %}

## DELETE

{% swagger method="delete" path="" baseUrl="/folder-service/remove" summary="폴더 삭제" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="id" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="parentList" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```
// Some code

```
{% endswagger-response %}
{% endswagger %}

## **PATCH**

{% swagger method="patch" path="" baseUrl="/folder-service/rename" summary="폴더명 변경" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="id" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="title" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger method="patch" path="" baseUrl="/folder-service/move" summary="폴더 이동(폴더 안 폴더)" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="id" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="parent" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}

{% endswagger-response %}
{% endswagger %}
