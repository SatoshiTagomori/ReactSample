//内容としてはほとんどsecond.jsと同じ
const ThirdSample = () =>{

    //選択の切り替えを行うコンポーネントは別に作る
    const style={
        width: '100%',
        padding: '50px',
        backgroundColor:'lavender',
        position:'relative'
    }
    const ulStyle={
        padding: '0',
        display:'flex',
        flexWrap:'wrap',
        gap: '30px'
    }
    const thirdSelectComponents = [...Array(30)].map((x,key)=>{
        //selectedColorとnotSelectedColorのプロパティは必ずつける
        //コンソール出力するdataと表示する内容のdisplayDataを記載する
        return <ThirdSelectComponent 
            selectedColor="pink"
            notSelectedColor="lightgray" 
            data={('data_' + key)}
            displayData={key}
         />
    })


    return(
        <div style={style}>
            <RecoilRoot>
                <CursorRect />
                {/* 選択するものは必ず<RecoilRoot>の中に書くこと */}
                <ul style={ulStyle}>
                    {thirdSelectComponents}
                </ul>
            </RecoilRoot>
        </div>
    )
}


//マウスアップした時に実行する関数・この名前で固定
const selectDataDeal = (data) =>{
    //ここは状況に合わせて変更する
    console.log(data);
}

//初期データを入れるための関数・この名前で固定
const getDefaultSelectData = () =>{
    return ['data_1','data_16'];
}
