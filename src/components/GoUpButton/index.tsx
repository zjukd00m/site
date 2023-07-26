export default function GoUpButton() 
{
    const onButtonClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    
    return (
        <div className="go-up-button" onClick={onButtonClick}>
            <i className="fas fa-angle-up fa-xl"></i>
        </div>
    )
}