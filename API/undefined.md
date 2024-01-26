# 로그인

## POST

{% swagger method="post" path="" baseUrl="/user-service/login" summary="로그인" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name=" email" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```
{
    "user": {
        "_id": "65a63dfa83005137e85bacfd",
        "email": "1234@gmail.com",
        "emailVerified": true,
        "createdAt": "2024-01-16T08:27:38.409Z",
        "updatedAt": "2024-01-19T06:49:41.936Z",
        "__v": 16,
        "emailToken": "dd17011433ddc3c8e4fa361e819b319fd3bd13d5a591e3f57973304de20d93380b6507755f34b1e30a4a0722749aa5754798a0f9cf580b7133851785f4010c5a50c72ba9a98481d246e0b666f4631861f96014e4254b0a47eb244dd1409957c2b7a526305c1bbe44d5df731429b0638fb19975832e7a58c5252314c67c7607f5623a390e9375f22863fcbdac0c8e882084282004791620e5bdaa9f08ea48abcb6cd2b666b9b7aa16ed38cea55fb682f3c2c7b14ffcc9a034f7b1df3b21114b50c14e4c305c198e5dc159667ea0581a56d18ddfe285ba15a13870e225ce436b7829a9667c7ea626d942a744bcb50e7e2f734c6bd29478b7e2ac5131eec1a6301ba04a6a2c89a9b94c0e9b1b889aa4954e4ceb9d9e507cccd21be297229861ee481e812227aaf2d5b1f73ca4dcffb69237"
    }
}
```
{% endswagger-response %}

{% swagger-response status="500: Internal Server Error" description="" %}
```
// Some code
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="" baseUrl="/user-service/create" summary="계정 생성 " %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name=" email" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" %}

{% endswagger-parameter %}

{% swagger-response status="201: Created" description="" %}
```
{
    "user": {
        "_id": "65aa295d8cd59c16d4af9a54",
        "email": "222@gmail.com",
        "emailVerified": true,
        "createdAt": "2024-01-19T07:48:45.982Z",
        "updatedAt": "2024-01-19T07:48:46.061Z",
        "__v": 0,
        "emailToken": "ee0f2059ecfd8c5a9186710bfc75f98271a29b1f245516a794f7135c6bdae1db57ee8a5ab73a600fda0ee0d8a33bfdcd3f54bd819da3ae1279e1c915e1dfa2759f125034f324260f31345e77633b9ac30a957c539429e93738fe3c7e48220096871adc0d51a56ac5976ef631b9443bfb9ba7e95bee420c817de00e5571d41de6c67d8b713adc4517f61021746cf640da4fdfb55163dbdc8a810da1f8944470963c726c0f0939050ad5fc783de81083ba19c2acf719baa48cf680b6a951bd937b9f702bcef5bd5bf8728c885126e1b792b1f539050546ba7c644f4ab619d548342110d3b7fb1dc95a06b419b1029b90c2d667aa85eabb2d8f15b685a37b19e994987664b73e7f44ccfab51f4f0c3cd198508ead44032881f7f837653a2b374719"
    }
}
```
{% endswagger-response %}
{% endswagger %}

## **GET**

{% swagger method="get" path="" baseUrl="" summary="" %}
{% swagger-description %}

{% endswagger-description %}
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
