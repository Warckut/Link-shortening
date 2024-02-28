__Stack__: Express, PostgreSQL(knex);  

__Implementation__: hashKey = base62(time);  

__Range__: TIME_BEGIN < time < TIME_BEGIN + n ^ 62  

TIME_BEGIN - time begin (in milliseconds)  
n - maximum number of characters in a hashKey  

__Example__:  

|id|short_url|full_url|
|--|-----|-----|
|. . .|. . .|. . .|
|8|Dd67Ck|https://neetcode.io/courses/dsa-for-beginners/32
|. . .|. . .|. . .|
