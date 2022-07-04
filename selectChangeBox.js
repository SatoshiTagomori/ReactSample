const SelectChangeBox = () =>{
    const ref = useRef(null);
    const [pointer,setPointer] = useRecoilState(Pointer);
    const [selected,setSelected] = useState(false);
    const [changed,setChanged] = useState(false);
    const style={
        width: '50px',
        height: '50px',
        border:'solid 1px blue',
        backgroundColor: (selected ? 'red' : 'blue')
    }


    useEffect(()=>{
        window.addEventListener('mouseup',()=>{
            setChanged(false);
        },false);
    },[])

    useEffect(()=>{
        if(boxIsSelected(pointer,ref.current)){
            if(!changed){
                setSelected(!(selected));
                setChanged(true);
            }
        }
    })
    return (
        <div style={style} ref={ref}>
            a
        </div>
    )
}
