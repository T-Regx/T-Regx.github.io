---
id: count
title: Count occurrences
---

```php
pattern('[aeiouy]')->count('Computer');
```
```php
3
```

You can get the same effect by calling
```php
pattern('[aeiouy]')->match('Computer')->count();
```