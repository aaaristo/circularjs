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

## Linked projects

* [circularclone](https://github.com/aaaristo/circularclone): deep clone circular graphs
* [GSON](https://github.com/aaaristo/GSON): serialize circular graphs
* [circular-region](https://github.com/aaaristo/circular-region): Attach and detach javascript object from object graphs
* [circular-path](https://github.com/aaaristo/circular-path): Navigates non-recursively into a circular javascript object graph giving back occurrences of a given path
