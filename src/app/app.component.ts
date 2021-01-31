import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  curVal = 0;
  manualVal = 0;
  static LIMIT_CNT =100;

  /**
  * 모든 메소드는 checkLimitCnt(tempVal)를 호출하여 증감시키려는 값이 유효 범위인지 체크
  */

  /**
  * curVal 값을 비교하여 0일 경우 'gery' : 0보다 크면 'green' : 작으면 'red'
  * style.backgroundColor에 ㅍ프로퍼티 바인딩 되어 culVal에 따라 배경색을 변경시킵니다.
  */

  colorByValue(){
    if(this.curVal>0) return 'green';
    else if (this.curVal<0) return 'red';
    else return 'grey';
  }



  /**
  * 증감 메소드는 버튼을 클릭할때마다 culVal을 증감
  *
  */
  inc(){
    const tempVal =this.curVal+1;
    if(this.checkLimitCnt(tempVal)){
      this.curVal = tempVal;
    }
  }

  dec(){
    const tempVal = this.curVal-1;
    if(this.checkLimitCnt(tempVal)){
      this.curVal = tempVal;
    }
  }

  /**
  * 양방향 바인딩 된 manualVal을 수동으로 curVal을 덮어쓰고 다시 0으로 초기화
  */

  setValueForcibly(){
    if(this.checkLimitCnt(this.manualVal)){
      this.curVal = this.manualVal;
    }

    this.manualVal= 0;
  }

  checkLimitCnt(val){
    if(Math.abs(val)<AppComponent.LIMIT_CNT){
      return true;
    }

    const target = val > 0 ? '증가' : '감소';
    alert(`더 이상 ${target}시킬 수 없습니다.`);
    return false;
  }


}
