const ThirdSelectComponent = (props) =>{
    //以下４行は必須
    const ref = useRef(null);
    const [pointer,setPointer] = useRecoilState(Pointer);
    const [selected,setSelected] = useState(false);
    const [changed,setChanged] = useState(false);


    //styleは基本自由だが、背景色だけはこの通りに書く
    const style={
        width: '65px',
        height: '50px',
        border:'solid 1px blue',
        //選択済みかどうかで色を変えるため、この１行は必須
        backgroundColor: (selected ? props.selectedColor : props.notSelectedColor )
    }

    //このuseEffectの２項目は必須
    useEffect(()=>{
        if(getDefaultSelectData().includes(props.data)){
            setSelected(true);
        }
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
    //クラス名とdatasetを追記する
    return (
        <div style={style} ref={ref} className={(selected ? 'rangeSelected':'')} data-data={props.data}>
            {props.displayData}
        </div>
    )
}
