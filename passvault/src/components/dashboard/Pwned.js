import React from 'react'
import Pwnedcard from './Pwnedcard'

const Pwned = () => {
    const inputChange = () => {
        var inputText = document.getElementById("useremail").value;
        console.log(inputText);
    }
    return (
        <div className="col-sm bg-light p-4">
            <div className="container bg-white px-4 maindiv">
                <div className="sticky-top bg-white">
                    <h3 className="text-center fw-bold">Enter email for pwned passwords</h3>
                    <hr />
                    <input type="email" className="form-control form-control-sm" placeholder="Enter Email" id="useremail" onChange={inputChange} />
                    <br />
                </div>

                <Pwnedcard imageSrc="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" title="my title" content="my content" time="2020/10/16" />
                <Pwnedcard imageSrc="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" title="my title" content="my content" time="2020/10/16" />
                <Pwnedcard imageSrc="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" title="my title" content="my content" time="2020/10/16" />
                <Pwnedcard imageSrc="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" title="my title" content="my content" time="2020/10/16" />
                <Pwnedcard imageSrc="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" title="my title" content="my content" time="2020/10/16" />
                <Pwnedcard imageSrc="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" title="my title" content="my content" time="2020/10/16" />
                <Pwnedcard imageSrc="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" title="my title" content="my content" time="2020/10/16" />
                <Pwnedcard imageSrc="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" title="my title" content="my content" time="2020/10/16" />
                <Pwnedcard imageSrc="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" title="my title" content="my content" time="2020/10/16" />
                <Pwnedcard imageSrc="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" title="my title" content="my content" time="2020/10/16" />
                <Pwnedcard imageSrc="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" title="my title" content="my content" time="2020/10/16" />
                <Pwnedcard imageSrc="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" title="my title" content="my content" time="2020/10/16" />
                <Pwnedcard imageSrc="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" title="my title" content="my content" time="2020/10/16" />

            </div>

        </div>
    )
}

export default Pwned
