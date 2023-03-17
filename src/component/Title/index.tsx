import './index.css'
const Title : React.FC = () =>{

    const title_header = (Math.random() + 1).toString(36).substring(10);
    const content = (Math.random() + 1).toString(36).substring(10)

    return <>
        <div className="title">
            <div className="titlt-header">
                <h5>
                    {title_header}
                </h5>
            </div>
            <div className="title-content">
                <p>
                    {content}
                </p>
            </div>
        </div>
    </>
}

export default Title