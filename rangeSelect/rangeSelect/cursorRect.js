const CursorRect = (props) =>{
    const ref = useRef(null);
    const [pointer,setPointer] = useRecoilState(Pointer);
    const [parentElementHeight,setParentElementHeight]= useState(0);
    const [parentElementTop,setParentElementTop]=useState(0);
    //選択したデータの一覧をリコイルで設定する
    const [selectData,setSelectData] = useRecoilState(SelectData);

    const style={
        width: '100%',
        height: parentElementHeight+'px',
        position:'absolute',
        left: '0',
        top: '0'
    }

    const dashedBoxStyle={
        position:'absolute',
        width: Math.abs(pointer.startX-pointer.cursorX)+'px',
        height: Math.abs(pointer.startY-pointer.cursorY)+'px',
        left: Math.min(pointer.startX,pointer.cursorX)+'px',
        border: (props.border ? props.border : 'dashed 2px gray'),
        top: Math.min(pointer.startY,pointer.cursorY)-parentElementTop+'px',
    }

    const expandArea = (e) =>{
        if(pointer.moving){
            setPointer({startX:pointer.startX,startY:pointer.startY,cursorX:e.pageX,cursorY:e.pageY,moving:true})
        }
    }

    const expandStart = (e) =>{
        setPointer({startX:e.pageX,startY:e.pageY,cursorX:e.pageX,cursorY:e.pageY,moving:true});
    }
    useEffect(()=>{
        //初期情報を入れる
        if(typeof getDefaultSelectData === 'function'){
            setSelectData(getDefaultSelectData());
        }
        setParentElementHeight(ref.current.parentElement.getBoundingClientRect().height);
        setParentElementTop(ref.current.parentElement.getBoundingClientRect().top);
        window.addEventListener('mouseup',()=>{
            //ポインターをリセットする
            setPointer({startX:0,startY:0,cursorX:0,cursorY:0,moving:false});
            //選択済みのものを配列に入れる
            setSelectData(Array.from(ref.current.parentElement.getElementsByClassName('rangeSelected')).map((el)=>{
                return el.dataset.data;
            }));
        },false);
    },[])

    useEffect(()=>{
        if(typeof selectDataDeal === 'function'){
            selectDataDeal(selectData);
        }
    })

    
    return(
        <div style={style} ref={ref} onMouseMove={expandArea} onMouseDown={expandStart}>
            <div style={dashedBoxStyle}>

            </div>
        </div>
    )
}

const cursorIsInBox = (pointer,box)=>{
    let boxLeft = box.getBoundingClientRect().left + window.scrollX;
    let boxTop = box.getBoundingClientRect().top + window.scrollY;
    let boxRight = boxLeft + box.getBoundingClientRect().width;
    let boxBottom = boxTop + box.getBoundingClientRect().height;
    return (
        (pointer.cursorX - boxLeft) * (pointer.cursorX - boxRight) < 0
        && (pointer.cursorY - boxTop) * (pointer.cursorY -boxBottom) < 0
    )
}

const pointIsInCursorRect = (pointer,left,top) =>{
    return (
        (pointer.startX - left) * (pointer.cursorX - left) < 0 
        && (pointer.startY - top) * (pointer.cursorY - top) < 0 
    )
}

const boxIsInCursorRect = (pointer,box)=>{
    let boxLeft = box.getBoundingClientRect().left + window.scrollX;
    let boxTop = box.getBoundingClientRect().top + window.scrollY;
    let boxRight = boxLeft + box.getBoundingClientRect().width;
    let boxBottom = boxTop + box.getBoundingClientRect().height;
    return (
        pointIsInCursorRect(pointer,boxLeft,boxTop)
        || pointIsInCursorRect(pointer,boxRight,boxTop)
        || pointIsInCursorRect(pointer,boxRight,boxBottom)
        || pointIsInCursorRect(pointer,boxLeft,boxBottom)
    )
}


const boxIsSelected = (pointer,box) =>{
    return boxIsInCursorRect(pointer,box) || cursorIsInBox(pointer,box)
}