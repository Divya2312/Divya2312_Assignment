const form_data=document.querySelector("#form_data");
        if(form_data)
        {
            form_data.addEventListener("submit",function(e)
            {
               submitForm(e,this);
               
            });
        }



async function submitForm(e,form)
 {
    e.preventDefault();
    const button=document.getElementById("button");
    button.disabled=true;
    setTimeout(()=>button.disabled=false,2000);
    
    const jsonFormData =buildJsonFormData(form);
    const headers =buildHeaders();
    const response= await fetchService.performPostHttpRequest('https://api-notarize.herokuapp.com/customer/createPublicOrder', headers,jsonFormData);
    console.log(response);
    if(response)
       window.location=`/success.html?FullName=${response.FullName}&Email=${response.Email}&PhoneNumber=${response.phoneNumber}&Notarisations=${response.Notarisations}&Signers=${response.Signers}`;
       
    else{
        alert(`An error Occured.`);
    }
 }

function buildJsonFormData(form)
{
    const jsonFormData={ };
    for(const pair of new FormData(form))
    {
        jsonFormData[pair[0]]=pair[1];
    }
    return jsonFormData;
    
}
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};


function myOnClickFn(){
    document.location.href="test1.html";
}