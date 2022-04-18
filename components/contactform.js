import { useState } from "react";

export default function ContactForm() {
    const [buttonLabel, setButtonLabel] = useState('Nachricht senden')
    const [status, setStatus] = useState('ready')

    const messageSVG = <svg className="stroke-current h-5 w-5 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    const checkSVG = <svg className="stroke-current h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>

    const sendMail = async event => {
        event.preventDefault()

        setButtonLabel("Nachricht wird versendet..")
        setStatus('sending')

        const response = await fetch (
            'https://49m5bbvzb0.execute-api.eu-central-1.amazonaws.com/default/mail',
            {
                body: JSON.stringify({
                    domain: 'dirkpreussner.de',
                    email: event.target.email.value,
                    subject: event.target.name.value + ' sent you a message on dirkpreussner.de',
                    message: event.target.message.value
                }),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )

        const result = await response.json()

        if(result.status == 'success') {
            setStatus('sent')
            setButtonLabel("Vielen Dank für Ihre Nachricht!")
            setTimeout(() => {
                event.target.reset()
                setButtonLabel("Nachricht senden")
                setStatus('ready')
            }, 3000)
        } 
    }

    return (
        <form onSubmit={sendMail} className="mt-4 space-x-2 space-y-2">
          <div className='grid gap-y-1 gap-x-2 lg:grid-cols-2'>
            <div>
              <label htmlFor="fname" className="sr-only">Ihr Name</label>
              <input id="name" name="name" type="text" required className='w-full px-3 py-2 rounded border focus:outline-none focus:ring-burgund-500 focus:border-burgund-500' placeholder="Ihr Name"></input>
              <label htmlFor="email" className="sr-only">Ihre E-Mailadresse</label>
              <input id="email" name="email" type="email" required className='w-full mt-2 px-3 py-2 rounded border focus:outline-none focus:ring-burgund-500 focus:border-burgund-500' placeholder="Ihre E-Mailadresse"></input>
            </div>
            <div className="lg:row-span-2">
              <label htmlFor="message" className="sr-only">Ihre Nachricht an mich</label>
              <textarea id="message" name="message" rows="5" className="w-full px-3 py-2 rounded border focus:outline-none focus:ring-burgund-500 focus:border-burgund-500" placeholder="Ihre Nachricht an mich"></textarea>
            </div>
            <div className="mt-2 lg:col-span-2">
              <button disabled={status != 'ready'} className={`w-full justify-center text-white font-normal py-2 px-6 lg:px-8 xl:py-3 rounded shadow inline-flex items-center ${status != 'sent' ? "bg-burgund-600 hover:bg-burgund-700 disabled:cursor-wait disabled:bg-burgund-700" : "bg-green-600 cursor-not-allowed"}`}>
                {status == 'sent' ? checkSVG : messageSVG}
                {buttonLabel}
              </button>
            </div>
          </div>
        </form>
    )

}