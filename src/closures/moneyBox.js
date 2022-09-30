function moneyBox() {
   let moneyCount = 0;

   function boxCount(count) {
      moneyCount += count;
      console.log(`My money: $${moneyCount}`);
   }

   return boxCount;
}

const boxCountJuan = moneyBox();
boxCountJuan(50);
boxCountJuan(125);
boxCountJuan(245);
