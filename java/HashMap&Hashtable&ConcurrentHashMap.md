### Differences between HashMap and Hashtable?

https://stackoverflow.com/questions/40471/differences-between-hashmap-and-hashtable  

There are several differences between HashMap and Hashtable in Java:  

1. Hashtable is synchronized, whereas HashMap is not. This makes HashMap better for non-threaded applications, as unsynchronized Objects typically perform better than synchronized ones.  
2. Hashtable does not allow null keys or values.  HashMap allows one null key and any number of null values.
3. One of HashMap's subclasses is LinkedHashMap, so in the event that you'd want predictable iteration order (which is insertion order by default), you could easily swap out the HashMap for a LinkedHashMap. This wouldn't be as easy if you were using Hashtable.  

Since synchronization is not an issue for you, I'd recommend HashMap. If synchronization becomes an issue, you may also look at ConcurrentHashMap.


### What's the difference between ConcurrentHashMap and Collections.synchronizedMap(Map)?

https://stackoverflow.com/questions/510632/whats-the-difference-between-concurrenthashmap-and-collections-synchronizedmap  

For your needs, use ConcurrentHashMap.  
It allows concurrent modification of the Map from several threads without the need to block them.   Collections.synchronizedMap(map) creates a blocking Map which will degrade performance, albeit ensure consistency (if used properly).  

Use the second option if you need to ensure data consistency, and each thread needs to have an up-to-date view of the map. Use the first if performance is critical, and each thread only inserts data to the map, with reads happening less frequently.  
