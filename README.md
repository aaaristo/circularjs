circularjs
==========

Traverse circular javascript object graphs in a non-recursive way.

```
npm install circularjs
```

```javascript

var traverse= require('circularjs');

var a= { name: 'Andrea' },
    e= { name: 'Elena' };
    
a.daughter= e;
e.dad= a;

traverse(a,console.log);
```
