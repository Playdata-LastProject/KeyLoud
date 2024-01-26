---
description: /settings
---

# 환경설정



{% swagger method="get" path="" baseUrl="/user-service/user-detailed" summary="사용자 환경설정" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="_id" type="string" required="true" %}
시스템이 생성한 사용자 id
{% endswagger-parameter %}

{% swagger-parameter in="body" name="email" type="string" required="true" %}
사용자 email
{% endswagger-parameter %}

{% swagger-parameter in="body" name="emailVerified" type="boolean" required="true" %}
&#x20;사용자 email 확인 여부
{% endswagger-parameter %}

{% swagger-parameter in="body" name="createdAt" required="true" type="Date" %}
사용자가 생성된 날짜
{% endswagger-parameter %}

{% swagger-parameter in="body" name="updatedAt" required="true" type="Date" %}
사용자가 수정된 날짜
{% endswagger-parameter %}

{% swagger-parameter in="body" name="emailToken" required="true" type="string" %}
email 토큰
{% endswagger-parameter %}

{% swagger-parameter in="body" name="name" type="string" %}
사용자가 설정한 이름
{% endswagger-parameter %}

{% swagger-parameter in="body" name="storageLimit" type="number" required="true" %}
storageData / 전체 저장공간
{% endswagger-parameter %}

{% swagger-parameter in="body" name="storageSize" type="number" required="true" %}
storageData / 남은 저장공간
{% endswagger-parameter %}

{% swagger-parameter in="body" name="storageSize" type="number" required="true" %}
storageDataPersonal
{% endswagger-parameter %}

{% swagger-parameter in="body" name="storageLimit" type="number" required="true" %}
storageDataGoogle / 구글 연동된 전체 저장공간
{% endswagger-parameter %}

{% swagger-parameter in="body" name="storageSize" type="number" required="true" %}
storageDataGoogle / 구글 연동된 남은 저장공간
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```
{
    "storageData": {
        "storageLimit": 0,
        "storageSize": 0
    },
    "storageDataPersonal": {
        "storageSize": 0
    },
    "storageDataGoogle": {
        "storageLimit": 0,
        "storageSize": 0
    },
    "_id": "65a73d5cbbda5319e067a0a3",
    "email": "1234@gmail.com",
    "emailVerified": true,
    "createdAt": "2024-01-17T02:37:16.851Z",
    "updatedAt": "2024-01-19T06:42:20.801Z",
    "__v": 1,
    "emailToken": "5f26e8223b5a9a28e758b2639f982f3e4a6a47017eab2c36ba50d1c6e57886b548161199c9b285f7ed5f0ccd12492a491383fc8116b7d6f688ec02a951a976413bcf78274c7660e540e2cce80cd0f8a11e7575042641f75909963b9cac18010642929aebeea2334e1d2334cf14b2c79e1fc2600aa57f4b60828b56e643eb492a06696d7acee38ef17ac9852272e74e51ac659703dd50b4d9d1886739ac77d6e38c566ed7e8377421b07a8ad5a9edca402214c19c0026a52dc2d81e12845ffe6734823b5c4c6e142f761324d1a7e4b54357e69b4606d708d60ff0f7fc32a303ee1c35dbedf7fa111fa626eacf53bd8dd7b3c45442751950b542856919e7e3b0572cecc6ef63ac51e801948792e717cac07fd8428f812ab8da2f5bd70da8d588ce543e8e0a447c9261812d96bb4d5a9941",
    "name": "user"
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="patch" path="" baseUrl="user-service/add-name" summary="사용자 이름 설정" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="name" type="string" required="true" %}
사용자 이름 설정
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```
{
    name: "user"
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="user-service/logout" summary="사용자 로그아웃" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="200: OK" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="/user-service/change-password" summary="비밀번호 변경" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="newPassword" type="string" required="true" %}
변경한 비밀번호
{% endswagger-parameter %}

{% swagger-parameter in="body" name="oldPassword" type="string" required="true" %}
이전 비밀번호
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```
{
    newPassword: "qwer1234", 
    oldPassword: "qwer12345"
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="user-service/logout-all" summary="모든 로그아웃" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="200: OK" description="" %}

{% endswagger-response %}
{% endswagger %}

{% swagger method="patch" path="" baseUrl="user-service/refresh-storage-size" summary="저장공간 새로고침" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="200: OK" description="" %}

{% endswagger-response %}
{% endswagger %}
