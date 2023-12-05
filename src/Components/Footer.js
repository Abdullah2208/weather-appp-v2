import '../App.css'


function Footer() {
    const companyArray = ['Proven Superior Accuracy', 'About AccuWeather', 'Digital Advertising', 'Careers', 'Press', 'Contact Us'];
    const servicesArray = ['For Business', 'For Partners', 'For advertising', 'AccuWeather APIs', 'AccuWeather Connect', 'RealFeel® and RealFeel Shade™']
    const appsArray = ['iPhone App', 'Android App']
    const subscriptionsArray = ['AccuWeather Premium', 'AccuWeather Professional'] 
    const moreArray = ['AccuWeather Ready', 'Business', 'Weather News', 'Space & Astronomy']

    const companyList = companyArray.map((item, index) => {
        return <li key={index}>{item}</li>
    })
    const serviceList = servicesArray.map((item, index) => {
        return <li key={index}>{item}</li>
    })
    const appList = appsArray.map((item, index) => {
        return <li key={index}>{item}</li>
    })
    const subscriptionList = subscriptionsArray.map((item, index) => {
        return <li key={index}>{item}</li>
    })
    const moreList = moreArray.map((item, index) => {
        return <li key={index}>{item}</li>
   })

    return (
        <div className='footer-main-box'>
            <div className='footer-top-box'>
                <div className='footer-top-box-content-div'>
                    <h4>COMPANY</h4>
                    <ul>{companyList}</ul>
                </div>
                <div className='footer-top-box-content-div'>
                    <h4>PRODUCTS & SERVICES</h4>
                    <ul>{serviceList}</ul>
                </div>
                <div className='footer-top-box-content-div'>
                    <div>
                        <h4>APPS & DOWNLOADS</h4>
                        <ul>{appList}</ul>
                    </div>
                    <div>
                        <h4>SUBSCRIPTION SERVICES</h4>
                        <ul>{subscriptionList}</ul>
                    </div>
                </div>
                <div className='footer-top-box-content-div'>
                    <h4>MORE</h4>
                    <ul>{moreList}</ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;