function Sender(props) {
    return (
        <li class="mb-3">
            <div class="d-flex justify-content-end align-items-center">
                <div>
                    <p class="m-0">{props.message}</p>
                </div>
                <img src="https://www.shareicon.net/data/2017/01/06/868320_people_512x512.png" alt="Avatar" class="rounded-circle ms-3" width={50} height={50} style={{border: '0.5px solid #626979'}}/>
            </div>
        </li>
    )
}

export default Sender;