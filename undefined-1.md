# 파일

## POST

{% swagger method="post" path="" baseUrl="/file-service/upload" summary="파일 업로드 " %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="filename" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="parent" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="parentList" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="currentID" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="size" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="file" %}

{% endswagger-parameter %}

{% swagger-response status="500: Internal Server Error" description="" %}

{% endswagger-response %}
{% endswagger %}

## **GET**

{% swagger method="get" path="" baseUrl="/file-service/quick-list" summary="홈화면 Quick Access" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="304: Not Modified" description="" %}
<pre><code><strong>[]
</strong></code></pre>
{% endswagger-response %}
{% endswagger %}

{% swagger method="get" path="" baseUrl="/file-service/list?parent=/&sortby=date_desc&search=&limit=50&storageType=DEFAULT" summary="home화면 - Home Files" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="parent" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="sortby" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="search" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="limit" %}

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

{% swagger method="get" path="" baseUrl="/file-service/list?parent=[폴더id]&sortby=date_desc&search=&limit=50&storageType=DEFAULT" summary="폴더 클릭시 info -> 파일 리스트" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="304: Not Modified" description="" %}
<pre><code><strong>[]
</strong></code></pre>
{% endswagger-response %}
{% endswagger %}

## DELETE

{% swagger method="delete" path="" baseUrl="" summary="" %}
{% swagger-description %}

{% endswagger-description %}
{% endswagger %}

## **PATCH**

{% swagger method="patch" path="" baseUrl="" summary="" %}
{% swagger-description %}

{% endswagger-description %}
{% endswagger %}
