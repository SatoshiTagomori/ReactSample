const SelectCalender = (props) =>{

    //基本のスタイル設定
    //これらの内容はプロパティを与えていればそちらが優先される
    let calenderWidth = 300;
    let calenderPadding= 10;
    let calenderBorder='solid 2px darkblue';
    let calenderBgColor = 'lavender';
    let year = new Date().getFullYear();
    let month = new Date().getMonth()+1;
    let calenderDayBdColor = 'royalblue';
    let calenderDayBdWidth = 1;
    let numberColor='dimgray';
    //土日の背景色
    let suturdayBgColor ='cyan';
    let sundayBgColor='pink';
    let numberBgColor='transparent';
    //基本の文字サイズ
    let basicFontSize=20;

    //選択済みもしくはそうでない場合の色
    let selectedColor = 'pink';

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
        width: calenderWidth + 'px',
        display:'flex',
        flexWrap:'wrap',
        padding: calenderPadding+'px',
        border:  calenderBorder,
        borderRadius: '10px',
        backgroundColor: calenderBgColor
    }

    const days = (()=>{
        let lastDay = new Date(Number(year),Number(month),0).getDate();
        return [...Array(lastDay)].map((x,k)=>{return k+1}).map((y)=>{
            return <SelectDay 
                day={y} 
                year={year} 
                month={month} 
                weekday={new Date(Number(year),Number(month)-1,y).getDay()}
                isLastDay={ ( y === lastDay ) }
                firstWeekDay={(new Date(Number(year),Number(month)-1,1).getDay())}
                calenderDayBdColor={calenderDayBdColor}
                calenderDayBdWidth={calenderDayBdWidth}
                suturdayBgColor ={suturdayBgColor}
                sundayBgColor={sundayBgColor}
                basicFontSize={basicFontSize}
                numberColor={numberColor}
                numberBgColor={numberBgColor}
                selectedColor={selectedColor}
                data={(year+'-'+month+'-'+y)}
            />
        })
    })();

    const blankDays = (()=>{
        let firstWeekDay = new Date(Number(year),Number(month)-1,1).getDay();
        return [...Array(firstWeekDay)].map((x,k)=>{return k+1}).map((y)=>{
            return <SelectBlankDay
                calenderDayBdColor={calenderDayBdColor}
                calenderDayBdWidth={calenderDayBdWidth}
            />
        })
    })();

    const weekDayHeaders = (()=>{
        return [...Array(7)].map((x,k)=>{
            return <SelectWeekDayHeader
             index={k}
             basicFontSize={basicFontSize} 
            />
        });
    })();

    return(
        <div style={style}>
            <SelectCalenderHead year={year} month={month} basicFontSize={basicFontSize} calenderDayBdColor={calenderDayBdColor} />
            {weekDayHeaders}
            {blankDays}
            {days}
        </div>
    )
}

