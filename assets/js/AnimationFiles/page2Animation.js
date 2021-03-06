var ani = new MyAnimation();

$("#LeftPros").click(function() {
    carouselJumpTo(2)
})
$("#RightCons").click(function() {
    carouselJumpTo(2)
})
class AnimationPage02 {
    girlCenterAnimation = ani.appear("#girl-center *", 1200);
    backgroundBehindGirlAnimation = ani.appear("#background-behind-girl *", 1200);
    tableAnimation = ani.fadeup("#table", 1200, -20);
    stuffOnTableAnimation = ani.fadeup("#stuff-on-table", 1200, -135);
    upperTextWrapperAnimation = ani.appear("#upper-text-wrapper", 1500);
    leftProsAnimation = ani.toXDelay("#LeftPros *", 500, -200);
    rightProsAnimation = ani.toXDelay("#RightCons *", 500, 200);
    rightConsAppear = ani.appearDelay("#RightCons *", 500, 1000)
    rightConsMove = ani.moveEasingLR("#RightCons *", 1000, -20)
    leftProsAppear = ani.appearDelay("#LeftPros *", 500, 1000)
    leftProsMove = ani.moveEasingLR("#LeftPros *", 1000, 20)
        //////////////////////////
    reverseBackground = ani.disappear("#background-behind-girl *");
    reverseGirl = ani.disappear("#girl-center *");
    reverseTable = ani.returnY("#table", -20);
    reverseStuffOnTable = ani.returnY("#stuff-on-table", 135);
    reverseUpperText = ani.disappear("#upper-text-wrapper");
    reverseLeftPros = ani.returnX("#LeftPros *", 200);
    reverseRightCons = ani.returnX("#RightCons *", -200);

    run() {
        this.girlCenterAnimation.restart();
        this.backgroundBehindGirlAnimation.restart();
        this.tableAnimation.restart();
        this.stuffOnTableAnimation.restart();
        this.upperTextWrapperAnimation.restart();
        // this.leftProsAnimation.restart();
        // this.rightProsAnimation.restart();
        this.leftProsAppear.restart();
        this.rightConsAppear.restart();
        this.leftProsMove.restart()
        this.rightConsMove.restart();
    }
    reverse() {
        this.reverseBackground.restart();
        this.reverseGirl.restart();
        this.reverseTable.restart();
        this.reverseStuffOnTable.restart();
        this.reverseUpperText.restart();
        this.reverseLeftPros.restart();
        this.reverseRightCons.restart();
    }
}

var p02Animation = new AnimationPage02()

export default p02Animation