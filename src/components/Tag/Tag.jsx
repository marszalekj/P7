import './Tag.css';

const Tag = ({props}) => {
    return (
        <div className='tag'>
            {
                props.map((item, index) => {
                    return (<div key={index}>{item}</div>)
                })
            }
        </div>
    )
}
export default Tag;