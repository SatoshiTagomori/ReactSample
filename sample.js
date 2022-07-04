const SelectBox = () =>{
    const style={
        width: '100%',
        padding: '50px',
        height: '400px',
        backgroundColor:'pink',
        position:'relative'
    }
    const divstyle={
        display:'flex',
        flexWrap:'wrap'
    }
    return(
        <div style={style}>
            <RecoilRoot>
                <CursorRect />
                <div style={divstyle}>
                    <SelectChangeBox />
                    <SelectChangeBox />
                    <SelectChangeBox />
                    <SelectChangeBox />
                    <SelectChangeBox />
                    <SelectChangeBox />
                    <SelectChangeBox />
                    <SelectChangeBox />
                    <SelectChangeBox />
                    <SelectChangeBox />
                    <SelectChangeBox />
                    <SelectChangeBox />
                    <SelectChangeBox />
                    <SelectChangeBox />
                    <SelectChangeBox />
                    <SelectChangeBox />
                    <SelectChangeBox />
                    <SelectChangeBox />
                    <SelectChangeBox />
                </div>
            </RecoilRoot>
            <h1>hello</h1>
        </div>
    )
}




ReactDOM.render(<SelectBox />,document.getElementById('abc'));