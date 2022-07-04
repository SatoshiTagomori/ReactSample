const SecondSample = () =>{
    //選択の切り替えを行うコンポーネントは別に作る
    const style={
        width: '100%',
        padding: '50px',
        height: '400px',
        backgroundColor:'lavender',
        position:'relative'
    }
    const ulStyle={
        padding: '0',
        display:'flex',
        flexWrap:'wrap',
        gap: '30px'
    }
    const secondSelectComponents = [...Array(30)].map((x)=>{
        //selectedColorとnotSelectedColorのプロパティは必ずつける
        return <SecondSelectComponent selectedColor="cyan" notSelectedColor="limegreen" />
    })
    return(
        <div style={style}>
            <RecoilRoot>
                <CursorRect />
                {/* 選択するものは必ず<RecoilRoot>の中に書くこと */}
                <ul style={ulStyle}>
                    {secondSelectComponents}
                </ul>
            </RecoilRoot>
        </div>
    )
}
