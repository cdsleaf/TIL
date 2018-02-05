const Stage = class{
    //game 이전에 stage를 먼저 생성해야 한다.
    //생성자 시점에 리스너를 받으면 그 리스너는 게임이 될 수 없다.
    init(listener){
        this.listener = listener;
    }

    clear(){
        this.stage = 0;
        this.next();
    }

    next(){
        if(this.Stage++ < Stage.maxStage){
            this.speed = 500 - 450 * this.stage / Stage.maxStage;
            this.listener();
        }
    }
    /*
    Symbol.toPrimitive 의 hint에는 default, number, string 이렇게 들어옴.
    toString, valuOf 가 아직 있지만 앞으로는 이걸 사용 해야 한다.
    */
    [Symbol.toPrimitive](hint){
        return `<div>Stage ${this.stage}</div>`;
    }
};
Stage.maxStage = 20;

const Score = class{
    init(listener){this.listener = listener;}
    clear(){this.curr = this.total = 0;}
    add(line, stage){
        const score = parseInt((stage * 5) * (2 ** line));
        this.curr += score, this.total += score;
        this.listener();
    }
    [Symbol.toPrimitive](hint){
        return `<div>Score ${this.curr} / ${this.total}</div>`;
    }
};

