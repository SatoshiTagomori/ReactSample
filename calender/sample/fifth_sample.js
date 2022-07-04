const Fifth = ()=>{
    const style={
        display:'flex',
        flexWrap:'wrap',
        gap:'20px',
        justifyContent:'center',
        //これが非常に重要。これないと動かない
        position:'relative'
    }
    const wrapperStyle ={
        padding: '30px'
    }

    //selectedColorとnotSelectedColorのプロパティは必ずつける
    //コンソール出力するdataと表示する内容のdisplayDataを記載する
    return (
        <div style={wrapperStyle}>
            <RecoilRoot>
                <MonthSelect />
                <div style={style}>
                    <CursorRect />
                    <SelectCalender
                    selectedColor='red'
                    year={2000}
                    month={1}
                    />
                    <SelectCalender
                    selectedColor='red'
                    year={2001}
                    month={12}
                    />
                    <SelectCalender
                    selectedColor='red'
                    year={2030}
                    month={11}
                    />
                </div>
            </RecoilRoot>
        </div>
    )
}

//マウスアップした時に実行する関数・この名前で固定
const selectDataDeal = (data) =>{
    //ここは状況に合わせて変更する
    // console.log(data);
}

//初期データを入れるための関数・この名前で固定
const getDefaultSelectData = () =>{
    return ['2000-1-1','2000-1-2','2000-1-3'];
}