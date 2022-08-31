class Algo{
    constructor(valor){
      this.data=valor
      this.next=null
    }
    print(){
      console.log(this.data)
    }
    addNode(node){
      var ptr=this
      if(ptr.next == null){
        ptr.next = node
      }      
      else{
        while(ptr.next != null)
          ptr=ptr.next
        ptr.next=node
      }
    }
    printWalk(){
      var ptr=this
      while(ptr != null){
        ptr.print()
        ptr=ptr.next
      }      
    }
  }
  
  var prim = new Algo("Edson")
  prim.addNode(new Algo("Ifarraguirre"))
  prim.addNode(new Algo("Moreno"))
  
  prim.printWalk()