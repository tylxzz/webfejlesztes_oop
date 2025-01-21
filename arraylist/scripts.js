class ArrayList {
    /**
     * @type {Number}
     */
    #count
    #state
    get Count() {
        return this.#count
    }
    constructor() {
        this.#count = 0
        this.#state = {}
    }
    Add(element) {
        const index = this.#count
        this.#state[index] = element
        Object.defineProperty(this, index, {
            get: function() {
                return this.#state[index]
            },
            set: function(value) {
                this.#state[index] = value
            },
            enumerable: true,
            configurable: true
        })
        this.#count++
    }
    Clear() {
        this.#count = 0
        for(const s in this.#state) {
            delete this.#state[s]
            delete this[s]
        }
    }
    Contains(element) {
        for(const s in this.#state) {
            if(this.#state[s] === element) {
                return true
            }
        }
        return false
    }
}

const alma = {}
Object.defineProperty(alma, 'nev', {value: 'Ferenc', writable: true})
alma.nev = 'asd'
console.log(alma)

const list = new ArrayList()
list.Add("c1")
console.log(list)
list.Add("n2")
console.log(list)

console.log(list[0])

const array = new ArrayList()
array.Add(1)
array.Add(2)
array.Add(3)
array.Add(4)
array.Add(5)
console.log(array)
console.log(array.Count)
console.log(array.Contains(3))
console.log(array.Contains(6))
console.log(array.Clear())
console.log(array.Count)