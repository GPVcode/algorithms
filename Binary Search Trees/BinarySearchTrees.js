class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.left = null;
      this.right = null;
    }
  
    insert(key, value) {
      // if key empty key inserted is root of node tree
      if(this.key == null){
        this.key = key;
        this.value = value;
      }
      // if key is less than root, then key needs to be in left side. 
      else if(key < this.key){
        //if left side doesn't exists, instantiate new node as left child and passing this as parent
        if(this.left == null){
          this.left = new BinarySearchTree(key, value, this);
        } 
        // if left child existis, recursively call insert method so node is added further down the tree
        else{
          this.left.insert(key, value);
        }
      } 
      // if new key is greater than root, do the same process on the right side    
      else{
        if(this.right == null){
          this.right = new BinarySearchTree(key, value, this)
        } else{
          this.right.insert(key, value);
        }
      }
    }
  
  
    find(key) {
      // if item is found at root, return root
      if(this.key == key){
        return this.value;
      }
      // if item exists and < root follow left child and recusrively check if left or right of child item until tiem is found
      else if(key < this.key && this.left){
        return this.left.find(key);
      }
      else if( key > this.key && this.right){
        return this.right.find(key);
      }
      else{
        throw new Error('Key Not Found');
      }
    }
  
    remove(key) {
      if (this.key == key) {
        if (this.left && this.right) {
          const successor = this.right._findMin();
          this.key = successor.key;
          this.value = successor.value;
          successor.remove(successor.key);
        }
        //if node only has left child, replace node with its left child.
        else if(this.left){
          this._replaceWith(this.left);
        }
        //if node only has right child, replace with right child.
        else if(this.right){
          this._replaceWith(this.right);
        }
        //if node has no childres, remoe it and any references to it by called this._replaceWith(null)
        else{
          this._replaceWith(null);
        }
      }
      else if(key < this.key && this.left){
        this.left.remove(key);
      }
      else if(key > this.key && this.right){
        this.right.remove(key);
      }
      else{
        throw new Error('Key Not Found');
      }
    }
  
  
    _replaceWith(node) {
      if (this.parent) {
        if (this == this.parent.left) {
          this.parent.left = node;
        } else if (this == this.parent.right) {
          this.parent.right = node;
        }
  
        if (node) {
          node.parent = this.parent;
        }
      } else {
        if (node) {
          this.key = node.key;
          this.value = node.value;
          this.left = node.left;
          this.right = node.right;
        } else {
          this.key = null;
          this.value = null;
          this.left = null;
          this.right = null;
        }
      }
    }
  
    _findMin() {
      if (!this.left) {
        return this;
      }
      return this.left._findMin();
    }
  }
  
  module.exports = BinarySearchTree;
  