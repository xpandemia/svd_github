const fs = require("fs");
const axios = require('axios').default;
const BaseURL = 'http://skud.bsu.edu.ru:80/soap/IOrionPro';
const xmlBody = `<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:OrionProIntf-IOrionPro" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:GetEvents soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
         <BeginTime xsi:type="xsd:dateTime">2020-12-16T11:00:00</BeginTime>
         <EndTime xsi:type="xsd:dateTime">2020-12-16T16:00:00</EndTime>
         <EventTypes xsi:type="urn:TEventTypes" soapenc:arrayType="urn:TEventType[]" xmlns:urn="urn:OrionProIntf"/>
         <Offset xsi:type="xsd:int">20</Offset>
         <Count xsi:type="xsd:int">2</Count>
         <Persons xsi:type="urn:TPersons" soapenc:arrayType="urn:TPersonData[]" xmlns:urn="urn:OrionProIntf"/>
         <EntryPoints xsi:type="urn:TEntryPoints" soapenc:arrayType="urn:TEntryPoint[]" xmlns:urn="urn:OrionProIntf"/>
         <Sections xsi:type="urn:TSections" soapenc:arrayType="urn:TSection[]" xmlns:urn="urn:OrionProIntf"/>
         <SectionsGroups xsi:type="urn:TSectionsGroups" soapenc:arrayType="urn:TSectionsGroup[]" xmlns:urn="urn:OrionProIntf"/>
      </urn:GetEvents>
   </soapenv:Body>
</soapenv:Envelope>`;
//var zeta;

///******
return axios.post (BaseURL,  xmlBody,{
headers: {
'Content-Type': 'text/xml'
}
}
).then(response => {
    //console.dir(response.data);
    //return response.data;
    //let zeta = response.data;
    //console.dir(response.data);
    //console.log("status ", response.status);
    //console.log("status text ", response.statusText);
    //console.log("Headers ", response.headers);
    //console.log("Config ",response.config);
//file
fs.writeFile("data.xml", response.data, function(error){

    if(error) throw error; // если возникла ошибка
    console.log("Асинхронная запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("data.xml", "utf8");
    console.log(data);  // выводим считанные данные
});
//--file

}


).catch(err => {console.log(err)});
//console.log(zeta);
/////********
