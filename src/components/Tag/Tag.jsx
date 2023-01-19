
const Tag = ({props}) => {
    return (
        <div className='tags'>
            {
                props.map((item, index) => {
                    return (<div className="tag" key={index}>{item}</div>)
                })
            }
        </div>
    )
}
export default Tag;