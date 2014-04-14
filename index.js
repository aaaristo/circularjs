var _= require('underscore');

module.exports= function traverse(orig,cb,skipDelete)
{
    var stack= [orig],
        push= _.bind(stack.push,stack),
        visited= [],
        wasVisited= function (obj)
        {
            if (obj.__visited!==undefined)
              return true;
            else
            {
              obj.__visited= visited.length;
              visited.push(obj);
              return false;
            }
        };

    while (stack.length)
    {
       var current= stack.pop();

       if (current&&typeof current=='object')
       {
           if (wasVisited(current)) continue;
     
           if (_.isArray(current))
           {
             cb(current);
             _(current).forEach(push);
           }
           else
           {
             var keys= _.without(_.keys(current),'__visited');
             cb(current,keys);
             _(keys).forEach(function (key)
             {
                push(current[key]);
             });
           }
       }
    }

    if (!skipDelete)
    _(visited).forEach(function (node)
    {
        delete node.__visited;
    });
};