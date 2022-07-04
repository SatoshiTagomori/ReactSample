const MonthSelect=()=>{
    const [selectedMonths,setSelectedMonths] = useRecoilState(SelectedMonths);
    const monthAmount=40;
    const buttonWidth=120;
    const wrapperStyle={
        width: '100%',
        display:'flex'
    }
    const innerStyle={
        overflow:'hidden',
        position:'relative'
    }
    const ulStyle={
        display:'flex',
        padding: '0',
        width: buttonWidth*monthAmount + 'px',
        alignItems:'center',
        margin:'0'
    }
    const liStyle={
        listStyleType:'none',
        width: buttonWidth+'px',
        border:'solid 2px blue',
        padding: '10px 0',
        textAlign:'center'
    }

    const selectThisMonth = (e) =>{
        
    }

    const lis = [...Array(monthAmount)].map((x,k)=>{
        let yearNow = new Date().getFullYear();
        let monthOffset = new Date().getMonth() + k - Math.round(monthAmount/2);
        let year = new Date(yearNow,monthOffset,1).getFullYear();
        let month = new Date(yearNow,monthOffset,1).getMonth()+1;
        return (
            <li style={liStyle} data-yearmonth={(year + '-' + month)} onClick={selectThisMonth}>{year}年{month}月</li>
        )
    })

    return(
        <div style={wrapperStyle}>
            <button className='btn btn-primary'><i class="bi bi-caret-left-fill"></i></button>
            <div style={innerStyle}>
                <ul style={ulStyle}>
                    {lis}
                </ul>
            </div>
            <button className='btn btn-primary'><i class="bi bi-caret-right-fill"></i></button>
        </div>
    )
}