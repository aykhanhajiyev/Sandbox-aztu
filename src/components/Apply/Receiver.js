
function Receiver(props) {
    const {imageUrl} = props;

    return (
        <li class="mb-3">
            <div class="d-flex justify-content-start align-items-center">
                <img src={imageUrl} alt="Avatar" class="rounded-circle me-3" width={50} height={50} style={{border: '0.5px solid #626979'}}/>
                <div>
                    <p class="m-0">{props.message}</p>
                </div>
            </div>
        </li>
    )
}

export default Receiver;