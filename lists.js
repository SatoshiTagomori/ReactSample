const fixes = [['terms-','-term'],['subjects-','-subject']];



const MovalList = (props) =>{
    const [movalListData,setMovalListData] = useRecoilState(MovalListData);
    const [selected,setSelected] = useState(false);
    // const [parentTop,setParentTop] = useState(0);
    const [cursorY,setCursorY] = useState(0);
    const [top,setTop] = useState(0);

    const ref = useRef(null);
    const liStyle={
        listStyleType:'none',
        display:'flex',
        padding: '10px',
        margin: '10px',
        width: '100%',
        backgroundColor:'aliceblue',
        position: 'relative',
        top: (selected ? cursorY - top : '0' ) + 'px',
        zIndex: (selected ? 1 : 0),
    }
    const iStyle={
        fontSize:'24px'
    }
    const inputs = movalListData[props.number].map((x,index)=>{
        return <input type='text' value={x} className='form-control' name={fixes[index][0]+props.number+fixes[index][1]} />
    })

    const grip = (e) =>{
        setTop(ref.current.getBoundingClientRect().top + ref.current.getBoundingClientRect().height/2 + window.scrollY);
        setSelected(true);
    }

    

    useEffect(()=>{
        window.addEventListener('mouseup',(e)=>{
            setSelected(false);
            setCursorY(0);
            let tmp_obj = {}
            for(let li of Array.from(document.getElementsByClassName('movalList'))){
                tmp_obj[li.getBoundingClientRect().top] = Array.from(li.getElementsByTagName('input')).map((x)=>{return x.value})
            }
            let tmp_array = [];
            Object.keys(tmp_obj).forEach((key)=>{
                tmp_array.push(tmp_obj[key]);
            })
            setMovalListData(tmp_array);
            console.log(tmp_array);
        },false);

        window.addEventListener('mousemove',(e)=>{
            setCursorY(e.pageY);
        },false);
    },[])


    useEffect(()=>{
        // console.log(ref.current.getBoundingClientRect().top)
    })

    

    return (
        <li className='movalList' style={liStyle} ref={ref}>
            <i style={iStyle} class="bi bi-arrows-move" onMouseDown={grip}></i>
            {inputs}
        </li>
    )
}


const MovalUnorderedList=()=>{
    const [movalListData,setMovalListData] = useRecoilState(MovalListData);

    const ulStyle={
        padding:'0',
        position:'relative',
        padding: '50px'
    }

    const lists = movalListData.map((data,index)=>{
        return <MovalList number={index} />
    })

    const addLastData = (ary) =>{
        let array = [...ary].map((x)=>{return x});
        let arrayLength = array[array.length-1].length;
        if(array[array.length-1].join('').length>0){
            array.push([...Array(arrayLength)].map((x)=>{return ''}));
            setMovalListData(array);
        }
    }

    useEffect(()=>{
        addLastData(movalListData);
    })

    return (
        <ul style={ulStyle}>
            {lists}
        </ul>
    )
}

const MovalListArea = () =>{
    
    return (
        <div>
            <RecoilRoot>
            <MovalUnorderedList />
            </RecoilRoot>
        </div>
    )
}

ReactDOM.render(<MovalListArea /> ,document.getElementById('movalList'));