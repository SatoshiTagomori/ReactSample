const Third = ()=>{
    const style={
        display:'flex',
        flexWrap:'wrap',
        gap:'20px'
    }
    return (
        <div style={style}>
            <Calender year={2000} month={1} />
            <Calender year={2001} month={12} />
            <Calender year={2030} month={7} />
        </div>
    )
}