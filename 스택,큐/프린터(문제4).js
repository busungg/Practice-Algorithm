function solution(priorities, location) {
    var queue = {head: null, tail: null};
    var item; //ture 넣고

    for(var i = 0, len = priorities.length; i < len; i++) {
        item = {
            prior: priorities[i],
            check: (i == location ? true : false),
            next: null
        }
        
        if(!queue.head) {
            queue.head = item;
            queue.tail = item;
        } else {
            queue.tail.next = item;
            queue.tail = item;
        }
    }

    priorities.sort(function(a, b) {
            return b-a;
        });
    var print = 0;

    item = queue.head;
    var prior = 0;
    while(item) {
        prior = priorities[print];
        if(item.prior < prior) {
            queue.head = item.next;
            queue.tail.next = item;
            queue.tail = item;
            queue.tail.next = null;
        } else {
            print++;
            if(item.check) {
                break;
            } else {
                queue.head = item.next;
            }
        }

        item = queue.head;
    }

    return print;
}