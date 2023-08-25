// function createElement(type,text,color){
//     const element = document.createElement(type);
//     element.innerText = text;
//     element.style.color = color;
//     document.body.append(element)

//     return{
//         element,
//         setText(text){
//             element.innerText = text;
//         },
//         setColor(color){
//             element.style.color = color
//         }
//     }
// }



function node(value,nextNode = null){
    return{
        value : value,
        nextNode: nextNode
    };
}
function linkedList(){
    let head = null
    let size = 0;
    return{
        insertFirst(value){
            head = node(value,head);
            size++
        },
        append(value){
            let newNode = node(value)
            let current;

            if(!head){
                head = newNode
            }else{
                current = head
                while(current.nextNode){
                    current = current.nextNode
                }
                current.nextNode = newNode
            }
            size++
        },
        size(){
            console.log(size)
            return size
        },
        head(){
            console.log("Head: ",head.value)
        },
        tail(){
            if(!head){
                return null;
            }

            let current = head;
            while(current.nextNode){
                current = current.nextNode
            }
            console.log("tail:", current.value)
            return current
        },
        at(index){
            let current = head;
            let currSize = 0
            if(index >= size){
                console.log("not valid")
                return null
            }
            while(current.nextNode){
                currSize++
                current = current.nextNode
                if(currSize === index){
                    console.log("index" ,current.value)
                    return current
                }
            }
        },
        pop(){
            if(!head){
                return null
            }
            let current = head;
            let prev = null;
            while(current.nextNode){
                prev = current
                current = current.nextNode
            }
            if(prev){
                prev.nextNode = null;
            }else{
                head = null
            }
            return current
        },
        contains(value){
            let current = head;
            while(current){
                if(current.value === value){
                    console.log('true')
                    return true
                }
                current = current.nextNode;
            }
            console.log('false')
            return false
        },
        find(value){
            let current = head;
            let counter = 0;
            while(current){
                if(current.value === value){
                    console.log(counter)
                    return counter;
                }
                counter++
                current = current.nextNode
            }
            console.log("null")
            return null
        },
        
        print(){
            let current = head
            while(current){
                console.log("print:",current.value)
                current = current.nextNode
            }
        },
        toString(){
            let current = head
            let stringVersion = ""
            while(current){
                let nodeString = (`( ${current.value} ) -> `)
                current = current.nextNode
                stringVersion += nodeString
            }
            console.log(stringVersion + ("( null )"))
        }
    }
}

const ll = linkedList();
ll.insertFirst(300)
ll.insertFirst(200)
ll.insertFirst(100)
ll.insertFirst(99)
ll.append(400)
ll.append(500)
ll.head()
ll.tail()
ll.at(6)

ll.print()
ll.size()
// pop works
// ll.pop()
ll.contains(500)
ll.find(500)
ll.toString()




