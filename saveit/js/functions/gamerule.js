var gamerule = {
  countobjon :function (){
    for(var i of spriteStorage){


      if(i.key=='tv2' && stateStorage[i.id]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'tv2'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.key=='radio' && stateStorage[i.id]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'radio'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.key=='lampe_bleue' && stateStorage[i.id]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'lampe'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.key=='lampe_jaune' && stateStorage[i.id]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'lampe'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.key=='lampe_verte' && stateStorage[i.id]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'lampe'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.key=='ventilateur' && stateStorage[i.id]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'ventilateur'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.key=='baignoire' && stateStorage[i.id]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'baignoire'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.key=='evier' && stateStorage[i.id]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'evier'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.key=='fenetre' && stateStorage[i.id]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'fenetre'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.key=='frigo' && stateStorage[i.id]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'frigo'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.key=='lavabo' && stateStorage[i.id]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'lavabo'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.key=='machinealaver' && stateStorage[i.id]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'machinealaver'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.key=='microonde' && stateStorage[i.id]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'microonde'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.key=='ordinateur' && stateStorage[i.id]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'ordinateur'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.key=='radiateur' && stateStorage[i.id]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'radiateur'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.key=='tv' && stateStorage[i.id]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'tv'){
            total -= objectcost[index].cost;
          }
        });
      };
    }
  },


  allumeobj :function(){
    if(coutobjprecedent <= 1){
      turnon = Math.random() * (nbobj);
      turnon=Math.trunc(turnon);
      stateStorage[turnon]=true;
      objectcost.forEach(function(element){
        index = objectcost.indexOf(element);
        if (objectcost[index].name == spriteStorage[turnon].key){
          coutobjprecedent= objectcost[index].cost;
          console.log(index);
        }
      });
    }
    else {
      coutobjprecedent=coutobjprecedent-1;
    }

  }
};