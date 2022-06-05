import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Header } from "../../Home/Component/Screeheader";

import { TEXT } from "../../../Component/Text";
import { BUTTON } from "../../../Component/Button";

const Privacy = () => {
    const title = "This privacy policy sets out the basis on which FILL EASY LIMITED together with our subsidiaries, our holding company, subsidiaries of our holding company from time to time, collectively called “Fill Easy” or “we”) collect personal data from you and how we process your personal data in accordance with the Hong Kong Personal Data (Privacy) Ordinance. In this privacy policy, “personal data” means any data, regardless of its format, about an individual who can be identified from that data or from that data and other information to which an organisation has or is likely to have access. By visiting our website www.fill-easy.com (our “Site”) or using Fill Easy or any other applications or software we provide from time to time (collectively our “App”), you accept and consent to the practices set out below."
      const titel1 = "1.1 For the purposes outlined in Clause 2, we may collect and process the following information about you: (a) information that you provide us (which may include your name, identity number, address, email address, telephone number, credit card information, financial information and other personal data) by filling in forms on our Site or our App, or by corresponding with us (by phone, email or otherwise), for example; (i) when you register for an account with us on our Site and in our App; (ii) when you link or bind your account with us through any third-party app or website (iii) when you report any problem to us; (iv) when you use certain features on our Site or our App; or (v) when you complete any survey or questionnaire we send you. (b) Information we collect about you – information automatically collected when you visit our Site or use our App, for example: (i) technical information, including the Internet protocol (IP) address used to connect your computer to the Internet and your log-in information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform; (ii) information about your visit, including the full Uniform Resource Locators (URLs), clickstream to, through and from our site (including date and time), products you viewed or searched for, page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), methods used to browse away from the page, and any phone number used to call our customer service number; and (c) Information we receive from third parties – We work with third parties and we may receive information about you from them, for example, business partners, sub- contractors in technical, payment and delivery services, advertising networks, analytics providers, search information providers, or credit reference agencies. We will notify you when we receive information about you from them and the purposes for which we intend to use that information. 1.2 We do not archive any personal data about our users within our databases or with any third party vendors."
   const title3 = "3.1 We will keep your personal data we hold confidential but you agree we may provide information to: (a) any member of our group, which means our subsidiaries, our ultimate holding company and its subsidiaries (b) personnel, agents, advisers, auditors, contractors, financial institutions, and service providers in connection with our operations or services (for example staff engaged in the provision of support services); (c) our overseas offices, affiliates, business partners and counterparts (on a need-to-know basis only); (d)our partners (including licensed moneylenders and banks); (e) persons under a duty of confidentiality to us; (f) persons to whom we are required to make disclosure under applicable laws and regulations in or outside of Hong Kong; or (g) actual or proposed transferees of our operations (or a substantial part thereof) in or outside of Hong Kong. 3.2 We will reasonably endeavour to ensure that any third party who receives your personal data from us shall handle such personal data in accordance with applicable laws and regulations.3.1 We will keep your personal data we hold confidential but you agree we may provide information to: (a) any member of our group, which means our subsidiaries, our ultimate holding company and its subsidiaries (b) personnel, agents, advisers, auditors, contractors, financial institutions, and service providers in connection with our operations or services (for example staff engaged in the provision of support services); (c) our overseas offices, affiliates, business partners and counterparts (on a need-to-know basis only); (d)our partners (including licensed moneylenders and banks); (e) persons under a duty of confidentiality to us; (f) persons to whom we are required to make disclosure under applicable laws and regulations in or outside of Hong Kong; or (g) actual or proposed transferees of our operations (or a substantial part thereof) in or outside of Hong Kong. 3.2 We will reasonably endeavour to ensure that any third party who receives your personal data from us shall handle such personal data in accordance with applicable laws and regulations."
   const title4 = `4.1 Our Site uses cookies to distinguish you from other users of the Site. This helps us to provide you with a good experience when you browse our Site and also allows us to improve our Site. 4.2 A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree to the use of cookies. Cookies contain information that is transferred to your computer’s hard drive. 4.3 We use persistent cookies and session cookies. A persistent cookie stays in your browser and will be read by us when you return to our Site or a partner site that uses our services. Session cookies only last for as long as the session (usually the current visit to a website or a browser session). 4.4 We use the following cookies: (a) Strictly necessary cookies – These are cookies that are required for the operation of our Site. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services. (b) Analytical/performance cookies – They allow us to recognise and count the number of visitors and to see how visitors move around our Site when they are using it. This helps us to improve the way our Site works, for example, by ensuring that users are finding what they are < looking for easily. (c) Functionality cookies – These are used to recognise you when you return to our Site. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region). (d) Targeting cookies – These cookies record your visit to our Site, the pages you have visited and the links you have followed. We will use this information to make our Site and the information displayed on it more relevant to your interests. 4.5 You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you do so, you may not be able to access all or parts of our Site. 4.6 We may use third-party web services on our Site. The service providers that administer these services use technologies such as cookies (which are likely to be analytical/performance cookies or targeting cookies), web server logs and web beacons to help us analyse how visitors use our Site and make the information displayed on it more relevant to your interests. The information collected through these means (including IP addresses) is disclosed to these service providers. These analytics services may use the data collected to contextualise and personalise the marketing materials of their own advertising network.`
   const title5 = "5.1 Our Site, our App or our communication with you may from time to time contain links to third-party websites over which we have no control. If you follow a link to any of these websites, please note that they have their own practices and policies. We encourage you to read the privacy policies or statements of these websites understand your rights. We accept no responsibility or liability for any practices of third-party websites."
   const title6 = "6.1 All information you provide to us is stored on our secure servers. 6.2 We restrict access to personal information to our employees, service providers and contractors on a strictly need-to-know basis and ensure that those persons are subject to contractual confidentiality obligations. 6.3 We review our information collection, storage and processing practices from time to time to guard against unauthorised access, processing or use. 6.4 Please note, however, the transmission of information via the Internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our Site; any transmission is at your own risk."
    const title7 = "7.1 We will provide maintenance and technical support at our discretion. We are not obligated to provide you with any maintenance, technical or other support for the Fill Easy service. You agree to abide by any support rules and policies that we provide to you in order to receive such support."
   const title8 = "8.1 You expressly acknowledge and agree that, to the extent permitted by applicable law, all use of our Service is at your sole risk and that the entire risk as to satisfactory quality, performance accuracy and effort is with you. We are providing all information to your solely on an “as is” basis and without any warranty of any kind, whether express or implied, including without limitation. The implied warranties of merchantability, non-infringement, accuracy, completeness, performance and fitness for a particular purpose."
   return (
        <View style={{ flex: 1, alignItems: "center", width: "100%" , backgroundColor:"#FFFFFF" }}>
            <Header title3={"Privacy, Terms & Conditions"}
                    styleView={{paddingHorizontal : 25}} />
        {/* <Text style={{lineHeight}}></Text> */}
           <ScrollView style={{ padding: 25, width: "100%", marginTop: 20, }}>
                <TEXT
                    title={"Privacy, Terms & Conditions"}
                    size={27}
                    color={"rgba(0, 0, 0, 1)"}
                    family="Roboto-Black"
                    style={{}}
                />

                <TEXT
                    title={"PRIVACY POLICY"}
                    size={16}
                    color={"rgba(10, 10, 10, 1)"}
                    family="Roboto-Regular"
                    style={{ textDecorationLine: "underline", marginTop: 20 , lineHeight:21 }}
                />

                <TEXT
                    title={title}
                    size={14}
                    color={"rgba(10, 10, 10, 1)"}
                    family="Roboto-Regular"
                    style={{ marginTop: 20 ,lineHeight:19}}
                />

<TEXT
                    title={titel1}
                    size={14}
                    color={"rgba(10, 10, 10, 1)"}
                    family="Roboto-Regular"
                    style={{ marginTop: 20 ,lineHeight:19}}
                />

<TEXT
                    title={title3}
                    size={14}
                    color={"rgba(10, 10, 10, 1)"}
                    family="Roboto-Regular"
                    style={{ marginTop: 20 ,lineHeight:19}}
                />

<TEXT
                    title={title4}
                    size={14}
                    color={"rgba(10, 10, 10, 1)"}
                    family="Roboto-Regular"
                    style={{ marginTop: 20 ,lineHeight:19}}
                />

<TEXT
                    title={title5}
                    size={14}
                    color={"rgba(10, 10, 10, 1)"}
                    family="Roboto-Regular"
                    style={{ marginTop: 20 ,lineHeight:19}}
                />

<TEXT
                    title={title6}
                    size={14}
                    color={"rgba(10, 10, 10, 1)"}
                    family="Roboto-Regular"
                    style={{ marginTop: 20 ,lineHeight:19}}
                />

<TEXT
                    title={title7}
                    size={14}
                    color={"rgba(10, 10, 10, 1)"}
                    family="Roboto-Regular"
                    style={{ marginTop: 20,lineHeight:19 }}
                />

<TEXT
                    title={title8}
                    size={14}
                    color={"rgba(10, 10, 10, 1)"}
                    family="Roboto-Regular"
                    style={{ marginTop: 20,lineHeight:19 }}
                />
            </ScrollView>

        </View>
    );
}

export default Privacy