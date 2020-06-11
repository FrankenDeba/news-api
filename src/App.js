import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar.js";
import Content from "./Components/Content/Content.js";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      data:[]
    };
    var countries = {
      'afghanistan' : 'AF',
      'aland Islands' : 'AX',
      'albania' : 'AL',
      'algeria' : 'DZ',
      'American Samoa' : 'AS',
      'andorra' : 'AD',
      'angola' : 'AO',
      'anguilla' : 'AI',
      'antarctica' : 'AQ',
      'antigua And barbuda' : 'AG',
      'argentina' : 'AR',
      'armenia' : 'AM',
      'aruba' : 'AW',
      'australia' : 'AU',
      'austria' : 'AT',
      'azerbaijan' : 'AZ',
      'bahamas' : 'BS',
      'bahrain' : 'BH',
      'bangladesh' : 'BD',
      'barbados' : 'BB',
      'belarus' : 'BY',
      'belgium' : 'BE',
      'belize' : 'BZ',
      'benin' : 'BJ',
      'bermuda' : 'BM',
      'bhutan' : 'BT',
      'bolivia' : 'BO',
      'bosnia And herzegovina' : 'BA',
      'botswana' : 'BW',
      'bouvet island' : 'BV',
      'brazil' : 'BR',
      'british indian ocean territory' : 'IO',
      'brunei darussalam' : 'BN',
      'bulgaria' : 'BG',
      'burkina baso' : 'BF',
      'Burundi' : 'BI',
      'Cambodia' : 'KH',
      'Cameroon' : 'CM',
      'Canada' : 'CA',
      'Cape Verde' : 'CV',
      'Cayman Islands' : 'KY',
      'Central African Republic' : 'CF',
      'Chad' : 'TD',
      'Chile' : 'CL',
      'China' : 'CN',
      'Christmas Island' : 'CX',
      'Cocos (Keeling) Islands' : 'CC',
      'Colombia' : 'CO',
      'Comoros' : 'KM',
      'Congo' : 'CG',
      'Congo, Democratic Republic' : 'CD',
      'Cook Islands' : 'CK',
      'Costa Rica' : 'CR',
      'Cote D\'Ivoire' : 'CI',
      'Croatia' : 'HR',
      'Cuba' : 'CU',
      'Cyprus' : 'CY',
      'Czech Republic' : 'CZ',
      'Denmark' : 'DK',
      'Djibouti' : 'DJ',
      'Dominica' : 'DM',
      'Dominican Republic' : 'DO',
      'Ecuador' : 'EC',
      'Egypt' : 'EG',
      'El Salvador' : 'SV',
      'Equatorial Guinea' : 'GQ',
      'Eritrea' : 'ER',
      'Estonia' : 'EE',
      'Ethiopia' : 'ET',
      'Falkland Islands (Malvinas)' : 'FK',
      'Faroe Islands' : 'FO',
      'Fiji' : 'FJ',
      'Finland' : 'FI',
      'France' : 'FR',
      'French Guiana' : 'GF',
      'French Polynesia' : 'PF',
      'French Southern Territories' : 'TF',
      'Gabon' : 'GA',
      'Gambia' : 'GM',
      'Georgia' : 'GE',
      'Germany' : 'DE',
      'Ghana' : 'GH',
      'Gibraltar' : 'GI',
      'Greece' : 'GR',
      'Greenland' : 'GL',
      'Grenada' : 'GD',
      'Guadeloupe' : 'GP',
      'Guam' : 'GU',
      'Guatemala' : 'GT',
      'Guernsey' : 'GG',
      'Guinea' : 'GN',
      'Guinea-Bissau' : 'GW',
      'Guyana' : 'GY',
      'Haiti' : 'HT',
      'Heard Island & Mcdonald Islands' : 'HM',
      'Holy See (Vatican City State)' : 'VA',
      'Honduras' : 'HN',
      'Hong Kong' : 'HK',
      'Hungary' : 'HU',
      'Iceland' : 'IS',
      'India' : 'IN',
      'Indonesia' : 'ID',
      'Iran, Islamic Republic Of' : 'IR',
      'Iraq' : 'IQ',
      'Ireland' : 'IE',
      'Isle Of Man' : 'IM',
      'Israel' : 'IL',
      'Italy' : 'IT',
      'Jamaica' : 'JM',
      'Japan' : 'JP',
      'Jersey' : 'JE',
      'Jordan' : 'JO',
      'Kazakhstan' : 'KZ',
      'Kenya' : 'KE',
      'Kiribati' : 'KI',
      'Korea' : 'KR',
      'Kuwait' : 'KW',
      'Kyrgyzstan' : 'KG',
      'Lao People\'s Democratic Republic' : 'LA',
      'Latvia' : 'LV',
      'Lebanon' : 'LB',
      'Lesotho' : 'LS',
      'Liberia' : 'LR',
      'Libyan Arab Jamahiriya' : 'LY',
      'Liechtenstein' : 'LI',
      'Lithuania' : 'LT',
      'Luxembourg' : 'LU',
      'Macao' : 'MO',
      'Macedonia' : 'MK',
      'Madagascar' : 'MG',
      'Malawi' : 'MW',
      'Malaysia' : 'MY',
      'Maldives' : 'MV',
      'Mali' : 'ML',
      'Malta' : 'MT',
      'Marshall Islands' : 'MH',
      'Martinique' : 'MQ',
      'Mauritania' : 'MR',
      'Mauritius' : 'MU',
      'Mayotte' : 'YT',
      'Mexico' : 'MX',
      'Micronesia, Federated States Of' : 'FM',
      'Moldova' : 'MD',
      'Monaco' : 'MC',
      'Mongolia' : 'MN',
      'Montenegro' : 'ME',
      'Montserrat' : 'MS',
      'Morocco' : 'MA',
      'Mozambique' : 'MZ',
      'Myanmar' : 'MM',
      'Namibia' : 'NA',
      'Nauru' : 'NR',
      'Nepal' : 'NP',
      'Netherlands' : 'NL',
      'Netherlands Antilles' : 'AN',
      'New Caledonia' : 'NC',
      'New Zealand' : 'NZ',
      'Nicaragua' : 'NI',
      'Niger' : 'NE',
      'Nigeria' : 'NG',
      'Niue' : 'NU',
      'Norfolk Island' : 'NF',
      'Northern Mariana Islands' : 'MP',
      'Norway' : 'NO',
      'Oman' : 'OM',
      'Pakistan' : 'PK',
      'Palau' : 'PW',
      'Palestinian Territory, Occupied' : 'PS',
      'Panama' : 'PA',
      'Papua New Guinea' : 'PG',
      'Paraguay' : 'PY',
      'Peru' : 'PE',
      'Philippines' : 'PH',
      'Pitcairn' : 'PN',
      'Poland' : 'PL',
      'Portugal' : 'PT',
      'Puerto Rico' : 'PR',
      'Qatar' : 'QA',
      'Reunion' : 'RE',
      'Romania' : 'RO',
      'Russian Federation' : 'RU',
      'Rwanda' : 'RW',
      'Saint Barthelemy' : 'BL',
      'Saint Helena' : 'SH',
      'Saint Kitts And Nevis' : 'KN',
      'Saint Lucia' : 'LC',
      'Saint Martin' : 'MF',
      'Saint Pierre And Miquelon' : 'PM',
      'Saint Vincent And Grenadines' : 'VC',
      'Samoa' : 'WS',
      'San Marino' : 'SM',
      'Sao Tome And Principe' : 'ST',
      'Saudi Arabia' : 'SA',
      'Senegal' : 'SN',
      'Serbia' : 'RS',
      'Seychelles' : 'SC',
      'Sierra Leone' : 'SL',
      'Singapore' : 'SG',
      'Slovakia' : 'SK',
      'Slovenia' : 'SI',
      'Solomon Islands' : 'SB',
      'Somalia' : 'SO',
      'South Africa' : 'ZA',
      'South Georgia And Sandwich Isl.' : 'GS',
      'Spain' : 'ES',
      'Sri Lanka' : 'LK',
      'Sudan' : 'SD',
      'Suriname' : 'SR',
      'Svalbard And Jan Mayen' : 'SJ',
      'Swaziland' : 'SZ',
      'Sweden' : 'SE',
      'Switzerland' : 'CH',
      'Syrian Arab Republic' : 'SY',
      'Taiwan' : 'TW',
      'Tajikistan' : 'TJ',
      'Tanzania' : 'TZ',
      'Thailand' : 'TH',
      'Timor-Leste' : 'TL',
      'Togo' : 'TG',
      'Tokelau' : 'TK',
      'Tonga' : 'TO',
      'Trinidad And Tobago' : 'TT',
      'Tunisia' : 'TN',
      'Turkey' : 'TR',
      'Turkmenistan' : 'TM',
      'turks And caicos islands' : 'TC',
      'tuvalu' : 'TV',
      'uganda' : 'UG',
      'ukraine' : 'UA',
      'united Arab Emirates' : 'AE',
      'united Kingdom' : 'GB',
      'united States' : 'US',
      'united States Outlying Islands' : 'UM',
      'uruguay' : 'UY',
      'uzbekistan' : 'UZ',
      'vanuatu' : 'VU',
      'venezuela' : 'VE',
      'viet nam' : 'VN',
      'virgin islands, british' : 'VG',
      'virgin islands, U.S.' : 'VI',
      'wallis And futuna' : 'WF',
      'western Sahara' : 'EH',
      'yemen' : 'YE',
      'zambia' : 'ZM',
      'zimbabwe' : 'ZW'
      }
  }
  refineData = (data) =>{
    data.articles.map(item =>{
      let obj = {
        author:item.author,
        title:item.title,
        description:item.description,
        image:item.urlToImage,
      }

       this.state.data.push(obj);
    })
    return this.state.data;

  }
  searchcity = (e)=>{
    e.preventDefault();
    console.log(e.target[0].value);
    let url = `https://newsapi.org/v2/top-headlines?country=${e.target[0].value}&apiKey=dd4227c5eba040f3a480d9f1040f7538`;
     this.getData(url);
  }
  getData = (url)=>{
    console.log(url);
    
    fetch(url)
    .then(response => {return response.json()})
    .then(data=>{console.log(data);
    this.setState({data:this.refineData(data)},()=>console.log(this.state.data));
    }).catch(err=>console.log(err))
  }



  
    
  render(){
    return (
      
      <div className="App">
       
      <Navbar countryName = {(e)=>this.searchcity(e)}/>
      {this.state.data.map(item =>
    <Content image = {item.image} author = {item.author} title = {item.title} description = {item.description}/>
        )}
      
      </div>
    );

  
}
}


export default App;
