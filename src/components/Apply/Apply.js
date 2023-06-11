import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";


import Receiver from "./Receiver";
import Sender from "./Sender";
import banks from '../../static/banks.json'
function Apply() {

    const location = useLocation()

    const selectedBankId = location.pathname.split('/')[2]

    const selectedBank = banks.find(element => element.id == selectedBankId)

    const [senderMessage, setSenderMessage] = useState("")

    const [state, setState] = useState({
        components: [<Receiver message="Salam, sizə necə kömək edə bilərəm?" imageUrl={selectedBank.imageUrl} />]
    })

    const [loadingState, setLoadingState] = useState(false);

    const handleChange = event => {
        setSenderMessage(event.target.value)
    }

    async function addSenderWithMessage() {
        const input = senderMessage
        setSenderMessage("")

        setState({
            components: [...state.components, <Sender message={input} />]
        })

        const systemMessageDefault = selectedBank.name + " Azərbaycan haqqında araşdırma et və yadda saxla"
        setLoadingState(true)
        try {
            const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: "gpt-3.5-turbo",
                messages: [
                    { "role": "system", "content": systemMessageDefault },
                    { "role": "user", "content": input }
                ],
                max_tokens: 500,
                temperature: 0.7,
                n: 1,
                stop: '\n',
            }, {
                headers: {
                    'Authorization': 'Bearer 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',
                    'Content-Type': 'application/json',
                },
            });

            const responseText = response.data.choices[0].message.content

            setState({
                components: [...state.components, [<Sender message={input} />, <Receiver message={responseText} imageUrl={selectedBank.imageUrl} />]]
            })
            setLoadingState(false)

        } catch (error) {
            console.error(error);
            setState({
                components: [...state.components, <Receiver message={"Üzr istəyirik, hal hazırda xəta baş verdi. Zəhmət olmasa yenidən yoxlayın."}/>]
            })
            setLoadingState(false)
        }
    }


    const removeComponents = () => {
        setState({
            components: [<Receiver message="Salam, sizə necə kömək edə bilərəm?" imageUrl={selectedBank.imageUrl} />]
        })
    }

    return (
        <section class="wrapper bg-soft-primary">
            <figure> <img src="~/assets/img/photos/clouds.png" alt="" /></figure>
            <div class="container">
                <div class="container ">
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <div class="card">
                                <div style={{ display: "flex", justifyContent: 'space-around' }}>
                                    <a href="/dashboard" className="btn btn-link float-left"> &#x2190; Banklar siyahısı</a>
                                    <div class="card-header">
                                        {selectedBank.name} ilə Çat
                                    </div>
                                    <a class="btn btn-link text-danger" onClick={removeComponents}> &#128465; Təmizlə</a>
                                </div>


                                {/* Receiver and sender components */}
                                <div class="card-body" id="message-list">
                                    <ul class="list-unstyled">
                                        {state.components.map((component) => (component))}
                                    </ul>
                                </div>
                                {/* Spinner */}
                                {
                                    loadingState ? <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <ThreeDots
                                        height="80"
                                        width="80"
                                        radius="9"
                                        color="#605dba"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClassName=""
                                        visible={true}
                                    />
                                    </div> : <></>
                                }
                                <div class="card-footer">
                                    <form onsubmit="sendMessage(); return false;">
                                        <div class="input-group">
                                            <input type="text" className="form-control" placeholder="Sualınızı bura yazın" id="message-input" onChange={handleChange} value={senderMessage} />
                                            <a className="btn btn-primary" onClick={addSenderWithMessage}>Göndər</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Apply;