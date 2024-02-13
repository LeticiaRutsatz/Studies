//Defines a one-to-many dependency between objects, so that when an object 
//changes state, all of its dependents are notified and updated automatically.


function Subject(){
  this.observers = [] // array of observer functions
}

Subject.prototype = {
  subscribe: function(fn){
    this.observers.push(fn)
  },
  unsubscribe: function(fnToRemove){
    this.observers = this.observers.filter( fn => {
      if(fn != fnToRemove)
        return fn
    })
  },
  fire: function(){
    this.observers.forEach( fn => {
      fn.call()
    })
  }
}

const subject = new Subject()

function Observer1(){
  console.log("Observer 1 Firing!")
}

function Observer2(){
  console.log("Observer 2 Firing!")
}

subject.subscribe(Observer1)
subject.subscribe(Observer2)
subject.fire() 

subject.unsubscribe(Observer1)
subject.fire()