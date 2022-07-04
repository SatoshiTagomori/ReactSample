const SecondSelectComponent = (props) =>{
    //この４行は必須
    const ref = useRef(null);
    const [pointer,setPointer] = useRecoilState(Pointer);
    const [selected,setSelected] = useState(false);
    const [changed,setChanged] = useState(false);

    //styleは基本自由だが、背景色だけはこの通りに書く
    const style={
        width: '50px',
        height: '50px',
        border:'solid 1px blue',
        //選択済みかどうかで色を変えるため、この１行は必須
        backgroundColor: (selected ? props.selectedColor : props.notSelectedColor )
    }

    //このuseEffectの２項目は必須
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
