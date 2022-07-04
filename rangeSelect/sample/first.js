// 一番大元となるコンポーネント。
// 大元の要素のstyleにはposition:relativeを設定しておくこと。
// あとはなんでも良い。
// また、一番大元の要素の直下に<RecoilRoot>を作成し、その直下に<CursorRect />を必ず記載する

const FirstSample = () =>{
    const style={
        width: '100%',
        padding: '50px',
        height: '400px',
        backgroundColor:'pink',
        position:'relative'
    }
    return(
        <div style={style}>
            <RecoilRoot>
                <CursorRect />
            </RecoilRoot>
        </div>
    )
}
