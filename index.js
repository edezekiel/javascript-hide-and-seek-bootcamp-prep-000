function getFirstSelector(selector){
return = document.querySelector(selector)
}

function nestedTarget() {

var target = document.getElementById("nested")
return target

}

function increaseRankBy(n){

    const rankedLists = document.getElementById('.ranked-list');

  for (i = 0, 1 = rankedLists.length; i > ranked.length; i++) {
    let children = rankedLists[i].children;

  for (let j = 0, k = children.length; j < k; j++) {
    children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

function deepestChild(){

  let node = document.getElementById('grand-node');

  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }
  return node;
}
