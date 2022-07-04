//日付が入る部分
const Day = (props) =>{
    //これらの設定はプロパティを与えていれば上書きされる
    //カレンダーの枠線の設定
    let calenderDayBdColor = '';
    let calenderDayBdWidth = 0;
    //土日の背景色
    let suturdayBgColor ='';
    let sundayBgColor='';
    let numberBgColor='';
    //基本の文字サイズ
    let basicFontSize=0;
    let numberColor=''
    //プロパティから変数を取得して上書き
    Object.keys(props).forEach((index)=>{
        //文字列の場合とそうでない場合でダブルクォーテーションの有無を切り分ける
        let delimiter = typeof props[index] === 'string' ? '"' : '';
        //未定義の変数でなければ上書きする
        if(eval('typeof '+index) !== 'undefined'){
            eval(index + '='+delimiter + props[index]+delimiter+';');
        }
    })
    //以下、カレンダーをきれいに表示するための細かなスタイルの設定
    const bgColor = (() =>{
        if(props.weekday === 0) {
            return sundayBgColor;
        }else if(props.weekday === 6){
            return suturdayBgColor;
        }else{
            return numberBgColor;
        }
    })();
    const bdRight = (()=>{
        if(props.weekday === 6 || props.isLastDay === true){
            return 'solid '+calenderDayBdWidth+'px '+calenderDayBdColor;
        }else{
            return 'none';
        }
    })();
    const bdTop = (()=>{
        if(props.day <= 7 - props.firstWeekDay){
            return 'solid '+calenderDayBdWidth+'px '+calenderDayBdColor;
        }else{
            return 'none';
        }
    })();
    const dayWidth = (()=>{
        if(props.isLastDay === true && props.weekday !== 6){
            //最後の１日だけ幅を広くする必要がある
            return 'calc( ( 100% / 7 ) + '+calenderDayBdWidth+'px )'
        }else{
            return 'calc( 100% / 7 )';
        }
    })();
    const style={
        width: dayWidth,
        textAlign:'center',
        borderLeft:'solid '+calenderDayBdWidth+'px '+calenderDayBdColor,
        borderBottom: 'solid '+calenderDayBdWidth+'px '+calenderDayBdColor,
        borderTop: bdTop,
        borderRight: bdRight,
        backgroundColor: bgColor,
        fontSize: basicFontSize+'px',
        color: numberColor
    }
    return(
        <div style={style}>
            {props.day}
        </div>
    )
}


//空の日付が入る部分
const BlankDay = (props) =>{
    //これらの設定はプロパティを与えていれば上書きされる
    //カレンダーの枠線の設定
    let calenderDayBdColor = '';
    let calenderDayBdWidth = 0;

    //プロパティから変数を取得して上書き
    Object.keys(props).forEach((index)=>{
        //文字列の場合とそうでない場合でダブルクォーテーションの有無を切り分ける
        let delimiter = typeof props[index] === 'string' ? '"' : '';
        //未定義の変数でなければ上書きする
        if(eval('typeof '+index) !== 'undefined'){
            eval(index + '='+delimiter + props[index]+delimiter+';');
        }
    })
    const style={
        width: 'calc( 100% / 7 )',
        textAlign:'center',
        borderBottom: 'solid '+calenderDayBdWidth+'px '+calenderDayBdColor,
        boxSizing:'borderBox'
    }
    return(
        <div style={style}>
            
        </div>
    )
}

//曜日の表示部分
const WeekDayHeader = (props)=>{
    //これらの設定はプロパティを与えていれば上書きされる
    //カレンダーの枠線の設定
    let calenderDayBdColor = '';
    let calenderDayBdWidth = 0;
    //基本の文字サイズ
    let basicFontSize=0;
    //プロパティから変数を取得して上書き
    Object.keys(props).forEach((index)=>{
        //文字列の場合とそうでない場合でダブルクォーテーションの有無を切り分ける
        let delimiter = typeof props[index] === 'string' ? '"' : '';
        //未定義の変数でなければ上書きする
        if(eval('typeof '+index) !== 'undefined'){
            eval(index + '='+delimiter + props[index]+delimiter+';');
        }
    })

    const style={
        width: 'calc( 100% / 7 )',
        textAlign:'center',
        boxSizing:'borderBox',
        fontSize: basicFontSize/1.4 + 'px',
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
    const weekDayArray = ['日','月','火','水','木','金','土'];
    return(
        <div style={style}>
            {weekDayArray[props.index]}
        </div>
    )
}

//タイトルの表示部分
const CalenderHead = (props) =>{
    //これらの設定はプロパティを与えていれば上書きされる
    //カレンダーの枠線の設定
    let calenderDayBdColor = '';
    let calenderDayBdWidth = 0;
    //基本の文字サイズ
    let basicFontSize=0;
    //プロパティから変数を取得して上書き
    Object.keys(props).forEach((index)=>{
        //文字列の場合とそうでない場合でダブルクォーテーションの有無を切り分ける
        let delimiter = typeof props[index] === 'string' ? '"' : '';
        //未定義の変数でなければ上書きする
        if(eval('typeof '+index) !== 'undefined'){
            eval(index + '='+delimiter + props[index]+delimiter+';');
        }
    })

    const style={
        width: '100%',
        textAlign:'center',
        fontSize: basicFontSize * 1.1 + 'px',
        fontWeight: 'bold'
    }
    const smallStyle={
        fontSize: basicFontSize * 0.7 + 'px'
    }
    const spanStyle={
        borderBottom: 'solid 2px '+calenderDayBdColor,
        display:'inline-block',
        padding: '5px 20px',
        letterSpacing: '10px'
    }
    return (
        <h4 style={style}>
            <span style={spanStyle}>
                {props.year}<span style={smallStyle}>年</span>{props.month}<span style={smallStyle}>月</span>
            </span>
        </h4>
    )
}