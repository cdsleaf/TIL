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
    _speed(){this.speed = 500 - 450 * this.stage / Stage.maxStage;}
    _count(){this.count = 10 + 3 * this.stage;}
    next(){
        if(this.Stage++ < Stage.maxStage){
            this._speed(); 
            this._count();
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
        return `<div>Score ${this.curr}, ${this.total}</div>`;
    }
};

const Block =(_=>{
    const s =v=>v.split(',').map(v=>v.split('|').map(v=>v.split('')));
    const c =(c,b)=>class extends Block{constructor(){super(c, b);}};
    const Block = class{
        static block(){
            return new (this.blocks[parseInt(Math.random() * this.blocks.length)]);
        }
        constructor(color, blocks){
            Object.assign(this, {color, blocks, rotate:0});
        }
        left(){if(--this.rotate < 0) this.rotate = 3;}
        right(){if(++this.rotate > 3) this.rotate = 0;}
        getBlock(){return this.blocks[this.rotate];}
    };
})
const blocks = [
    class extends Block{
        constructor(){super('#f8cbad',
            [[1],[1],[1],[1]],
            [[1,1,1,1]],
            [[1],[1],[1],[1]],
            [[1,1,1,1]]
        );}
    }

];  

//범용 렌더링 처리기
const Renderer = class{
    constructor(col, row, base, back){
        Object.assign(this, {col, row, base, back, blocks:[]});
    }
    clear(){throw 'override';}
    render(data){
        if(!(data instanceof Data)) throw 'invalid data';
        this._render(data);
    }
    _render(data){throw 'override';}
};

//게임<->렌더링 간 프로토콜
const Data = class extends Array{
    constructor(row, col){
        super(); 
        Object.assign(this, {row, col});
    }
    cell(row, col, color){
        if(row > this.row || col > this.col) throw 'invalid!';
        (this[row] || (this[row] = []))[col] = color;
    }
    row(row, ...color){
        color.forEach((v, i)=>this.cell(row, i, v));
    }
    all(...rows){
        rows.forEach((v, i)=>this.row(i, ...v));
    }
};

const el = el=>document.createElement(el);
const back = (s, v)=>{s.backgroundColor = v;};
const TableRenderer = class extends Renderer{
    constructor(col, row, back, style){
        super(col, row, el('table'), back);
        const {base, blocks} = this; //추상화와 구상화 간의 긴밀한 통신 매우 중요하다.
        base.style.cssText = style;
        let i= row;
        while(i--){
            const tr = base.appendChild(el('tr'));
            const curr = [];
            let j = col;
            blocks.push(curr);
            while(j--) curr.push(tr.appendChild(el('td')).style);
        }
    }
    clear(){
        this.blocks.forEach(curr=>curr.forEach(s=>back(s, this.back)));
    }
    _render(v){
        this.blocks.forEach((curr, i)=>curr.forEach((s,j)=>back(s, v[i][j])));
    }
};

const CanvasRenderer = class extends Renderer{
    constructor(col, row, back, style){
        super(col, row, el('canvas'));
        const {col, base, blocks} = this;
        base.style.cssText = style;
        Object.assign(this, {
            width:base.width = parseInt(base.style.width),
            height:base.height = parseInt(vase.style.height),
            cellSize:[bas.width/col, base.height/row],
            ctx:base.getContext('2d')
        });
    }
    clear(){
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
    _render(v){
        this.clear();
        const {col, ctx, cellSize:[w, h]} = this;
        let {row:i} = this;
        while(i--){
            let j = col;
            while(j--){
                ctx.fillStyle = v[i][j];
                ctx.fillRect(j * w, i * h, w, h);
            }
        }
    } 
}